'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _is = require('is');

var _is2 = _interopRequireDefault(_is);

var _message = require('./utils/_message.js');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Finds predefined variable value in variables object
 * Returns variable value if any resolved
 * @param name
 * @param values
 * @returns {*}
 */
function resolveVarValue(name, values) {
    if (_is2.default.undef(values) || _is2.default.args.empty(arguments)) {
        (0, _message2.default)('Error: Missing arguments');
        return undefined;
    }

    if (!_is2.default.string(name) || !_is2.default.object(values)) {
        (0, _message2.default)('Error: Check arguments type');
        return undefined;
    }

    var varName = name.slice(1);

    return values[varName] || null;
}

exports.default = resolveVarValue;
module.exports = exports['default'];