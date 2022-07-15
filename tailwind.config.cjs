const uiPreset = require('./tailwind-preset.cjs');

module.exports = {
  presets: [
    uiPreset({
      content: [
        './src/**/*.{js,cjs,mjs,jsx,ts,tsx,mts,cts}',
        './.ladle/**/*.{js,cjs,mjs,jsx,ts,tsx,mts,cts}',
      ],
    }),
  ],
};
