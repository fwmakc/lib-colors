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

    const resultString = result.toString();
    const hexString = result.toHex();
    const hslString = result.hsl().toString();
    const cmykString = result.cmyk().toString();

    it(`rgb: ${r},${g},${b},${a} -> ${resultString}`, () => {
      expect(resultString).toBe(rgbExpect);
    });

    it(`hex: ${r},${g},${b},${a} -> ${hexString}`, () => {
      expect(hexString).toBe(hexExpect);
    });

    it(`hsl: ${r},${g},${b},${a} -> ${hslString}`, () => {
      expect(hslString).toBe(hslExpect);
    });

    it(`cmyk: ${r},${g},${b},${a} -> ${JSON.stringify(cmykString)}`, () => {
      expect(cmykString).toEqual(cmykExpect);
    });
  });
});
