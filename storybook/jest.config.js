// @ts-expect-error -- not typed
const baseConfig = require('../jest.config.base.cjs');

module.exports = {
  ...baseConfig,
  displayName: '@shuoink/ui-storybook',
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
  coveragePathIgnorePatterns: [
    '[.]test[.]',
    '[.]stories[.]',
    '[.]d[.]ts$',
    '__test__',
    '__snapshots__',
    '__mocks__',
  ],
};
