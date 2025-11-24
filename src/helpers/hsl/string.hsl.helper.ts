import type { IHSL } from '../../interfaces/hsl.interface';
import { alphaIsSet } from '../alpha_is_set.helper';

export function stringHSL(hsl: IHSL): string {
  const { h, s, l, a } = hsl;

  const hValue = Math.round(h * 360);
  const sValue = Math.round(s * 100);
  const lValue = Math.round(l * 100);
  const aValue = alphaIsSet(a) ? ` / ${a}` : '';

  return `hsl(${hValue}, ${sValue}%, ${lValue}%${aValue})`;
}
