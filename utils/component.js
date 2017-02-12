const _ = require('lodash');
const fs = require('fs');
const path = require('path');
_.templateSettings.interpolate = /<%=([\s\S]+?)%>/g;

const TEMPLATE_DIR = path.resolve(__dirname, '../lib/templates');

const parseName = (prefix, iconName) =>
  _.upperFirst(_.camelCase(`${prefix}-${iconName}`));

const template = (filename, props) =>
  _.template(String(fs.readFileSync(`${TEMPLATE_DIR}/${filename}`)))(props);

exports.parseName = parseName;
exports.template = template;
