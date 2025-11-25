import { rgb } from '..';
import { testCases } from './cases/rgb.case';

describe('test rgb to...', () => {
  testCases.forEach(({ value, expect: expected }) => {
    const { r, b, g, a } = value;
    const rgbExpect = expected.rgb;
    const rgbObject = rgb(r, g, b, a);

    const result = String(rgbObject);

    it(`rgb: ${r},${g},${b},${a} -> ${result}`, () => {
      expect(result).toBe(rgbExpect);
    });
  });
});
