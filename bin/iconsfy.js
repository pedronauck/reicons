#!/usr/bin/env node
/* eslint no-unused-expressions: 0, func-names: 0 */

const yargs = require('yargs');
const { parsePackages } = require('../utils/packages');

const options = {
  'packages': {
    alias: 'p',
    describe: 'Your svg icons packages',
    array: true,
    coerce: parsePackages,
    type: 'string'
  },
  'src': {
    alias: 's',
    describe: 'Directory with your svg icons packages',
    type: 'string'
  },
  'build': {
    alias: 'b',
    describe: 'The build directory',
    type: 'string'
  }
};

yargs
  .version(() => require('../package.json').version)
  .usage('$0 --packages [<package-dir:package-prefix>] --src <dir> --build <dir>')
  .example('$0 -p icons:ic font-awesome:fa -s ./images -b ./components')
  .options(options)
  .wrap(Math.min(100, yargs.terminalWidth()))
  .strict()
  .help()
  .argv;

require('../lib').run();
