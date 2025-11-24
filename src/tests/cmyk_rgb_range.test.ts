import { cmyk } from '..';
import { testCases } from './cmyk_rgb_range.case';

describe('test cmyk to rgb range', () => {
  testCases.forEach(({ value, expect: expected }) => {
    const { c, m, y, k } = value;
    const result = cmyk(c, m, y, k);

    it(`${c},${m},${y},${k} -> ${result.rgb().string}`, () => {
      expect(result.rgb().string).toBe(expected);
    });
  });
});
