module.exports = {
  roots: ['<rootDir>/src'],

  preset: 'ts-jest',

  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },

  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
