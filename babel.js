module.exports = {
    presets: [
        require('babel-preset-react'),
        require('babel-preset-es2015'),
        require('babel-preset-stage-0')
    ],
    plugins: [
        require('babel-plugin-transform-decorators-legacy').default,
        require('babel-plugin-transform-runtime')
    ],
    env: {
        production: {
            plugins: [
                require('babel-plugin-transform-react-remove-prop-types'),
                require('babel-plugin-transform-react-constant-elements'),
                require('babel-plugin-transform-react-inline-elements')
            ]
        }
    }
};
