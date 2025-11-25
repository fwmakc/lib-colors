import { alphaIsSet } from '../../helpers/alpha_is_set.helper';
import type { IRGB } from '../rgb.interface';

export function rgbToString(rgb: IRGB): string {
  const { r, g, b, a } = { ...rgb };

  if (alphaIsSet(a)) {
    return `rgba(${r},${g},${b},${a})`;
  }

  return `rgb(${r},${g},${b})`;
}
