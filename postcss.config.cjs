/* eslint-disable node/global-require -- easier this way */
module.exports = {
  plugins: [
    require('postcss-import'),
    // @ts-expect-error: no type defs available
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
/* eslint-enable node/global-require -- enable */
