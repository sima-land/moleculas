const { src, dest, series } = require('gulp');
const del = require('del');

/**
 * Очищает 'build'
 * @return {*} test
 */
const clean = () => del(['build']);

/**
 * Перемещает необходимые файлы в 'build'
 * @return {*} test
 */
const move = () => src([
    'package.json',
    'README.md',
    './src/**/*',
    '!./src/**/*.md',
    '!./src/**/__test__/**',
    '!./src/**/__mocks__/**',
    '!./src/**/__stories__/**',
]).pipe(dest('build'));

const build = series(clean, move);

exports.build = build;
exports.default = build;
