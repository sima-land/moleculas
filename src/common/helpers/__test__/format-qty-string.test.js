import { formatQtyString } from '../format-qty-string';

describe('formatQtyString', () => {
  it('should works properly', () => {
    expect(formatQtyString()).toEqual('');
    expect(formatQtyString('a')).toEqual('');
    expect(formatQtyString('')).toEqual('');
    expect(formatQtyString('0')).toEqual('0');
    expect(formatQtyString('1')).toEqual('1');
    expect(formatQtyString('1', { allowFloat: true })).toEqual('1');
    expect(formatQtyString('123456', { allowFloat: true })).toEqual('12345');
    expect(formatQtyString('1.')).toEqual('1');
    expect(formatQtyString('1.', { allowFloat: true })).toEqual('1,');
    expect(formatQtyString('1.2', { allowFloat: true })).toEqual('1,2');
    expect(formatQtyString('1.23', { allowFloat: true })).toEqual('1,2');
    expect(formatQtyString('1233.23', { allowFloat: true })).toEqual('1233,2');
    expect(formatQtyString('0000', { allowFloat: true })).toEqual('0');
    expect(formatQtyString('12331.', { allowFloat: true })).toEqual('12331');
    expect(formatQtyString('12331.3', { allowFloat: true })).toEqual('12331');
  });
});
