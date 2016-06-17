var TEST_NAME = 'plain-vars';

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

        'should get value by property name (simple)'
    );

    t.equal(
        result.margin.value,
        '10px auto 20px',

        'should get value with spaces and not stringified'
    );

    t.equal(
        result['color-rgba'].value,
        'rgba(255,255,255,1)',

        'should get value by property name (complex)'
    );

    t.equal(
        typeof result.color.value,
        'string',

        'should return String for String variable'
    );

    t.equal(
        typeof result.columns.value,
        'string',

        'should return String value for Number variable'
    );

    t.equal(
        result['line-height-h1'].value,
        '1.1',

        'should get value with syntax [var]:[value];'
    );

    t.equal(
        result['line-height-h2'].value,
        '1.2',

        'should get value with syntax [var] :[value];'
    );

    t.equal(
        result['line-height-h3'].value,
        '1.3',

        'should get value with syntax [var] : [value];'
    );

    t.equal(
        result['line-height-h4'].value,
        '1.4',

        'should get value with syntax [var]: [value] ;'
    );

    t.equal(
        result['line-height-h5'].value,
        '1.5',

        'should get value with semicolon (;) on the next line'
    );

    t.equal(
        result['line-height-h6'].value,
        '1.6',

        'should get value with semicolon (;) on some line below'
    );

    t.equal(
        result['z_index__modal'].value,
        '1000',

        'should get value with variable in snake__case'
    );

    t.equal(
        result['opacity--heavy'].value,
        '.4',

        'should get value with variable in kebab--case'
    );

    t.equal(
        result['TEXT_TRANSFORM'].value,
        'uppercase',

        'should get value with variable in CAPS'
    );

    t.equal(
        result['offset-l'].value,
        '2rem',

        'should get value with syntax: ;[var]: [value]'
    );

    t.equal(
        result['offset-xl'].value,
        '3rem',

        'should get value with syntax: ; [var]: [value]'
    );

    t.equal(
        result['offset-xxl'].value,
        '4rem',

        'should get value with syntax: [space]; [var]: [value]'
    );

    t.equal(
        result['page-offset'].value,
        '20px',

        'should get value with mixed syntax of newlines spaces and tabs'
    );

    //check the raw values

    t.equal(
        result.color.raw,
        '#fff',

        'should get value by property name (simple)'
    );

    t.equal(
        result.margin.raw,
        '10px auto 20px',

        'should get value with spaces and not stringified'
    );

    t.equal(
        result['color-rgba'].raw,
        'rgba(255,255,255,1)',

        'should get value by property name (complex)'
    );

    t.equal(
        typeof result.color.raw,
        'string',

        'should return String for String variable'
    );

    t.equal(
        typeof result.columns.raw,
        'string',

        'should return String value for Number variable'
    );

    t.equal(
        result['line-height-h1'].raw,
        '1.1',

        'should get value with syntax [var]:[value];'
    );

    t.equal(
        result['line-height-h2'].raw,
        '1.2',

        'should get value with syntax [var] :[value];'
    );

    t.equal(
        result['line-height-h3'].raw,
        '1.3',

        'should get value with syntax [var] : [value];'
    );

    t.equal(
        result['line-height-h4'].raw,
        '1.4',

        'should get value with syntax [var]: [value] ;'
    );

    t.equal(
        result['line-height-h5'].raw,
        '1.5',

        'should get value with semicolon (;) on the next line'
    );

    t.equal(
        result['line-height-h6'].raw,
        '1.6',

        'should get value with semicolon (;) on some line below'
    );

    t.equal(
        result['z_index__modal'].raw,
        '1000',

        'should get value with variable in snake__case'
    );

    t.equal(
        result['opacity--heavy'].raw,
        '.4',

        'should get value with variable in kebab--case'
    );

    t.equal(
        result['TEXT_TRANSFORM'].raw,
        'uppercase',

        'should get value with variable in CAPS'
    );

    t.equal(
        result['offset-l'].raw,
        '2rem',

        'should get value with syntax: ;[var]: [value]'
    );

    t.equal(
        result['offset-xl'].raw,
        '3rem',

        'should get value with syntax: ; [var]: [value]'
    );

    t.equal(
        result['offset-xxl'].raw,
        '4rem',

        'should get value with syntax: [space]; [var]: [value]'
    );

    t.equal(
        result['page-offset'].raw,
        '20px',

        'should get value with mixed syntax of newlines spaces and tabs'
    );

    t.end();
});
