module.exports = {
  globalSetup: './.jest/global-setup.js',
  testEnvironment: 'jsdom',
  setupFiles: ['./.jest/setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.yarn-cache/', '<rootDir>/node_modules/'],
  modulePathIgnorePatterns: ['<rootDir>/.yarn-cache/', '<rootDir>/build/'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',

    // все что должно заменяться на строку с url
    '\\.(apng|avif|gif|jpg|jpeg|png|webp)$': '<rootDir>/.jest/transforms/media.js',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: ['.jest/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
