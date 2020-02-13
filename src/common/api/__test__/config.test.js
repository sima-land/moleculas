import { validatePostStatus } from '../config';

describe('function validatePostStatus()', () => {
  it('returns correct data', () => {
    expect(validatePostStatus(201)).toBeTruthy();
    expect(validatePostStatus(500)).toBeFalsy();
  });
});
