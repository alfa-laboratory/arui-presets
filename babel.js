/* eslint global-require: 0 */
const defaultOptions = {
    targets: {
        browsers: require('./supporting-browsers'),
        node: 'current'
    },
    loose: true
};

function buildPresets(context, options) {
    return {
        presets: [
            [
                'env',
                Object.assign({}, defaultOptions, options)
            ],
            'react'
        ],
        plugins: [
            'syntax-dynamic-import',
            'transform-proto-to-assign',
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-export-extensions',
            ['transform-object-rest-spread', { useBuiltIns: true }],
            ['transform-runtime', { polyfill: false, helpers: false }]
        ],
        env: {
            production: {
                plugins: [
                    'transform-react-remove-prop-types',
                    'transform-react-constant-elements',
                    'transform-react-inline-elements'
                ]
            }
        }
    };
}


module.exports = buildPresets;
