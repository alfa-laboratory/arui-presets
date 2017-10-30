/* eslint global-require: 0 */
module.exports = {
    presets: [
        [
            'env',
            {
                targets: {
                    browsers: require('./supporting-browsers'),
                    node: 'current'
                },
                loose: true
            }
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
