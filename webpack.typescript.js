module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    require.resolve('babel-loader'),
                    require.resolve('ts-loader')
                ]
            }
        ]
    }
};
