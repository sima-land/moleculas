module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --ext .js,.jsx,.ts,.tsx',
  ],
  '*.{css,scss}': [
    'stylelint',
  ],
};
