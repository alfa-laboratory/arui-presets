module.exports = {
    extends: 'tslint-config-airbnb',
    rules: {
        'ter-indent': [
            true,
            4,
            { SwitchCase: 1 }
        ],
        'trailing-comma': true,
        'no-increment-decrement': false,
        'max-line-length': [true, 120],
        'prefer-const': false,
        'variable-name': [true, 'allow-pascal-case'],
        align: [true, 'parameters', 'statements']
    }
};
