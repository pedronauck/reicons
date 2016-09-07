const { upperFirst } = require('lodash');

const PACKAGES_REGEXP = /(\w+\D+)(:)(\w+)/;

exports.parsePackages = (packages) =>
  packages.map((pkg) => {
    const pkgParsed = pkg.match(PACKAGES_REGEXP);

    return {
      dir: pkgParsed[1],
      prefix: upperFirst(pkgParsed[3])
    };
  });
