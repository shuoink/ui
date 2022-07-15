const uiPreset = require('./tailwind-preset.cjs');

module.exports = {
  presets: [
    uiPreset({
      content: ['./.ladle/**/*.{js,cjs,mjs,jsx,ts,tsx,mts,cts}'],
    }),
  ],
};
