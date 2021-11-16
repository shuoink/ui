module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
  coveragePathIgnorePatterns: [
    '[.]test[.]',
    '[.]stories[.]',
    '[.]d[.]ts$',
    '__test__',
    '__snapshots__',
    '__mocks__',
  ],
};