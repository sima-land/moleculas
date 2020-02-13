import { isOkStatus, validateDeleteStatus } from '@dev-dep/isomorph/helpers/http';

/**
 * Валидация http статуса ответа на POST запрос.
 *
 * Аналогичная функция есть в @dev-dep/isomorph/helpers/http но она проверяет только 201 отклик.
 * @param {number} status Статус http ответа.
 * @return {boolean} Валидность.
 */
export const validatePostStatus = status => status >= 200 && status < 300;

/**
 * Конфиг для GET и PUT запросов.
 */
export const getAndPutConfig = {
  validateStatus: isOkStatus,
};

/**
 * Конфиг для POST запроса.
 */
export const postConfig = {
  validateStatus: validatePostStatus,
};

/**
 * Конфиг для DELETE запроса.
 */
export const deleteConfig = {
  validateStatus: validateDeleteStatus,
};
