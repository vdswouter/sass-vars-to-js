var TEST_NAME = 'complex-vars';

var path = require('path');

var test = require('tape');
var converter = require('../index.js');

test(TEST_NAME, function (t) {

    var sassFilePath = path.resolve(__dirname, 'scss', TEST_NAME + '.scss');
    var result = converter(sassFilePath);

    t.ok(
        result,

        'should get result'
    );

    t.equal(
        result['color-primary'].value,
        '#000',

        'should return value of existing variable'
    );

    t.equal(
        result['color-tertiary'].value,
        null,

        'should return null for unknown variable'
    );

    t.equal(
        result['color-accent'].value,
        null,

        'should return null for later coming variable'
    );

    t.equal(
        result['color-yellow'].value,
        '#ee3',

        'should return value for later coming variable'
    );

    t.notEqual(
        result['offset-s'].value,
        '10px',

        'should not return variable value in expression'
    );

    t.equal(
        result['c'].value,
        '100',

        'should return deep linked value (1)'
    );

    t.equal(
        result['d'].value,
        '100',

        'should return deep linked value (2)'
    );

    t.equal(
        result['e'].value,
        '100',

        'should return deep linked value (3)'
    );

    // todo: update test
    t.notEqual(
        result['offset-s'].value,
        '5px',

        'should not return result of calculation'
    );

    // todo: update test
    t.notEqual(
        result['offset-l'].value,
        '20px',

        'should not return result of calculation'
    );

    t.end();
});
