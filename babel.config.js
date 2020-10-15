module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    ['inline-react-svg', {
      svgo: {
        plugins: [
          {
            collapseGroups: false,
          },
        ],
      },
    }],
  ],
};
