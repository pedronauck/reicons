const _ = require('lodash');
const cheerio = require('cheerio');
const through = require('through2');
const Svgo = require('svgo');

const load = (file) =>
  cheerio.load(String(file), { xmlMode: true });

const removeUnnecessaryAttrs = ($, icon) => {
  const $svg = $('svg');

  $svg.children('title').remove();
  $svg.children('path').removeAttr('fill').removeAttr('fill-rule');
  $svg.children('g').removeAttr('fill').removeAttr('fill-rule');
  $svg.removeAttr('xmlns');

  return $;
};

const normalize = (icon, file) => {
  const $ = removeUnnecessaryAttrs(load(file), icon);

  return _.chain($.html())
    .replace('xlink:href', 'xlinkHref')
    .value();
};

exports.minify = () => through((file, enc, cb) => {
  new Svgo().optimize(file, result => cb(null, result.data));
});

exports.parse = (icon) => through((file, enc, cb) =>
  cb(null, new Buffer(normalize(icon, file), 'utf-8')));

exports.load = load;
