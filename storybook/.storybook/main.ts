module.exports = {
  stories: ['../..'],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: require('../postcss.config.js'),
        },
      },
    },
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
};
