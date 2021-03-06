require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: require.resolve('@sima-land/linters/eslint'),
  overrides: [
    {
      files: [
        './**/__stories__/**/*',
        './**/__stories__/**/*',
        './**/*.test.*',
        './**/*.test.*',
        '*.ts',
        '*.tsx',
      ],
      rules: {
        'require-jsdoc': 'off',
        'jsdoc/require-jsdoc': 'off',
        'react/prop-types': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
