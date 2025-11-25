import { gray } from '..';
import { testCases } from './gray_rgb.case';

describe('test gray to rgb', () => {
  testCases.forEach(({ gray: g, grayscale }) => {
    const result = gray(g).rgb().toString();
    const expected = `rgb(${grayscale},${grayscale},${grayscale})`;

    it(`${g} -> ${result} = ${expected}`, () => {
      expect(result).toBe(expected);
    });
  });
});
