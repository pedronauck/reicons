const { bold, red } = require('chalk');
const { exit } = require('shelljs');

exports.failOnMissingArg = (arg, name) => {
  if (!arg) {
    console.log(red(`Missing required argument: ${bold(name)}`));
    exit(1);
  }
};
