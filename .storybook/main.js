const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
  ],
  webpackFinal: async config => {
    const { rules } = config.module;
    const babelRuleIndex = rules.findIndex(rule => {
      const loader = Array.isArray(rule.use) ? rule.use[0].loader : rule.use;
      return loader === 'babel-loader';
    });
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules.slice(0, babelRuleIndex),
          {
            ...config.module.rules[babelRuleIndex],
            exclude: /node_modules\/(?!(@dev-dep)).*/,
          },
          ...config.module.rules.slice(babelRuleIndex + 1),
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[name]__[local]__[hash:hex:3]',
                  },
                },
              },
              'sass-loader',
            ],
            include: path.resolve(__dirname, '../'),
          },
          {
            test: /\.(woff|woff2|eot|ttf)$/,
            use: [
              {
                loader: 'file-loader',
                query: {
                  name: '[name].[ext]'
                }
              }
            ],
            include: path.resolve(__dirname, '../'),
          },
        ],
      },
    };
  },
};
