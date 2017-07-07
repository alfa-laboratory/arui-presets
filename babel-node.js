function buildPresets(context, options) {
    let modules = 'commonjs';
    if (options && typeof options.modules !== 'undefined') {
        modules = options.modules;
    }

    const config = {
        presets: [
            require.resolve('babel-preset-stage-0')
        ],
        plugins: [
            require.resolve('babel-plugin-transform-react-jsx'),
            require.resolve('babel-plugin-transform-react-display-name'),
            require.resolve('babel-plugin-transform-decorators-legacy'),
            [require.resolve('babel-plugin-transform-runtime'), { polyfill: false, helpers: false }],

            require.resolve('babel-plugin-transform-es2015-literals'),
            require.resolve('babel-plugin-transform-es2015-duplicate-keys')
        ]
    };

    if (modules === 'commonjs') {
        config.plugins.push(require.resolve('babel-plugin-transform-es2015-modules-commonjs'));
    }

    if (process.env.NODE_ENV === 'production') {
        config.plugins.push(
            require.resolve('babel-plugin-transform-react-remove-prop-types'),
            require.resolve('babel-plugin-transform-react-constant-elements'),
            require.resolve('babel-plugin-transform-react-inline-elements')
        );
    }

    return config;
}


module.exports = buildPresets;
