import { rgb } from '..';
import { testCases } from './rgb.case';

describe('test rgb to...', () => {
  testCases.forEach(({ value, expect: expected }) => {
    const { r, b, g, a } = value;
    const { rgb: rgbExpect, hex: hexExpect, hsl: hslExpect, cmyk: cmykExpect } = expected;
    const result = rgb(r, g, b, a);

    it(`rgb: ${r},${g},${b},${a} -> ${result.rgb()}`, () => {
      expect(result.rgb()).toBe(rgbExpect);
    });

    it(`hex: ${r},${g},${b},${a} -> ${result.hex()}`, () => {
      expect(result.hex()).toBe(hexExpect);
    });

    it(`hsl: ${r},${g},${b},${a} -> ${result.hsl()}`, () => {
      expect(result.hsl()).toBe(hslExpect);
    });

    it(`cmyk: ${r},${g},${b},${a} -> ${JSON.stringify(result.cmyk())}`, () => {
      expect(result.cmyk()).toEqual(cmykExpect);
    });
  });
});
