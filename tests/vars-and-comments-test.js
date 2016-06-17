var TEST_NAME = 'vars-and-comments';

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
        result.color.value,
        '#fff',

        'should get value next to block comment'
    );

    t.equal(
        result['color-rgba'].value,
        'rgba(255,255,255,1)',

        'should get value next to multiline block comment'
    );

    t.equal(
        result.font.value,
        'Arial, \'Helvetica Neue\', sans-serif',

        'should get value next to inline comment'
    );

    t.equal(
        result['font-size'].value,
        '1.8em',

        'should get value next to multiline comment'
    );

    t.equal(
        result['line-height-regular'].value,
        '1',

        'should get value along with block comment'
    );

    t.equal(
        result['line-height-loose'].value,
        '2',

        'should get value along with inline comment'
    );

    t.end();
});
