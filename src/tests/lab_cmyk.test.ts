import { cmyk } from '..';
import { testCases } from './cases/lab_cmyk.case';

describe('test cmyk to lab', () => {
  const log: any[] = [];

  testCases.forEach(({ c, m, y, k, lab: l }) => {
    const result = cmyk(c, m, y, k);
    const lab = result.lab();
    const rgb = lab.rgb();
    const cmykRgb = rgb.cmyk();
    const cmykLab = lab.cmyk();

    log.push({
      idx: `${c} ${m} ${y} ${k}`,
      cmyk: result.toString(),
      lab: lab.toString(),
      rbg: rgb.toString(),
      cmyk_from_rgb: cmykRgb.toString(),
      cmyk_from_lab: cmykLab.toString(),
    });

    it(`${JSON.stringify({ c, m, y, k })} -> ${lab.toString()}`, () => {
      expect(lab.toString()).toBe(l);
    });
  });

  // console.table(log);
});
