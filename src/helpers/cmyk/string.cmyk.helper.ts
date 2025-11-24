import type { ICMYK } from '../../interfaces/cmyk.interface';
import { alphaIsSet } from '../alpha_is_set.helper';

export function stringCMYK(cmyk: ICMYK): string {
  const { c, m, y, k, a } = cmyk;

  if (alphaIsSet(a)) {
    return `${c} ${m} ${y} ${k} ${a}`;
  }

  return `${c} ${m} ${y} ${k}`;
}
