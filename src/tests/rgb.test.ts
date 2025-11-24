import { rgb } from '..';
import { testCases } from './rgb.case';

describe('test rgb to...', () => {
  testCases.forEach(({ value, expect: expected }) => {
    const { r, b, g, a } = value;
    const {
      rgb: rgbExpect,
      hex: hexExpect,
      hsl: hslExpect,
      cmyk: cmykExpect,
    } = expected;
    const result = rgb(r, g, b, a);

    it(`rgb: ${r},${g},${b},${a} -> ${result.rgb().string}`, () => {
      expect(result.rgb().string).toBe(rgbExpect);
    });

    it(`hex: ${r},${g},${b},${a} -> ${result.hex().string}`, () => {
      expect(result.hex().string).toBe(hexExpect);
    });

    it(`hsl: ${r},${g},${b},${a} -> ${result.hsl().string}`, () => {
      expect(result.hsl().string).toBe(hslExpect);
    });

    it(`cmyk: ${r},${g},${b},${a} -> ${JSON.stringify(result.cmyk().string)}`, () => {
      expect(result.cmyk().string).toEqual(cmykExpect);
    });
  });
});
