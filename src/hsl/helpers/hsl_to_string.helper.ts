import { alphaIsSet } from '../../helpers/alpha_is_set.helper';
import type { IHSL } from '../hsl.interface';

export function hslToString(hsl: IHSL): string {
  const { h, s, l, a } = hsl;

  const aValue = alphaIsSet(a) ? ` / ${a}` : '';

  return `hsl(${h}, ${s}%, ${l}%${aValue})`;
}
