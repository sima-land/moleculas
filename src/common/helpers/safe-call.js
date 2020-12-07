import isFunction from 'lodash/isFunction';

/**
 * Возвращает обертку для безопасного вызова переданного аргумента.
 * @param {Function} func Функция для выполнения.
 * @return {Function} Декорированная функция.
 */
const safeCall = func => (...args) => isFunction(func) ? func(...args) : undefined;

export default safeCall;
