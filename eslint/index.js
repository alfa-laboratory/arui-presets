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
        mocha: true
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
        'jsdoc'
    ],
    rules: {
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'prefer-const': 0,
        'comma-dangle': ['error', 'never'],
        'func-names': 0,
        'default-case': 0,
        'prefer-template': 0,
        'no-param-reassign': 0,
        'no-nested-ternary': 0,
        'prefer-rest-params': 0,
        'no-unused-expressions': 0,
        'no-extend-native': 0,
        'jsx-quotes': ['error', 'prefer-single'],
        'no-shadow': 0,
        'max-len': ['error', 120, 4, { 'ignoreComments': true }],
        'prefer-arrow-callback': 0,
        'react/prefer-stateless-function': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-indent-props': [2, 4],
        'react/jsx-boolean-value': ['error', 'always'],
        'valid-jsdoc': ['error', {
            'requireReturn': false,
            'requireReturnDescription': false,
            'preferType': { 'boolean': 'Boolean', 'number': 'Number', 'object': 'Object', 'string': 'String' },
            'matchDescription': '(.+\\.)|^$',
            'prefer': { 'return': 'returns' }
        }],
        'jsdoc/newline-after-description': 'error'
    }
};
