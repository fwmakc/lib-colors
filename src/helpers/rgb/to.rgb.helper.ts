import type { IRGB } from '../../interfaces/rgb.interface';

export function toRGB(r: number, g: number, b: number, a?: number): IRGB {
  return { r, g, b, a };
}
