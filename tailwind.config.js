/* eslint-disable unicorn/prefer-module */
module.exports = {
  purge: ['src/**.*.ts'],
  mode: 'JIT',
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        links: 'blue',
        headings: 'purple',
      },
    },
  },
  variants: {
    extend: {
      invert: ['dark'],
    },
  },
  plugins: [],
};
