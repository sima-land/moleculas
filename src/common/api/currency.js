import { getAndPutConfig } from "./config";

/**
 * Получение валют.
 * @param {Object} ilium API ilium.
 * @return {Promise} Будет выполнен, при ответе.
 */
export const createGetCurrencies = (ilium) => ilium.get(
    '/currencies/v1/product-page-view',
    getAndPutConfig
);
