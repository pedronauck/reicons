const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const async = require('async');
const through = require('through2');
const { cyan } = require('chalk');
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

const createIndexFile = (build, cb) => (err, icons) => {
  const newfile = `${build}/index.js`;

  if (!test('-d', build)) mkdir('-p', build);
  fs.writeFile(newfile, component.template('index.js', { icons }), 'utf-8', cb);
};

module.exports = (packages, src, build) => (cb) => {
  console.log(cyan('Generating your component...'));
  async.reduce(packages, {}, createPackageObject(src, build), createIndexFile(build, cb));
};
