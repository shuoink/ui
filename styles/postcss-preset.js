const postcssImport = require('postcss-import');
const nesting = require('tailwindcss/nesting');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const plugin = () => ({
  postcssPlugin: '@shuoink/ui-styles/postcss-preset',
  plugins: [
    postcssImport,
    nesting,
    // apparently the postcss normalizer doesn't recursively search for the plugins property, so we have to manually spread them here :(
    // @ts-expect-error -- wants an arg, but the art is actually optional
    ...tailwindcss().plugins,
    autoprefixer,
  ],
});

plugin.postcss = true;

module.exports = plugin;
