module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  globalSetup: './.jest/global-setup.js',
  setupFiles: [
    './.jest/setup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  transformIgnorePatterns: [
    '/node_modules/@sima-land/ui-nucleons/.+\\.(?!(svg))([^.]+$)/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.yarn-cache/', '<rootDir>/node_modules/',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/.yarn-cache/', '<rootDir>/build/',
  ],
  transform: {
    // svg заменяем на React-компоненты
    '\\.svg$': '<rootDir>/.jest/transforms/svg.js',

    // все что должно заменяться на строку с url
    '\\.(jpg|jpeg|png|gif|eot|otf|ttf|woff|woff2)$': '<rootDir>/.jest/transforms/media.js',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: [
    '\\.svg$',
    '.jest/',
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
