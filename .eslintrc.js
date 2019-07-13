module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser':'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType':'script'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'warn',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
