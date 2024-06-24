require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: require.resolve('@sima-land/linters/eslint'),
  overrides: [
    {
      files: ['./**/*.{jsx,tsx}'],
      rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },

    // stories
    {
      files: ['./docs/stories/**/*'],
      rules: {
        'no-alert': 'off',
        'no-console': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },

    // тесты и stories
    {
      files: ['./docs/stories/**/*', './**/*.test.*', './**/*.spec.*'],
      rules: {
        'require-jsdoc': 'off',
        'jsdoc/require-jsdoc': 'off',
      },
    },
  ],
};
