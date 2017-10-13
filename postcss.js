/* eslint global-require: 0 */

const argbColors = require('alfa-ui-primitives/colors');
const hexToRgba = require('hex-to-rgba');

// Prepare colors for variables
const colors = Object.entries(argbColors).reduce((result, item) => {
    const value = item[1].split('');

    // Colors from primitives comes in HEX/ARGB format, so we need to turn it into RGBA for web
    if (value.length === 9) {
        [value[1], value[2], value[7], value[8]] = [value[7], value[8], value[1], value[2]];
    }

    result[item[0]] = hexToRgba(value.join(''));

    return result;
}, {});

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
            require('postcss-custom-properties')({
                variables: colors
            }),
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
