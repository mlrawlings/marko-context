let assert = require('assert');
let template = require('./package1/template.marko');

it('renders subtree contexts', () => {
    let result = template.renderSync().toString();
    let redIndex = result.indexOf('red');
    assert(redIndex === -1, '"red" should not have been in the output');
})