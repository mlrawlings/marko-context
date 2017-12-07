let assert = require('assert');
let template = require('./template.marko');

it('renders subtree contexts', () => {
    let result = template.renderSync().toString();
    let redIndex = result.indexOf('red');
    assert(redIndex >= 0, '"red" is missing from the output');
})