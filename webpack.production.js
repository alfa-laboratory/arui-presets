const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!postcss-loader'
                }),
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.userRequest
                    && (module.userRequest.indexOf('arui') === -1 || module.userRequest.indexOf('polyfills') !== -1)
                    && module.userRequest.indexOf('node_modules') !== -1;
            },
        }),
        new ManifestPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            sourceMap: false,
            warnings: false
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new CompressionPlugin({
            asset: '[file].gz',
            algorithm: 'gzip',
            regExp: /\.js$|\.css$|\.ttf$|\.svg$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
};
