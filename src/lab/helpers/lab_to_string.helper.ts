import { alphaIsSet } from '../../helpers/alpha_is_set.helper';
import type { ILAB } from '../lab.interface';

export function labToString(lab: ILAB): string {
  const { l, a, b, alpha } = lab;

  const aValue = alphaIsSet(alpha) ? ` / ${alpha}` : '';

  return `lab(${l} ${a} ${b}%${aValue})`;
}
