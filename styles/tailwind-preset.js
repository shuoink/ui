const colors = require('tailwindcss/colors');

const uiContent = ['@shuoink/ui-base'].flatMap(pkgId => {
  try {
    const subPath = '/package.json';
    const requirePath = require.resolve(`${pkgId}${subPath}`);
    const pkgRoot = requirePath.slice(0, -subPath.length);
    return [
      `${pkgRoot}/src/**/*.{js,jsx,ts,tsx}`,
      `${pkgRoot}/dist/**/*.{js,jsx,ts,tsx}`,
    ];
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      return [];
    }
    throw error;
  }
});

/**
 * @param {Object} [options] - Options for the preset
 * @param {Array<string>} [options.content] - Glob pattern matching files where tailwindcss classes are used
 * @returns {import('tailwindcss/tailwind-config').TailwindConfig} Tailwind Config
 */
module.exports = ({content = []} = {}) => ({
  mode: 'jit',
  content: [...uiContent, ...content],
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
      // @ts-expect-error: ??
      invert: ['dark'],
    },
  },
  plugins: [],
});
