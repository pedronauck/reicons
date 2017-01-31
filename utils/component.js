const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const svg = require('./svg');
const through = require('through2');
const { success: tick } = require('log-symbols');
const { white, bold } = require('chalk');
const { test, mkdir, ls } = require('shelljs');

_.templateSettings.interpolate = /<%=([\s\S]+?)%>/g;

const TEMPLATE_DIR = path.resolve(__dirname, '../lib/templates');

const parseName = (prefix, iconName) =>
  _.upperFirst(_.camelCase(`${prefix}-${iconName}`));

const template = (filename, props) =>
  _.template(String(fs.readFileSync(`${TEMPLATE_DIR}/${filename}`)))(props);

exports.create = (prefix, compName) => through((file, enc, cb) => {
  const $ = svg.load(file);
  const svgContent = _.replace($('svg').html(), /"\/>/g, '" />');
  const defaultSize = $('svg').attr('width');
  const templateProps = {
    component: prefix + compName,
    svgContent,
    defaultSize
  };

  return cb(null, new Buffer(template('component.js', templateProps), 'utf-8'));
});

exports.writeJsFile = (prefix, compName, build) => through((file, enc, cb) => {
  const iconName = compName.substring(prefix.length, compName.length);
  const dirToBundle = `${build}/${prefix}`;
  const fileToCreate = `${dirToBundle}/${iconName}.js`;

  if (!test('-d', dirToBundle)) mkdir('-p', dirToBundle);
  fs.writeFile(fileToCreate, file, 'utf-8', cb);

  console.log(white(`${tick}  File created: ${bold(fileToCreate)}`));
});

exports.getComponentPackages = (packages, build) =>
  packages.map(pkg => ({
    prefix: pkg.prefix,
    components: ls(`${build}/${pkg.prefix}`).map((comp) => `${path.parse(comp).name}`)
  }));

exports.parseName = parseName;
exports.template = template;
