import type { IHEX } from '../../interfaces/hex.interface';
import { alphaIsSet } from '../alpha_is_set.helper';

export function toHex(r: number, g: number, b: number, a?: number): IHEX {
  const toHexComponent = (color: number): string =>
    Math.round(color).toString(16).padStart(2, '0');

  const rHex = toHexComponent(r);
  const gHex = toHexComponent(g);
  const bHex = toHexComponent(b);
  const aHex = alphaIsSet(a) ? toHexComponent((a || 1) * 256 - 1) : '';

  return {
    r: rHex,
    g: gHex,
    b: bHex,
    a: aHex,
  };
}
