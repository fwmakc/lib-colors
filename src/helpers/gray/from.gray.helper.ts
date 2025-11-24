import type { IRGB } from '../../interfaces/rgb.interface';
import { clamp } from '../clamp.helper';

export function fromGray(g: string | number, a?: number): IRGB {
  const grayscale = clamp(Math.round(Number(g || 0) * 256) - 1, 0, 255);

  return {
    r: grayscale,
    g: grayscale,
    b: grayscale,
    a,
  };
}
