const postcssImport = require('postcss-import');
const nesting = require('tailwindcss/nesting/index.js');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [postcssImport, nesting, tailwindcss, autoprefixer],
};
