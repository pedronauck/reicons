const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const async = require('async');
const through = require('through2');
const emoji = require('node-emoji');
const { cyan, yellow, green } = require('chalk');
const { test, mkdir, ls } = require('shelljs');
const { svg, component } = require('../../utils');

const createIconObject = (compName) => through((file, enc, callback) => {
  const $ = svg.load(file);
  const path = _.replace($('svg').html(), /"\/>/g, '" />');
  const viewBox = $('svg').attr('viewBox');
  const className = `Icon--${compName}`;

  const content = JSON.stringify({
    [compName]: { path, viewBox, className }
  });

  return callback(null, new Buffer(content, 'utf-8'));
});

const createIconsObject = ({ prefix }, build) => (obj, filepath, cb) => {
  const iconName = path.parse(filepath).name;
  const compName = component.parseName(prefix, iconName);

  fs.createReadStream(filepath)
    .pipe(svg.minify())
    .pipe(svg.parse())
    .pipe(createIconObject(compName))
    .on('data', (chunk) =>
      cb(null, Object.assign({}, obj, JSON.parse(chunk.toString())))
    );
};

const createPackageObject = (src, build) => (obj, pkg, cb) => {
  const files = ls(`${src}/${pkg.dir}/**.svg`);

  async.reduce(files, {}, createIconsObject(pkg, build), (err, result) =>
    cb(err, Object.assign({}, obj, result))
  );
};

const checkManifest = (icons, build) => {
  const path = `${build}/manifest.json`;

  if (test('-f', path) && fs.readFileSync(path, 'utf-8') === JSON.stringify(icons)) {
    const package = emoji.get(':package:');
    const message = cyan(`${package}  You don't have new icons to bundle!`);

    process.stderr.clearLine();
    process.stderr.cursorTo(0);

    console.log(message);
    return true;
  }
};

const createManifest = (icons, build) => (cb) => {
  const newfile = `${build}/manifest.json`;

  if (!test('-d', build)) mkdir('-p', build);
  fs.writeFile(newfile, JSON.stringify(icons), 'utf-8', cb);
};

const createIndex = (icons, build) => (cb) => {
  const newfile = `${build}/index.js`;

  fs.writeFile(newfile, component.template('index.js', { icons }), 'utf-8', () => {
    const total = yellow.bold(Object.keys(icons).length + ' icons');
    const package = emoji.get(':package:');
    const message = `${package}  ${total} bundled successfuly!`;

    process.stderr.clearLine();
    process.stderr.cursorTo(0);

    console.log(message);
    cb();
  });
};

module.exports = (packages, src, build) => {
  process.stderr.write(cyan(`${emoji.get(':hourglass:')}  Generating your icons bundle...`));

  async.reduce(packages, {}, createPackageObject(src, build), (err, icons) => {
    if (!checkManifest(icons, build)) {
      async.series([
        createManifest(icons, build),
        createIndex(icons, build)
      ])
    }
  });
};
