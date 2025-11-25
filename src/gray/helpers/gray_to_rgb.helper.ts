import type { IRGB } from '../../rgb/rgb.interface';
import type { IGray } from '../gray.interface';

export function grayToRgb(gray: IGray): IRGB {
  const { g, a } = gray;

  const grayscale = Math.round((g / 100) * 256) - 1;

  return {
    r: grayscale,
    g: grayscale,
    b: grayscale,
    a,
  };
}
