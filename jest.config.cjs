// @ts-expect-error: not typed
const baseConfig = require('./jest.config.base.cjs');

module.exports = {
  ...baseConfig,
  projects: ['base', 'website', 'storybook', 'styles'],
};
