'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parses file
 * Returns declarations array
 * @param filePath
 * @returns {Array|{index: number, input: string}|*|Array}
 */
function collectDeclarations(filePath) {
  var declarationRegexp = /(?:\$)([\w-]+)(?:[\s\n\r\t])*(?::)(?:[\s\n\r\t])*(.+)(?:[\s\n\r\t])*(?:;)/gm;
  var fileSource = _fs2.default.readFileSync(filePath, 'utf8');

  return fileSource.match(declarationRegexp);
}

exports.default = collectDeclarations;
module.exports = exports['default'];