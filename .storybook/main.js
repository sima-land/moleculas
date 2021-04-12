const path = require('path');
const svgrOptions = require('../svgr.config');

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
    const baseRules = config.module.rules.map(
      rule => (Array.isArray(rule.test) ? rule.test.some(item => item.test('.svg')) : rule.test.test('.svg'))
        ? {
          ...rule,

          // исключаем svg так как он будет обрабатываться другим загрузчиком (ниже)
          exclude: /\.svg$/
        }
        : rule
    );

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...baseRules,
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
          {
            test: /\.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: svgrOptions,
              },
            ],
            include: path.resolve(__dirname, '../'),
            exclude: /node_modules\/(?!(@dev-dep)).*/,
          },
        ],
      },
    };
  },
};
