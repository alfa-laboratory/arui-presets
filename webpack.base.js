const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const ASSETS_BASE_QUERY = {
    name: '[name].[hash].[ext]',
    limit: 10000
};

module.exports = {
    resolve: {
        modules: [
            path.join(process.cwd(), 'node_modules'),
        ],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: Object.assign({ mimetype: 'application/font-woff' }, ASSETS_BASE_QUERY)
            },
            {
                test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: Object.assign({ mimetype: 'application/octet-stream' }, ASSETS_BASE_QUERY)
            },
            {
                test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
            {
                test: /\.(jpe?g)$/i,
                loader: 'url-loader',
                options: Object.assign({ mimetype: 'image/jpeg' }, ASSETS_BASE_QUERY)
            },
            {
                test: /\.(png)$/i,
                loader: 'url-loader',
                options: Object.assign({ mimetype: 'image/png' }, ASSETS_BASE_QUERY)
            },
            {
                test: /\.(gif)$/i,
                loader: 'url-loader',
                options: Object.assign({ mimetype: 'image/gif' }, ASSETS_BASE_QUERY)
            },
            {
                test: /\.(svg)$/i,
                loader: 'url-loader',
                options: Object.assign({ mimetype: 'image/svg+xml' }, ASSETS_BASE_QUERY)
            }
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.HOT_LOADER': process.env.HOT_LOADER
        })
    ]
};
