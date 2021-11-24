const uiPreset = require('@shuoink/ui-styles/tailwind-preset');

module.exports = {
  presets: [
    uiPreset({
      // eslint-disable-next-line node/no-path-concat -- this is a glob, not a path
      content: [`${__dirname}/pages/**/*.{js,jsx,ts,tsx}`],
    }),
  ],
};
