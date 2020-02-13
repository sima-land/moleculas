import { createGetCurrencies } from '../currency';
import { getAndPutConfig } from '../config';
import { apiMock } from '../__mocks__/api-mock';

describe('function getCurrencies()', () => {
  it('fetches with correct arguments', () => {
    const getCurrencies = createGetCurrencies(apiMock.ilium);
    expect(getCurrencies()).toEqual(['/currencies/v1/product-page-view',
      {
        ...getAndPutConfig,
      }]);
  });
});
