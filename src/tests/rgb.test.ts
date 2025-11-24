import { rgb } from '..';
import { testCases } from './rgb.case';

describe('rgb to rgb', () => {
  testCases.forEach(({ value, expect: expected }) => {
    const { r, b, g, a } = value;
    const { rgb: rgbExpect, hex: hexExpect, hsl: hslExpect, cmyk: cmykExpect } = expected;
    const result = rgb(r, g, b, a);
    it(`rgb to rgb: ${r},${g},${b},${a} -> ${result.rgb()}`, () => {
      expect(result.rgb()).toBe(rgbExpect);
    });

    it(`rgb to hex: ${r},${g},${b},${a} -> ${result.hex()}`, () => {
      expect(result.hex()).toBe(hexExpect);
    });

    it(`rgb to hsl: ${r},${g},${b},${a} -> ${result.hsl()}`, () => {
      expect(result.hsl()).toBe(hslExpect);
    });

    it(`rgb to cmyk: ${r},${g},${b},${a} -> ${JSON.stringify(result.cmyk())}`, () => {
      expect(result.cmyk()).toEqual(cmykExpect);
    });
  });
});
