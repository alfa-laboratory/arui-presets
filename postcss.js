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
            require('postcss-import')(
                // Используем Object.assign чтобы не создавать ключ если resolve нет во входящих аргументах.
                // NB: Object spread здесь не доступен пока есть поддержка Node < 8.3.0.
                Object.assign({
                    path,
                    plugins: [
                        require('postcss-discard-comments')()
                    ]
                }, resolve && { resolve })
            ),
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
            require('autoprefixer')(),
            require('postcss-inherit')
        ]
    };
}

module.exports = getConfig;
