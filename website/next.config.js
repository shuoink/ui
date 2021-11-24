const tm = require('next-transpile-modules');

const withTM = tm(['@shuoink/ui-base']);

module.exports = withTM({
  reactStrictMode: true,
  webpack: config => {
    if (config.mode === 'development') {
      config.resolve.alias['@shuoink/ui-base'] = require.resolve(
        '@shuoink/ui-base/src',
      );
    }
    return config;
  },
});
