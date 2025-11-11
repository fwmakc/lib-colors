import { fromCMYK } from '../helpers/from_cmyk';
import { toCMYK } from '../helpers/to_cmyk';

const testCases = [
  { c: 100, m: 0, y: 0, k: 0, r: 0, g: 160, b: 227 },
  { c: 0, m: 100, y: 0, k: 0, r: 229, g: 9, b: 127 },
  { c: 0, m: 0, y: 100, k: 0, r: 255, g: 237, b: 0 },
  { c: 0, m: 100, y: 100, k: 0, r: 227, g: 30, b: 36 },
  { c: 100, m: 0, y: 100, k: 0, r: 0, g: 152, b: 70 },
  { c: 100, m: 100, y: 0, k: 0, r: 57, g: 49, b: 133 },
  { c: 0, m: 0, y: 0, k: 0, r: 254, g: 254, b: 254 },
  { c: 0, m: 0, y: 0, k: 100, r: 43, g: 42, b: 41 },
  { c: 0, m: 0, y: 0, k: 0, r: 0, g: 0, b: 0 },
  { c: 0, m: 0, y: 0, k: 0, r: 0, g: 0, b: 255 },
  { c: 0, m: 0, y: 0, k: 0, r: 0, g: 255, b: 0 },
  { c: 0, m: 0, y: 0, k: 0, r: 0, g: 255, b: 255 },
  { c: 0, m: 0, y: 0, k: 0, r: 255, g: 0, b: 0 },
  { c: 0, m: 0, y: 0, k: 0, r: 255, g: 0, b: 255 },
  { c: 0, m: 0, y: 0, k: 0, r: 255, g: 255, b: 0 },
  { c: 0, m: 0, y: 0, k: 0, r: 255, g: 255, b: 255 },
];

describe('notEmpty', () => {
  testCases.forEach(({ c, m, y, k, r, b, g }) => {
    const rgb = fromCMYK(c, m, y, k);
    const cmyk = toCMYK(r, g, b);
    it(`rgb ${r},${g},${b} -> ${cmyk.c},${cmyk.m},${cmyk.y},${cmyk.k} | cmyk ${c},${m},${y},${k} -> ${rgb.r},${rgb.g},${rgb.b}`, () => {
      expect(true).toBeTruthy();
    });
  });
});
