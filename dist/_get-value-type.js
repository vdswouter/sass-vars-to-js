'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function getValueType(value) {
    var type = 'value';
    var varNameRegexp = /^\$[\w-]+$/;

    if (varNameRegexp.test(value)) {
        type = 'var';
    }

    return type;
}

exports.default = getValueType;
module.exports = exports['default'];