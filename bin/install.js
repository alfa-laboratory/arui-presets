#!/usr/bin/env node

'use strict';

const path = require('path');
const fs = require('fs');
const findParentDir = require('find-parent-dir');
const commandLineArgs = require('command-line-args');

const optionsDefinitions = [
    { name: 'force', alias: 'f', type: Boolean, defaultValue: false },
    { name: 'config', alias: 'c', type: String, defaultOption: true, multiple: true }
];

const options = commandLineArgs(optionsDefinitions);

if (!options.config || options.config.length === 0) {
    return console.log('You should pass config filenames to copy using `-c` option');
}

console.log('Installing arui-presets...');
install();

function copyFile(src, dst) {
    const content = fs.readFileSync(src, 'utf8');
    return fs.writeFileSync(dst, content, 'utf8');
}

function install() {
    const isInSubmodule = (__dirname.match(/node_modules/g) || []).length > 1;
    if (isInSubmodule) {
        return console.log('Trying to install from sub `node_modules` directory. Skip presets installation');
    }

    const srcDir = path.resolve(__dirname, '..');
    const searchStartDir = path.resolve(srcDir, '..');
    const parentDir = findParentDir.sync(searchStartDir, 'package.json');
    if (!parentDir) {
        return console.warn('Could not found parent package. Skip the installation');
    }
    const targetDir = path.resolve(parentDir);

    if (!targetDir || targetDir === srcDir) {
        return;
    }

    options.config.forEach(filename => {
        const targetPath = path.resolve(targetDir, filename);
        if (!options.force && fs.existsSync(targetPath)) {
            console.log('Skip ' + filename + ' because it already exists. Pass -f if you want to override it.');
        } else {
            if (!fs.existsSync(path.resolve(srcDir, filename))) {
                return console.log('Unknown config file ' + filename);
            }
            console.log('Copy ' + filename + ' from arui-presets');
            copyFile(path.resolve(srcDir, filename), targetPath);
        }

    });
}
