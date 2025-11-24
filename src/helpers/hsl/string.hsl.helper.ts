import type { IHSL } from '../../interfaces/hsl.interface';
import { alphaIsSet } from '../alpha_is_set.helper';

export function stringHSL(hsl: IHSL): string {
  const { h, s, l, a } = hsl;

  const aValue = alphaIsSet(a) ? ` / ${a}` : '';

  return `hsl(${h}, ${s}%, ${l}%${aValue})`;
}
