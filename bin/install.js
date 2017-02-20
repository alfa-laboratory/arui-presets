const path = require('path');
const fs = require('fs');
const findParentDir = require('find-parent-dir');

const filesToCopy = [
    '.editorconfig',
    '.eslintrc',
    'stylelint.config.js'
];

function copyFile(src, dst) {
    const content = fs.readFileSync(src, 'utf8');
    return fs.writeFileSync(dst, content, 'utf8');
}

function install() {
    console.log('install arui-presets');
    const isInSubmodule = (__dirname.match(/node_modules/g) || []).length > 1;
    if (isInSubmodule) {
        return console.log('Trying to install from sub `node_modules` directory. Skip presets installation');
    }

    const srcDir = path.resolve(__dirname, '..');
    const searchStartDir = path.resolve(srcDir, '..');
    const targetDir = path.resolve(findParentDir.sync(searchStartDir, 'package.json'));

    if (!targetDir || targetDir === srcDir) {
        return;
    }

    filesToCopy.forEach(filename => {
        console.log('copy ' + filename + ' from arui-presets');
        copyFile(path.resolve(srcDir, filename), path.resolve(targetDir, filename));
    });
}

install();
