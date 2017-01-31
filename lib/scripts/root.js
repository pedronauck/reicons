const fs = require('fs');
const { getComponentPackages, template } = require('../../utils/component');

module.exports = (pkgs, build) => (cb) => {
  const newfile = `${build}/index.js`;
  const packages = getComponentPackages(pkgs, build);

  return fs.writeFile(newfile, template('index.js', { packages }), 'utf-8', cb);
};
