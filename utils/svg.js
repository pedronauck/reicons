const _ = require('lodash');
const cheerio = require('cheerio');
const through = require('through2');
const Svgo = require('svgo');

const load = (file) =>
  cheerio.load(String(file), { xmlMode: true });

const removeUnnecessaryAttrs = ($) => {
  const $svg = $('svg');

  $svg.children('title').remove();
  $svg.children('path').removeAttr('fill');
  $svg.children('g').removeAttr('fill');
  $svg.removeAttr('xmlns');

  return $;
};

const normalize = (file) => {
  const $ = removeUnnecessaryAttrs(load(file));

  return _.chain($.html())
    .replace('fill-rule', 'fillRule')
    .replace('xlink:href', 'xlinkHref')
    .value();
};

exports.minify = () => through((file, enc, cb) =>
  new Svgo().optimize(String(file), ({ data }) => cb(null, data)));

exports.parse = () => through((file, enc, cb) =>
  cb(null, new Buffer(normalize(file), 'utf-8')));

exports.load = load;
