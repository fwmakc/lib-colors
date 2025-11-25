import { rgb } from '..';
import { testCases } from './cases/lab_rgb.case';

describe('test rgb to lab', () => {
  const log: any[] = [];

  testCases.forEach(({ r, g, b, lab: l }) => {
    const result = rgb(r, g, b);
    const lab = result.lab();
    const cmyk = lab.cmyk();
    const rgbCmyk = cmyk.rgb();
    const rgbLab = lab.rgb();

    log.push({
      rgb: result.toString(),
      lab: lab.toString(),
      cmyk: cmyk.toString(),
      rgb_from_cmyk: rgbCmyk.toString(),
      rgb_from_lab: rgbLab.toString(),
    });

    it(`${JSON.stringify({ r, g, b })} -> ${lab.toString()}`, () => {
      expect(lab.toString()).toBe(l);
    });
  });

  // console.table(log);
});
