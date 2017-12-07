let assert = require('assert');
let template = require('./template.marko');

it('renders subtree contexts', () => {
    let result = template.renderSync().toString();
    let frankIndex = result.indexOf('Frank');
    let janeIndex = result.indexOf('Jane');
    assert(frankIndex >= 0, '"Frank" is missing from the output');
    assert(janeIndex >= 0, '"Jane" is missing from the output');
    assert(janeIndex < frankIndex, '"Jane" should come before "Frank" in the output');
})