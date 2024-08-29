import { tokenToCustomProperty } from '../utils';

describe('tokenToCustomProperty', () => {
  it('should return value if it is not a string', () => {
    expect(tokenToCustomProperty(undefined)).toBe(undefined);
  });

  it('should return value if it is not a token', () => {
    expect(tokenToCustomProperty('something')).toBe('something');
    expect(tokenToCustomProperty('#000')).toBe('#000');
  });

  it('should return value if it is color token but color not exist', () => {
    expect(tokenToCustomProperty('color/foo')).toBe('color/foo');
  });

  it('should return css property if it is valid color token', () => {
    expect(tokenToCustomProperty('color/basic-blue')).toBe('var(--color-basic-blue)');
  });

  it('should return value if it is gradient token but gradient not exist', () => {
    expect(tokenToCustomProperty('gradient/hello')).toBe('gradient/hello');
  });

  it('should return css property if it is valid gradient token', () => {
    expect(tokenToCustomProperty('gradient/gold')).toBe('var(--gradient-gold)');
  });
});
