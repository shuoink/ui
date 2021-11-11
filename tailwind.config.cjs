const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx}'],
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
};
