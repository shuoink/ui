const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx}'],
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
