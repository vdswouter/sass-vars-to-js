'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _is = require('is');

var _is2 = _interopRequireDefault(_is);

var _nodeSass = require('node-sass');

var _nodeSass2 = _interopRequireDefault(_nodeSass);

var _message = require('./utils/_message.js');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resolve variable value
 * By variable name and previous code
 * @param varName
 * @param scssExpression
 */
function getExpressionValue(varName, scssExpression) {
    if (_is2.default.undef(scssExpression) || _is2.default.args.empty(arguments)) {
        (0, _message2.default)('Error: Missing arguments');
        return undefined;
    }

    if (!_is2.default.string(varName) || !_is2.default.string(scssExpression)) {
        (0, _message2.default)('Error: Check arguments type');
        return undefined;
    }

    if (!~scssExpression.indexOf('$')) {
        (0, _message2.default)('Warning: Check scssExpression to contain valid code');
    }

    // print the interpolated value in comment string
    // /*#{$varName}*/ --> /*varValue*/
    var scssContent = scssExpression + '/*#{$' + varName + '}*/';

    var sassResult = _nodeSass2.default.renderSync({
        data: scssContent
    });

    var cssResult = sassResult.css.toString();

    return extractExpressionValue(cssResult);
}

/**
 * Parse calculated variable value
 * From CSS comment
 * @param css
 * @returns {*}
 */
function extractExpressionValue(css) {

    // parse the comment string:
    // /*varValue*/ --> varValue
    var valueRegExp = /(?:\/\*)(.+)(?:\*\/)/;
    var value = css.match(valueRegExp)[1];

    if (!value) {
        (0, _message2.default)('Warning: empty value');
    }

    return value;
}

exports.default = getExpressionValue;
module.exports = exports['default'];