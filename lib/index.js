const { argv } = require('yargs');
const { series } = require('async');
const { clean, sprite } = require('./scripts');
const { failOnMissingArg } = require('../utils/args');

const BUILD_DIR = argv.b;
const SRC_DIR = argv.s;
const PACKAGES = argv.p;

const checkArguments = () => {
  failOnMissingArg(BUILD_DIR, '--build');
  failOnMissingArg(SRC_DIR, '--source');
  failOnMissingArg(PACKAGES, '--packages');
};

exports.run = () => {
  checkArguments();

  series([
    clean(PACKAGES, BUILD_DIR)
    sprite(PACKAGES, SRC_DIR, BUILD_DIR);
  ]);
};
