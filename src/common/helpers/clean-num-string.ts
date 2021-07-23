/**
 * Очищает строку от любых символов, кроме цифр и удаляет лишние нули вначале.
 * @param value Строка.
 * @return Возвращает очищенную строку.
 */
export const cleanNumString = (value: unknown): string => {
  const string = String(value).replace(/\D/g, '');
  return string.length > 0 ? Number(string).toString() : '';
};
