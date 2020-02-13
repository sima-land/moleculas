import { createGetCurrencies } from '../currency'

describe('function getCurrencies()', () => {
    it('fetches with correct arguments', () => {
        const getCurrencies = createGetCurrencies(apiMock.ilium);
        expect(getCurrencies()).toEqual(['/currencies/v1/product-page-view',
            {
                ...getAndPutConfig,
            }]);
    });
});
