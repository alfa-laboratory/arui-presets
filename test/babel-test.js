const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');

const jsFile = fs.readFileSync(path.join(__dirname, './js-input.jsx'), 'utf8');

// babel with default module
const browserCode = babel.transform(jsFile, {
    presets: [require.resolve('../babel.js')]
}).code;

console.log('browser code:\n', browserCode); // eslint-disable-line no-console

