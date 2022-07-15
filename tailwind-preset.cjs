const colors = require('tailwindcss/colors.js');

/**
 * @param {Object} [options] - Options for the preset
 * @param {Array<string>} [options.content] - Glob pattern matching files where tailwindcss classes are used
 * @returns {import('tailwindcss').Config} Tailwind Config
 */
module.exports = ({content = []} = {}) => ({
  mode: 'jit',
  content: [
    // eslint-disable-next-line unicorn/prefer-string-replace-all -- too new
    `${__dirname
      .replace(/^.*[/\\]node_modules[/\\]/u, './node_modules/')
      .replace(/\\/gu, '/')}/dist/**/*.{js,cjs,mjs,jsx,ts,tsx,mts,cts}`,
    ...content,
  ],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {
        9: '2.25rem',
      },
      colors: {
        primary: colors.orange,
        links: {
          DEFAULT: 'blue',
          dark: 'green',
        },
        headings: {
          DEFAULT: 'purple',
          dark: 'teal',
        },
        good: colors.green,
        bad: colors.red,
        caution: colors.yellow,
        neutral: colors.blue,
      },
    },
  },
  variants: {
    extend: {
      invert: ['dark'],
    },
  },
  plugins: [],
});
