import pipe from 'lodash/fp/pipe';
import toString from 'lodash/toString';

/**
 * Очищает строку от любых символов, кроме цифр и удаляет лишние нули вначале.
 * @param {string} str Строка.
 * @return {string} Возвращает очищенную строку.
 */
export const cleanNumString = pipe(
  str => toString(str) && str.replace(/[^0-9]/g, ''),
  str => str === '' ? '' : Number(str).toString()
);
