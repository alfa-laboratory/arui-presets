const config = {
    plugins: [
        require.resolve('babel-plugin-transform-react-jsx'),
        require.resolve('babel-plugin-syntax-jsx'),
        require.resolve('babel-plugin-transform-react-display-name'),
        require.resolve('babel-plugin-transform-decorators-legacy'),

        require.resolve('babel-plugin-transform-es2015-literals'),
        require.resolve('babel-plugin-transform-es2015-duplicate-keys')
    ],
    presets: [
        require.resolve('babel-preset-stage-0')
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        require.resolve('babel-plugin-transform-react-remove-prop-types'),
        require.resolve('babel-plugin-transform-react-constant-elements'),
        require.resolve('babel-plugin-transform-react-inline-elements')
    );
}

