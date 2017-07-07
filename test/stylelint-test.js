const stylelint = require('stylelint');
const fs = require('fs');
const path = require('path');
const stylelintConfig = require('../stylelint');

const cssFile = fs.readFileSync(path.join(__dirname, './css-input.css'), 'utf8');

stylelint.lint({
    code: cssFile,
    config: stylelintConfig
}).then((result) => {
    if (result.errored) {
        console.log(result.output); // eslint-disable-line no-console
        process.exit(-1);
    }
});
