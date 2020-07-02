/**
 * Определяет, что полученный аргумент - не пустой массив.
 * @param {Array} data Данные.
 * @return {boolean} Если массив с данными - true и false если не массив или пустой массив.
 */
export const isNonEmptyArray = data => Array.isArray(data) && data.length > 0;
