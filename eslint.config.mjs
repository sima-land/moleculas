import simaland from '@sima-land/linters/eslint';

export default [
  ...simaland,

  {
    files: ['docs/**/*.{ts,tsx}'],
    rules: {
      'jsdoc/require-jsdoc': 'off',
      'no-alert': 'off',
    },
  },
];
