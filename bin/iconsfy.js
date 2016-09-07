#!/usr/bin/env node
/* eslint no-unused-expressions: 0, func-names: 0 */

const yargs = require('yargs');
const { parsePackages } = require('../utils/packages');

const options = {
  'src': {
    alias: 's',
    describe: 'Directory with your svg icons packages',
    type: 'string'
  },
  'build': {
    alias: 'b',
    describe: 'The build directory',
    type: 'string'
  },
  'packages': {
    alias: 'p',
    describe: 'Your svg icons packages',
    array: true,
    coerce: parsePackages,
    type: 'string'
  }
};

yargs
  .version(() => require('../package.json').version)
  .usage('$0 --src <dir> --build <dir> --packages [<package-dir:package-prefix>]')
  .example('$0 -s ./images -b ./components -p icons:ic font-awesome:fa')
  .options(options)
  .wrap(Math.min(100, yargs.terminalWidth()))
  .strict()
  .help()
  .argv;

require('../lib');
