module.exports = {
    extends: [
        'airbnb'
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
        'jsdoc',
        'sort-class-members'
    ],
    rules: {
        'class-methods-use-this': 0,
        'class-methods-use-this-regexp/class-methods-use-this': [2, {
            exceptMethods: [
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
        'func-names': 0,
        'function-paren-newline': 0,
        indent: [2, 4, { SwitchCase: 1 }],
        'jsdoc/newline-after-description': 2,
        'jsx-quotes': [2, 'prefer-single'],
        'max-len': [2, 120, 4, { ignoreComments: true }],
        'no-param-reassign': 0,
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
        'no-shadow': 0,
        'no-unused-expressions': 0,
        'prefer-arrow-callback': 0,
        'prefer-const': 0,
        'react/jsx-boolean-value': [2, 'always'],
        'react/jsx-curly-spacing': [2, { when: 'always', children: true }],
        'react/jsx-filename-extension': [2, { extensions: ['.jsx'] }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-no-target-blank': 2,
        'react/no-unused-prop-types': 0,
        'react/prefer-stateless-function': 0,
        'react/require-default-props': 0,
        'react/sort-comp': 0,
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
        'jsx-a11y/label-has-for': ['error', { components: ['label'], allowChildren: true }],
        'sort-class-members/sort-class-members': [2, {
            order: [
                '[static-properties]',
                '[static-methods]',
                '[static-stuff]',
                '[properties]',
                '[lifecycle]',
                '[rendering]',
                '[handling]',
                '[everything-else]'
            ],
            groups: {
                'static-stuff': [
                    { type: 'property', static: true, name: 'propTypes' },
                    { type: 'property', static: true, name: 'defaultProps' },
                    { type: 'property', static: true, name: 'contextTypes' },
                    { type: 'property', static: true, name: 'childContextTypes' },
                    { type: 'property', static: false, name: 'state' }
                ],
                lifecycle: [
                    { type: 'method', static: false, name: 'constructor' },
                    { type: 'method', static: false, name: 'getChildContext' },
                    { type: 'method', static: false, name: 'componentWillMount' },
                    { type: 'method', static: false, name: 'componentDidMount' },
                    { type: 'method', static: false, name: 'componentWillReceiveProps' },
                    { type: 'method', static: false, name: 'shouldComponentUpdate' },
                    { type: 'method', static: false, name: 'componentWillUpdate' },
                    { type: 'method', static: false, name: 'componentDidUpdate' },
                    { type: 'method', static: false, name: 'componentWillUnmount' }
                ],
                rendering: [
                    { type: 'method', static: false, name: 'render' },
                    { type: 'method', static: false, name: '/^render.+$/' }
                ],
                handling: [
                    { type: 'method', static: false, name: '/^handle.+$/' }
                ]
            },
            accessorPairPositioning: 'getThenSet'
        }],
        'valid-jsdoc': [2, {
            matchDescription: '(.+\\.)|^$',
            prefer: { return: 'returns' },
            preferType: {
                boolean: 'Boolean', number: 'Number', object: 'Object', string: 'String'
            },
            requireReturn: false,
            requireReturnDescription: false
        }],
        'no-use-before-define': ['error', { functions: false }]
    }
};
