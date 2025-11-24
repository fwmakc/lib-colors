import type { IRGB } from '../../interfaces/rgb.interface';
import { alphaIsSet } from '../alpha_is_set.helper';
import { clamp } from '../clamp.helper';

export function fromRGB(r: number, g: number, b: number, a?: number): IRGB {
  r = clamp(r, 0, 255);
  g = clamp(g, 0, 255);
  b = clamp(b, 0, 255);
  a = alphaIsSet(a) ? clamp(Number(a), 0, 1) : undefined;

  return { r, g, b, a };
}
