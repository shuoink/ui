module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: [
    '[.]test[.]',
    '[.]stories[.]',
    '[.]d[.]ts$',
    '__test__',
    '__snapshots__',
    '__mocks__',
    '/node_modules/',
    '/dist/',
  ],
  moduleNameMapper: {
    '^(.*)\\.js$': '$1',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.mts'],
};
