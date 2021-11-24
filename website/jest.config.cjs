// @ts-expect-error -- not typed
const baseConfig = require('../jest.config.base.cjs');

module.exports = {
  ...baseConfig,
  collectCoverageFrom: ['pages/**/*.{js,jsx,ts,tsx}'],
};
