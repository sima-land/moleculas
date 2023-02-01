module.exports = {
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  ref: true,
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
            cleanupIDs: false,
            collapseGroups: false,
          },
        },
      },
    ],
  },
};
