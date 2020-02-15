import { isNonEmptyArray } from '../is-non-empty';

describe('isNonEmpty', () => {
  it('should work correctly isNonEmptyArray', () => {
    let result = isNonEmptyArray(['test']);
    expect(result).toBeTruthy();
    result = isNonEmptyArray([]);
    expect(result).toBeFalsy();
    result = isNonEmptyArray(undefined);
    expect(result).toBeFalsy();
  });
});
