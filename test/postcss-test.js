/* eslint no-console: 0 */

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
    .then(result => console.log(result.css));

postcss(postcssConfig(mqConfig, []))
    .process(cssFile)
    .then(result => console.log(result.css));

postcss(postcssConfig(mqConfig, [], id => id))
    .process(cssFile)
    .then(result => console.log(result.css));
