module.exports = {
    roots: ['<rootDir>/tests'], // Point to the tests folder in the backend directory
    testEnvironment: 'node',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
  