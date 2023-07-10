require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: require.resolve('@sima-land/linters/eslint'),
  overrides: [
    {
      files: ['./**/*.{jsx,tsx}'],
      rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      files: ['./**/__stories__/**/*', './**/__stories__/**/*'],
      rules: {
        'no-alert': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      files: ['./**/__stories__/**/*', './**/__stories__/**/*', './**/*.test.*', './**/*.test.*'],
      rules: {
        'require-jsdoc': 'off',
        'jsdoc/require-jsdoc': 'off',
        'react/prop-types': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
