import { rgb } from '..';
import { testCases } from './cmyk_rgb.case';

describe('test cmyk from rgb', () => {
  testCases.forEach(({ c, m, y, k, r, g, b }) => {
    const result = rgb(r, g, b).cmyk().string;
    const expected = `${c} ${m} ${y} ${k}`;

    it(`${JSON.stringify({ r, g, b })} -> ${expected}`, () => {
      expect(result).toEqual(expected);
    });
  });
});
