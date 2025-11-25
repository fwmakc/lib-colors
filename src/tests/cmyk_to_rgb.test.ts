import { cmyk } from '..';
import { testCases } from './cmyk_rgb.case';

describe('test cmyk to rgb', () => {
  testCases.forEach(({ c, m, y, k, r, g, b }) => {
    const result = cmyk(c, m, y, k).rgb().toString();
    const expected = `rgb(${r},${g},${b})`;

    it(`${JSON.stringify({ c, m, y, k })} -> ${result} = ${expected}`, () => {
      expect(result).toBe(expected);
    });
  });
});
