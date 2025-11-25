import { rgb } from '..';
import { testCases } from './gray_rgb.case';

describe('test gray from rgb', () => {
  testCases.forEach(({ gray, r, g, b }) => {
    const result = rgb(r, g, b).gray().g;

    it(`${JSON.stringify({ r, g, b })} -> ${gray} = ${result}`, () => {
      expect(result).toBe(gray);
    });
  });
});
