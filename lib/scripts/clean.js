const { rm } = require('shelljs');

module.exports = (packages, build) => (cb) => {
  rm('-rf', build);
  cb();
};
