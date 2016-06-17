'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message = require('./utils/_message');

var _message2 = _interopRequireDefault(_message);

var _collectDeclarations = require('./_collect-declarations');

var _collectDeclarations2 = _interopRequireDefault(_collectDeclarations);

var _parseDeclaration = require('./_parse-declaration');

var _parseDeclaration2 = _interopRequireDefault(_parseDeclaration);

var _getValueType = require('./_get-value-type');

var _getValueType2 = _interopRequireDefault(_getValueType);

var _getVarValue = require('./_get-var-value');

var _getVarValue2 = _interopRequireDefault(_getVarValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Takes file.scss as an argument
 * Returns parsed variables hash-map
 * @param filePath
 * @returns {{}}
 */
function sassVars(filePath) {
    var declarations = (0, _collectDeclarations2.default)(filePath);
    var variables = {};

    if (!declarations.length) {
        (0, _message2.default)('Warning: Zero declarations found');
        return;
    }

    declarations.forEach(function (declaration) {
        var parsedDeclaration = (0, _parseDeclaration2.default)(declaration);
        var varName = parsedDeclaration.key;
        var varValue = parsedDeclaration.value;
        var varString = parsedDeclaration.value;
        var valueType = (0, _getValueType2.default)(varValue);

        /*
         * $key: $value;
         */
        if (valueType === 'var') {
            var localVarName = varValue;
            varValue = (0, _getVarValue2.default)(localVarName, variables);

            if (!varValue) {
                (0, _message2.default)('Warning: Null value for variable ' + localVarName);
            } else {
                if ('value' in varValue) {
                    varValue = varValue.value;
                }
            }
        }

        /*
         * $key: ($value-1 + $value-2) * $value-3 ... ;
         */
        if (valueType === 'expression') {}
        // todo


        /*
         * $key: value;
         */
        variables[varName] = { value: varValue, raw: varString };
    });

    return variables;
}

exports.default = sassVars;
module.exports = exports['default'];