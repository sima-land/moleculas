module.exports = {
  globalSetup: './jest/global-setup.js',
  setupFiles: [
    './jest/setup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(@SL/|middleware-axios))/',
    '/node_modules/@dev-dep/ui-nucleons/.+\\.(?!(svg))([^.]+$)/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.yarn-cache/', '<rootDir>/node_modules/',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/.yarn-cache/', '<rootDir>/build/',
  ],
  transform: {
    '\\.jsx?$': 'babel-jest',
    '\\.svg$': '<rootDir>/jest/transforms/svg.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|ttf|woff|woff2)$': '<rootDir>/jest/transforms/media.js',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: [
    '\\.svg$',
    'jest/',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
