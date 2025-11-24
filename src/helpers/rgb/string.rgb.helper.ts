import type { IRGB } from '../../interfaces/rgb.interface';
import { alphaIsSet } from '../alpha_is_set.helper';

export function stringRGB(rgb: IRGB): string {
  const { r, g, b, a } = rgb;

  if (alphaIsSet(a)) {
    return `rgba(${r},${g},${b},${a})`;
  }
  return `rgb(${r},${g},${b})`;
}
