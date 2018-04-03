/* eslint global-require: 0 */

/**
 * Формирует конфиг для PostCSS.
 *
 * @param {Object} mq https://github.com/postcss/postcss-custom-media#extensions
 * @param {String|Array} path https://github.com/postcss/postcss-import#path
 * @param {Function} resolve https://github.com/postcss/postcss-import#resolve
 * @returns {Object} PostCSS конфиг.
 */
function getConfig(mq, path = [], resolve) {
    return {
        plugins: [
            require('postcss-omit-import-tilde')(),
            require('postcss-import')({
                path,
                resolve,
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
