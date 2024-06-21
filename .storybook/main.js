module.exports = {
  stories: ['./index.stories.mdx', '../docs/stories/**/*.stories.@(js|jsx|ts|tsx)'],

  staticDirs: [{ from: './assets', to: '/assets' }],

  addons: [
    '@storybook/addon-backgrounds',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
      },
    },
    '@storybook/addon-mdx-gfm',
  ],

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => !prop.parent || !/node_modules/.test(prop.parent.fileName),
    },
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: true,
  },

  core: {
    disableTelemetry: true,
  },

  babel: async () => ({
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
  }),
};
