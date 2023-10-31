module.exports = {
  bail: true, // Stop running tests after `n` failures
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   '**/*.js',
  //   '!**/*.test.js'
  // ],
  // coverageDirectory: 'test-output',
  // coverageReporters: [
  //   'text-summary',
  //   'lcov'
  // ],
  // coveragePathIgnorePatterns: [
  //   '<rootDir>/app/build/',
  //   '<rootDir>/node_modules/',
  //   '<rootDir>/test-output/',
  //   '<rootDir>/test/',
  //   '<rootDir>/jest.config.js'
  // ],
  modulePathIgnorePatterns: [
    'node_modules'
  ],
  reporters: [
    'default'
    // [
    //   'jest-junit',
    //   {
    //     suiteName: 'jest tests',
    //     outputDirectory: '/',
    //     outputName: 'junit.xml'
    //   }
    // ]
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [],
  verbose: true
  // setupFilesAfterEnv: [
  //   '<rootDir>/test/setup.js',
  //   '<rootDir>/test/teardown.js'
  // ]
}
