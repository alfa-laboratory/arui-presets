const webpack = require('webpack');

module.exports = {
    devtool: 'inline-eval-source-map',
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
};
