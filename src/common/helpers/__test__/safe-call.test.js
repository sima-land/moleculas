import safeCall from '../safe-call';
import isFunction from 'lodash/isFunction';

jest.mock('lodash/isFunction');

describe('safeCall', () => {
  afterAll(isFunction.mockRestore);

  it('should call func', () => {
    const spy = jest.fn();
    isFunction.mockReturnValueOnce(true);

    expect(spy).not.toBeCalled();
    safeCall(spy)('arg1', 'arg2');
    expect(spy).toBeCalledWith('arg1', 'arg2');
  });

  it('shouldn`t call other', () => {
    const spy = jest.fn();
    isFunction.mockReturnValueOnce(false);

    expect(spy).not.toBeCalled();
    safeCall(spy)('arg1', 'arg2');
    expect(spy).not.toBeCalled();
  });
});
