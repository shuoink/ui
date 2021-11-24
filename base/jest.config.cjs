// @ts-expect-error -- not typed
const baseConfig = require('../jest.config.base.cjs');

module.exports = {
  ...baseConfig,
  displayName: '@shuoink/ui-base',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
};
