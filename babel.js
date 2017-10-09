module.exports = {
    presets: [
        [
            'env',
            {
                targets: {
                    browsers: require('./supporting-browsers'),
                    node: 'current'
                }
            }
        ],
        'react'
    ],
    plugins: [
        'babel-plugin-transform-decorators-legacy',
        'babel-plugin-transform-class-properties',
        ['babel-plugin-transform-object-rest-spread', { useBuiltIns: true }],
        ['babel-plugin-transform-runtime', { polyfill: false, helpers: false }]
    ],
    env: {
        production: {
            plugins: [
                'babel-plugin-transform-react-remove-prop-types',
                'babel-plugin-transform-react-constant-elements',
                'babel-plugin-transform-react-inline-elements'
            ]
        }
    }
};
