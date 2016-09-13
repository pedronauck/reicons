const del = require('del');

module.exports = (packages, build) => (cb) => {
  packages.forEach(({ dir, prefix }) => del.sync(`${build}/${prefix}`));
  cb();
};
