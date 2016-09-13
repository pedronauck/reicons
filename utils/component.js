const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const svg = require('./svg');
const through = require('through2');

_.templateSettings.interpolate = /<%=([\s\S]+?)%>/g;

const TEMPLATE_DIR = path.resolve(__dirname, '../lib/templates');

const parseName = (prefix, iconName) =>
  _.upperFirst(_.camelCase(`${prefix}-${iconName}`));

const template = (filename, props) =>
  _.template(String(fs.readFileSync(`${TEMPLATE_DIR}/${filename}`)))(props);

exports.create = (compName) => through((file, enc, cb) => {
  const $ = svg.load(file);
  const svgContent = _.replace($('svg').html(), /"\/>/g, '" />');
  const defaultSize = $('svg').attr('width');
  const templateProps = {
    component: compName,
    svgContent,
    defaultSize
  };

  return cb(null, new Buffer(template('component.js', templateProps), 'utf-8'));
});

exports.writeJsFile = (compName, build) => through((file, enc, cb) => {
  const iconPrefix = compName.substring(0, 2);
  const iconName = compName.substring(2, compName.length);
  const dirToBundle = `${build}/${iconPrefix}/`;

  const createIconFile = () =>
    fs.writeFile(`${dirToBundle}/${iconName}.js`, file, 'utf-8', cb);

  const createIconsDir = () => {
    try {
      fs.accessSync(dirToBundle);
      createIconFile();
    } catch (e) {
      fs.mkdirSync(dirToBundle);
      createIconFile();
    }
  }

  try {
    fs.accessSync(build)
    createIconsDir();
  } catch (e) {
    fs.mkdirSync(build);
    createIconsDir();
  }
});

exports.getComponentsList = (packages, build) =>
  _.flatten(packages.map(({ prefix }) =>
    fs.readdirSync(`${build}/${prefix}`)
      .map((comp) => `${prefix}${path.parse(comp).name}`)));

exports.parseName = parseName;
exports.template = template;
