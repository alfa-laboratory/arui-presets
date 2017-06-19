const config = {
    presets: [
        require('babel-preset-react'),
        require('babel-preset-es2015'),
        require('babel-preset-stage-0')
    ],
    plugins: [
        require('babel-plugin-transform-decorators-legacy').default,
        [require('babel-plugin-transform-runtime'), { polyfill: false, helpers: false }]
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        require('babel-plugin-transform-react-remove-prop-types').default,
        require('babel-plugin-transform-react-constant-elements'),
        require('babel-plugin-transform-react-inline-elements')
    );
}

module.exports = config;
