module.exports = {
  ref: true,
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupIds: false,
            collapseGroups: false,
            removeViewBox: false,
          },
        },
      },

      // @todo временно не включаем чтобы не обновлять снепшоты
      // 'prefixIds',
      // 'removeXMLNS',
    ],
  },
};
