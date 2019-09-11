/* eslint global-require: 0 */

const defaultTargetOptions = {};
if (process.env.BABEL_TARGET === 'node') {
    defaultTargetOptions.node = 'current';
} else {
    defaultTargetOptions.browsers = require('./supporting-browsers');
}

const defaultOptions = {
    targets: defaultTargetOptions,
    loose: true
};

function buildPresets(context, options) {
    return {
        presets: [
            [
                '@babel/preset-env',
                Object.assign({}, defaultOptions, options)
            ],
            '@babel/preset-react'],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-proto-to-assign',
            [
                '@babel/plugin-proposal-decorators',
                {
                    legacy: true
                }
            ],
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-export-namespace-from',
            [
                '@babel/plugin-proposal-object-rest-spread',
                {
                    useBuiltIns: true
                }
            ],
            [
                '@babel/plugin-transform-runtime',
                {
                    corejs: 2,
                    helpers: false
                }
            ]
        ],
        env: {
            production: {
                plugins: [
                    'transform-react-remove-prop-types',
                    '@babel/plugin-transform-react-constant-elements',
                    '@babel/plugin-transform-react-inline-elements'
                ]
            }
        }
    };
}

module.exports = buildPresets;
