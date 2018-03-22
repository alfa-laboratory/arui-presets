const webpack = require('webpack');
const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');


module.exports = {
    devtool: 'inline-eval-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('postcss-loader')
                ]
            }
        ]
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new WatchMissingNodeModulesPlugin(path.join(process.cwd(), 'node_modules')),
        new webpack.NamedModulesPlugin()
    ]
};
