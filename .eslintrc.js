module.exports = {
    extends: require.resolve('@dev-dep/linters/eslint'),
    overrides: [
        {
            files: '**/*.stories.*',
            rules: {
                'import/no-anonymous-default-export': ["error", {
                    allowObject: true,
                }],
            }
        },
    ],
};


