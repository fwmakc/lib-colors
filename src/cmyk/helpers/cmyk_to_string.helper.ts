import { alphaIsSet } from '../../helpers/alpha_is_set.helper';
import type { ICMYK } from '../cmyk.interface';

export function cmykToString(cmyk: ICMYK): string {
  const { c, m, y, k, a } = cmyk;

  const aValue = alphaIsSet(a) ? ` ${a}` : '';

  return `${c} ${m} ${y} ${k}${aValue}`;
}
