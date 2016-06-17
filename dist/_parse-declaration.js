"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Parses variable declaration
 * Returns $key: $value pair
 * @param declaration
 * @returns {{key: (*|string), value: (*|string)}}
 */
function parseDeclaraion(declaration) {
    var keyRegexp = /(?:\$)([\w-]+)(?:[\s\n\r\t])*(?::)/;
    var valueRegexp = /(?::)(?:[\s\n\r\t])*(.+)(?:[\s\n\r\t])*(?:;)/;

    var matchKey = declaration.match(keyRegexp);
    var key = matchKey[1].trim();

    var matchValue = declaration.match(valueRegexp);
    var value = matchValue[1].trim();

    return { key: key, value: value };
}

exports.default = parseDeclaraion;
module.exports = exports['default'];