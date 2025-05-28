module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  // This tells ts-jest to transform both .ts and .js files.
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  }
};