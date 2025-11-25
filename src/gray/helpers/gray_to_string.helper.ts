import { alphaIsSet } from '../../helpers/alpha_is_set.helper';
import type { IGray } from '../gray.interface';

export function grayToString(gray: IGray): string {
  const { g, a } = { ...gray };

  const grayscale = Math.round((g / 100) * 255);

  if (alphaIsSet(a)) {
    return `rgba(${grayscale},${grayscale},${grayscale},${a})`;
  }

  return `rgb(${grayscale},${grayscale},${grayscale})`;
}
