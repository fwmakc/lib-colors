import type { IGray } from '../../interfaces/gray.interface';
import { alphaIsSet } from '../alpha_is_set.helper';

export function stringGray(gray: IGray): string {
  const { g, a } = gray;

  const grayscale = Math.round(g * 255);

  if (alphaIsSet(a)) {
    return `rgba(${grayscale},${grayscale},${grayscale},${a})`;
  }
  return `rgb(${grayscale},${grayscale},${grayscale})`;
}
