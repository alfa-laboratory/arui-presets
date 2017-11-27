const path = require('path');
const webpack = require('webpack');

const QUERY = {
    name: '[name].[hash].[ext]'
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
                loader: 'file-loader',
                options: Object.assign({ mimetype: 'application/font-woff' }, QUERY)
            },
            {
                test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: Object.assign({ mimetype: 'application/octet-stream' }, QUERY)
            },
            {
                test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(jpe?g)$/i,
                loader: 'file-loader',
                options: Object.assign({ mimetype: 'image/jpeg' }, QUERY)
            },
            {
                test: /\.(gif)$/i,
                loader: 'file-loader',
                options: Object.assign({ mimetype: 'image/gif' }, QUERY)
            },
            {
                test: /\.(png)$/i,
                loader: 'file-loader',
                options: Object.assign({ mimetype: 'image/png' }, QUERY)
            },
            {
                test: /\.(svg)$/i,
                loader: 'file-loader',
                options: Object.assign({ mimetype: 'image/svg+xml' }, QUERY)
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new webpack.DefinePlugin({
            'process.HOT_LOADER': process.env.HOT_LOADER
        })
    ]
};
