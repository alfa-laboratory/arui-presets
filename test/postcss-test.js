const postcss = require('postcss');
const fs = require('fs');
const path = require('path');
const postcssConfig = require('../postcss');

const cssFile = fs.readFileSync(path.join(__dirname, './css-input.css'), 'utf8');

const mqConfig = {
    '--small-only': 'screen and (max-width: 47.9375em)'
};

postcss(postcssConfig(mqConfig))
    .process(cssFile)
    // eslint-disable-next-line no-console
    .then(result => console.log(result.css));
