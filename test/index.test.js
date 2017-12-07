let fs = require('fs');
let path = require('path');
let fixuresDir = path.join(__dirname, 'fixtures');
let testNames = fs.readdirSync(fixuresDir);

require('marko/node-require');

testNames.forEach(testName => {
    describe(testName, () => {
        require(path.join(fixuresDir, testName, 'test'));
    });
});