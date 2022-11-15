module.exports = {
    settings: {
        'import/resolver': {
            alias: {
                map: [['src', './src']],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            },
        },
    },
    extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
    plugins: ['prettier', 'simple-import-sort'],
    rules: {
        'no-unused-vars': ['warn', { ignoreRestSiblings: true, argsIgnorePattern: '^_.*$' }],
        'simple-import-sort/imports': 'error',
    },
};
