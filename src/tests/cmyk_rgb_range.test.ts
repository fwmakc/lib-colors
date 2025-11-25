import { cmyk } from '..';
import { testCases } from './cmyk_rgb_range.case';

describe('test cmyk to rgb range', () => {
  testCases.forEach(({ value, expect: expected }) => {
    const { c, m, y, k } = value;
    const result = cmyk(c, m, y, k).rgb().toString();

    it(`${c},${m},${y},${k} -> ${result}`, () => {
      expect(result).toBe(expected);
    });
  });
});
