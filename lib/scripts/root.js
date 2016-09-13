const fs = require('fs');
const { getComponentsList, template } = require('../../utils/component');

module.exports = (packages, build) => (cb) => {
  const newfile = `${build}/index.js`;
  const components = getComponentsList(packages, build);

  return fs.writeFile(newfile, template('index.js', { components }), 'utf-8', cb);
};
