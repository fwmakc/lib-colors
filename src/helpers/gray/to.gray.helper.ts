import type { IGray } from '../../interfaces/gray.interface';
import { clamp } from '../clamp.helper';

export function toGray(r: number, g: number, b: number, a?: number): IGray {
  r = clamp(r, 0, 255);
  g = clamp(g, 0, 255);
  b = clamp(b, 0, 255);

  const grayscale =
    Math.round((Math.round(0.299 * r + 0.587 * g + 0.114 * b) * 100) / 255) /
    100;

  return {
    g: grayscale,
    a,
  };
}
