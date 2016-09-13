const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const async = require('async');
const glob = require('glob');
const { svg, component } = require('../../utils');

const createComponent = (pkg, build) => (filepath, cb) => {
  const iconName = path.parse(filepath).name;
  const compName = component.parseName(pkg.prefix, iconName);

  fs.createReadStream(filepath)
    .pipe(svg.minify())
    .pipe(svg.parse(pkg))
    .pipe(component.create(compName))
    .pipe(component.writeJsFile(compName, build))
    .on('readable', cb);
};

const generateSprite = (src, build) => (pkg, cb) => {
  async.each(
    glob.sync(`${src}/${pkg.dir}/**.svg`),
    createComponent(pkg, build),
    cb
  );
}

module.exports = (packages, src, build) => (cb) => {
  async.each(packages, generateSprite(src, build), cb);
};
