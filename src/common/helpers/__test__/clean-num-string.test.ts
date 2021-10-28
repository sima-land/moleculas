import { cleanNumString } from '../clean-num-string';

describe('cleanNumString()"', () => {
  it('should parse correctly', () => {
    const values = new Map([
      [null, ''],
      ['', ''],
      ['dfasdf', ''],
      ['0000', '0'],
      ['00005', '5'],
      ['05000', '5000'],
      ['5000', '5000'],
      ['0', '0'],
      ['0sdf00fas', '0'],
      ['dsf234', '234'],
      ['dsf0234', '234'],
      ['ds0f0234', '234'],
      ['ds0f02340', '2340'],
      ['35jl0', '350'],
      ['02340043', '2340043'],
      ['001234', '1234'],
    ]);
    for (const [key, value] of values) {
      expect(cleanNumString(key)).toEqual(value);
    }
  });
});
