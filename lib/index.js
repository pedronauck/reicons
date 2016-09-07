const { argv } = require('yargs');
const async = require('async');
const clean = require('./clean');

const BUILD_DIR = argv.b;
const SRC_DIR = argv.s;
const PACKAGES = argv.p;

exports.run = () => {
  async.series([
    clean(PACKAGES, BUILD_DIR)
  ]);
};
