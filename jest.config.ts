import { Config } from 'jest';

const config: Config = {
  globalSetup: '<rootDir>/.jest/global-setup.js',
  testEnvironment: 'jsdom',
  setupFiles: ['./.jest/setup.js'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest',

    // генерируем css-модули
    '\\.(module|m)\\.(css|scss)$': 'jest-css-modules-transform',

    // все что должно заменяться на строку с url
    '\\.(jpg|jpeg|png|gif|eot|otf|ttf|woff|woff2)$': '<rootDir>/.jest/transforms/media.js',
  },
  moduleNameMapper: {
    // обычные стили делаем просто пустыми модулями
    '(?<!(.+\\.(module|m)))(\\.css|\\.scss)$': '<rootDir>/.jest/mocks/style.js',
  },
  transformIgnorePatterns: [
    // из некоторых пакетов мы берем стили так что игнорируем только скрипты
    '/node_modules/.+js$',
  ],
  testPathIgnorePatterns: ['<rootDir>/.yarn-cache/', '<rootDir>/node_modules/'],
  modulePathIgnorePatterns: ['<rootDir>/.yarn-cache/', '<rootDir>/build/'],
  coveragePathIgnorePatterns: ['\\.css$', '\\.scss$', '/\\.jest/', '__test__'],
  clearMocks: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

export default config;
