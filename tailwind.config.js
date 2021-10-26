/* eslint-disable unicorn/prefer-module */
module.exports = {
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
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
