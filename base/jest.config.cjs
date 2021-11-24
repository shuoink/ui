// @ts-expect-error -- not typed
const baseConfig = require('../jest.config.base.cjs');

module.exports = {
  ...baseConfig,
  displayName: '@shuoink/ui-base',
};
