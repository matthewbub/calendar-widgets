module.exports = {
  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFilesAfterEnv: ['./setupTests.js'],

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: ['jest-serializer-html'],

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/tests/'],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/tests/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/coverage/',

  // The test environment configuration that will be passed to the testEnvironment
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },

  // Collect coverage information only for specified files
  collectCoverageFrom: ['tests/**/*.test.js'],

  // The threshold values for coverage results which Jest should enforce
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },

  // tells Jest to use babel-jest as the transformer for files with .js and .jsx extensions. 
  // When Jest runs the tests, it processes each file that matches the specified pattern and transpiles them using Babel.
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  }
};
