function getConfig(mq) {
    return {
        plugins: [
            require('postcss-import')(),
            require('postcss-url')({
                url: 'rebase'
            }),
            require('postcss-mixins')(),
            require('postcss-for')(),
            require('postcss-each')(),
            require('postcss-custom-media')({
                extensions: mq
            }),
            require('postcss-custom-properties')(),
            require('postcss-calc')(),
            require('postcss-nested')(),
            require('autoprefixer')({
                browsers: [
                    'last 2 versions',
                    'ie >= 10',
                    'android >= 4',
                    'ios >= 8'
                ]
            })
        ]
    };
}

module.exports = getConfig;
