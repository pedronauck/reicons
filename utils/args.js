const { bold, red } = require('chalk');

exports.failOnMissingArg = (arg, name) => {
  if (!arg) {
    console.log(red(`Missing required argument: ${bold(name)}`));
    process.exit(1);
  }
};
