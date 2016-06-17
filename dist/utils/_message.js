'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _logUtil = require('log-util');

var _logUtil2 = _interopRequireDefault(_logUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pretty logger
 * Returns beautified message
 * @param text
 */
function message(text) {
    var normalText = text.toLowerCase();

    if (~normalText.indexOf('warning')) {
        _logUtil2.default.warn(text);
    } else if (~normalText.indexOf('error')) {
        _logUtil2.default.error(text);
    } else {
        _logUtil2.default.debug(text);
    }
}

exports.default = message;
module.exports = exports['default'];