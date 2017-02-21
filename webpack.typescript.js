module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader!ts-loader',
            }
        ]
    }
};
