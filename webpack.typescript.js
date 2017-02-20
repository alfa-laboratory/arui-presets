const path = require('path');
const fs = require('fs');

const babelConfigPath = path.resolve(__dirname, './.babelrc');
const babelConfig = JSON.parse(fs.readFileSync(babelConfigPath, 'utf8'));
const tsConfigPath = path.resolve(__dirname, './tsconfig.json');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader?' + JSON.stringify(babelConfig.query) + '!ts-loader?configFileName=' + tsConfigPath,
            }
        ]
    }
};
