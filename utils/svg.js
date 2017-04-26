const _ = require('lodash');
const cheerio = require('cheerio');
const through = require('through2');
const Svgo = require('svgo');

const load = (file) =>
  cheerio.load(String(file), { xmlMode: true });

const removeFillAttr = ($) => function(idx, $el) {
  $(this).removeAttr('fill');
  $(this).removeAttr('fill');
};

const removeUnnecessaryAttrs = ($) => {
  const $svg = $('svg');
  const paths = $svg.find('path');
  const groups = $svg.find('g');

  $svg.children('title').remove();
  $svg.removeAttr('xmlns');

  paths.each(removeFillAttr($));
  groups.each(removeFillAttr($));

  return $;
};

const normalize = (file) => {
  const $ = removeUnnecessaryAttrs(load(file));

  return $.html()
    .replace('fill-rule', 'fillRule')
    .replace('xlink:href', 'xlinkHref');
};

exports.minify = () => through((file, enc, cb) =>
  new Svgo().optimize(String(file), ({ data }) => cb(null, data)));

exports.parse = () => through((file, enc, cb) =>
  cb(null, new Buffer(normalize(file), 'utf-8')));

exports.load = load;
