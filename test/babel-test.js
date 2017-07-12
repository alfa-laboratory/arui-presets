const babel = require('babel-core');
const fs = require('fs');
const path = require('path');

const jsFile = fs.readFileSync(path.join(__dirname, './js-input.jsx'), 'utf8');

// babel with default module
const browserCode = babel.transform(jsFile, {
    presets: [require.resolve('../babel.js')]
}).code;

console.log('browser code:\n', browserCode); // eslint-disable-line no-console

// babel with es2015 modules
const browserCodeModules = babel.transform(jsFile, {
    presets: [[require.resolve('../babel.js'), { modules: false }]]
}).code;

console.log('browser code without modules:\n', browserCodeModules); // eslint-disable-line no-console

// babel-node with default module
const nodeCode = babel.transform(jsFile, {
    presets: [require.resolve('../babel-node.js')]
}).code;

console.log('node code:\n', nodeCode); // eslint-disable-line no-console


// babel with es2015 modules
const nodeModulesCode = babel.transform(jsFile, {
    presets: [[require.resolve('../babel-node.js'), { modules: false }]]
}).code;

console.log('node code without modules:\n', nodeModulesCode); // eslint-disable-line no-console
