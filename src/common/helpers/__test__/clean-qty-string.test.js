import { cleanQtyString } from '../clean-qty-string';

describe('qty helper', () => {
  it('should works properly', () => {
    expect(cleanQtyString()).toEqual('');
    expect(cleanQtyString('a')).toEqual('');
    expect(cleanQtyString('')).toEqual('');
    expect(cleanQtyString('0')).toEqual('0');
    expect(cleanQtyString('1')).toEqual('1');
    expect(cleanQtyString('1', true)).toEqual('1');
    expect(cleanQtyString('123456', true)).toEqual('12345');
    expect(cleanQtyString('1.')).toEqual('1');
    expect(cleanQtyString('1.', true)).toEqual('1,');
    expect(cleanQtyString('1.2', true)).toEqual('1,2');
    expect(cleanQtyString('1.23', true)).toEqual('1,2');
    expect(cleanQtyString('1233.23', true)).toEqual('1233,2');
    expect(cleanQtyString('0000', true)).toEqual('0');
    expect(cleanQtyString('12331.', true)).toEqual('12331');
    expect(cleanQtyString('12331.3', true)).toEqual('12331');
  });
});
