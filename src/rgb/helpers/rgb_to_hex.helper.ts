import { alphaIsSet } from '../../helpers/alpha_is_set.helper';
import type { IRGB } from '../rgb.interface';

export function rgbToHex(rgb: IRGB): string {
  const { r, g, b, a } = { ...rgb };

  const rHex = toHexComponent(r);
  const gHex = toHexComponent(g);
  const bHex = toHexComponent(b);
  const aHex = alphaIsSet(a) ? toHexComponent((a || 1) * 256 - 1) : '';

  return `#${rHex}${gHex}${bHex}${aHex}`;
}

function toHexComponent(color: number): string {
  return Math.round(color).toString(16).padStart(2, '0');
}
