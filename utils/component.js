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
  const dirToBundle = `${build}/${iconPrefix}`;
  const fileToCreate = `${dirToBundle}/${iconName}.js`;

  if (!test('-d', dirToBundle)) mkdir('-p', dirToBundle);
  fs.writeFile(fileToCreate, file, 'utf-8', cb);

  console.log(white(`${tick}  File created: ${bold(fileToCreate)}`));
});

exports.getComponentsList = (packages, build) =>
  _.flatten(packages.map(({ prefix }) =>
    ls(`${build}/${prefix}`).map((comp) => `${prefix}${path.parse(comp).name}`))
  );

exports.parseName = parseName;
exports.template = template;
