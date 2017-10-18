/* eslint global-require: 0 */
function getConfig(mq) {
    return {
        plugins: [
            require('postcss-omit-import-tilde')(),
            require('postcss-import')({
                plugins: [
                    require('postcss-discard-comments')()
                ]
            }),
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
            require('postcss-strip-units')(),
            require('postcss-calc')(),
            require('postcss-color-function')(),
            require('postcss-nested')(),
            require('autoprefixer')({
                browsers: require('./supporting-browsers')
            })
        ]
    };
}

module.exports = getConfig;
