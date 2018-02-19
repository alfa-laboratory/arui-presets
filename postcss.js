/* eslint global-require: 0 */
function getConfig(mq, path = []) {
    return {
        plugins: [
            require('postcss-omit-import-tilde')(),
            require('postcss-import')({
                path,
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
            require('postcss-custom-properties')({
                preserve: false
            }),
            require('postcss-strip-units')(),
            require('postcss-calc')(),
            require('postcss-color-function')(),
            require('postcss-nested')(),
            require('autoprefixer')({
                browsers: require('./supporting-browsers')
            }),
            require('postcss-inherit')
        ]
    };
}

module.exports = getConfig;
