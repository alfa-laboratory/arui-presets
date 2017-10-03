const path = require('path');
const webpack = require('webpack');

const FILE_LOADER_QUERY = {
    name: '[name].[hash].[ext]'
};

const URL_LOADER_QUERY = {
    name: '[name].[hash].[ext]',
    limit: 10000
};

module.exports = {
    resolve: {
        modules: [
            path.join(process.cwd(), 'node_modules')
        ],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: Object.assign({ mimetype: 'application/font-woff' }, URL_LOADER_QUERY)
            },
            {
                test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: Object.assign({ mimetype: 'application/octet-stream' }, URL_LOADER_QUERY)
            },
            {
                test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(jpe?g)$/i,
                loader: 'url-loader',
                options: Object.assign({ mimetype: 'image/jpeg' }, URL_LOADER_QUERY)
            },
            {
                test: /\.(gif)$/i,
                loader: 'url-loader',
                options: Object.assign({ mimetype: 'image/gif' }, URL_LOADER_QUERY)
            },
            {
                test: /\.(png)$/i,
                loader: 'file-loader',
                options: Object.assign({ mimetype: 'image/png' }, FILE_LOADER_QUERY)
            },
            {
                test: /\.(svg)$/i,
                loader: 'file-loader',
                options: Object.assign({ mimetype: 'image/svg+xml' }, FILE_LOADER_QUERY)
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.HOT_LOADER': process.env.HOT_LOADER
        })
    ]
};
