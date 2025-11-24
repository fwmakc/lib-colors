import type { IRGB } from '../../interfaces/rgb.interface';
import { alphaIsSet } from '../alpha_is_set.helper';

export function fromRGB(r: number, g: number, b: number, a?: number): IRGB {
  const clamp = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);

  r = clamp(r, 0, 255);
  g = clamp(g, 0, 255);
  b = clamp(b, 0, 255);
  a = alphaIsSet(a) ? clamp(Number(a), 0, 1) : undefined;

  return { r, g, b, a };
}
