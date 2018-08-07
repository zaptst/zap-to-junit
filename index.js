// @flow
'use strict';

const { Transform } = require('stream');

function convert(str /*: string */) /*: string */ {
  return '';
}

function stream() /*: Transform */ {
  return new Transform();
}

module.exports = convert;
module.exports.stream = stream;
