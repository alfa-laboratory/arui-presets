const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const babelConfigPath = path.resolve(__dirname, './.babelrc');
const babelConfig = JSON.parse(fs.readFileSync(babelConfigPath, 'utf8'));
const postcssConfigPath = path.resolve(__dirname, './postcss.config.js');

const ASSETS_BASE_QUERY = {
    name: '[name].[hash].[ext]',
    limit: 10000
};

module.exports = {
    resolve: {
        root: [
            path.join(__dirname, 'node_modules'),
        ],
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.json?$/,
                loader: 'json-loader',
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: babelConfig
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap!postcss-loader?config=' + postcssConfigPath,
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: Object.assign({ mimetype: 'application/font-woff' }, ASSETS_BASE_QUERY)
            },
            {
                test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: Object.assign({ mimetype: 'application/octet-stream' }, ASSETS_BASE_QUERY)
            },
            {
                test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
            {
                test: /\.(jpe?g)$/i,
                loader: 'url-loader',
                query: Object.assign({ mimetype: 'image/jpeg' }, ASSETS_BASE_QUERY)
            },
            {
                test: /\.(png)$/i,
                loader: 'url-loader',
                query: Object.assign({ mimetype: 'image/png' }, ASSETS_BASE_QUERY)
            },
            {
                test: /\.(gif)$/i,
                loader: 'url-loader',
                query: Object.assign({ mimetype: 'image/gif' }, ASSETS_BASE_QUERY)
            },
            {
                test: /\.(svg)$/i,
                loader: 'url-loader',
                query: Object.assign({ mimetype: 'image/svg+xml' }, ASSETS_BASE_QUERY)
            }
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
        })
    ]
};
