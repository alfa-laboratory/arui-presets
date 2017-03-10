module.exports = {
    extends: [
        'airbnb',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        mocha: true,
        node: true
    },
    globals: {
        benchmark: true,
        chai: true,
        expect: true,
        geminiReact: true,
        React: true,
        suite: true
    },
    plugins: [
        'chai-friendly',
        'class-methods-use-this-regexp',
        'jsdoc'
    ],
    rules: {
        'class-methods-use-this': 0,
        'class-methods-use-this-regexp/class-methods-use-this': [2, {
            'exceptMethods': [
                'blur',
                'render*',
                'getInitialState',
                'getDefaultProps',
                'componentWillMount',
                'componentDidMount',
                'componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentWillUpdate',
                'componentDidUpdate',
                'componentWillUnmount'
            ]
        }],
        'chai-friendly/no-unused-expressions': 2,
        'comma-dangle': [2, 'never'],
        'default-case': 0,
        'indent': [2, 4, { 'SwitchCase': 1 }],
        'jsdoc/newline-after-description': 2,
        'jsx-quotes': [2, 'prefer-single'],
        'max-len': [2, 120, 4, { 'ignoreComments': true }],
        'no-param-reassign': 0,
        'no-plusplus': [2, { 'allowForLoopAfterthoughts': true }],
        'no-shadow': 0,
        'no-unused-expressions': 0,
        'prefer-arrow-callback': 0,
        'prefer-const': 0,
        'react/jsx-boolean-value': [2, 'always'],
        'react/jsx-curly-spacing': [2, 'always'],
        'react/jsx-filename-extension': [2, { 'extensions': ['.jsx'] }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/prefer-stateless-function': 0,
        'valid-jsdoc': [2, {
            'matchDescription': '(.+\\.)|^$',
            'prefer': { 'return': 'returns' },
            'preferType': { 'boolean': 'Boolean', 'number': 'Number', 'object': 'Object', 'string': 'String' },
            'requireReturn': false,
            'requireReturnDescription': false
        }]
    }
};
