import type { IRGB } from '../../rgb/rgb.interface';
import type { ICMYK } from '../cmyk.interface';

export function cmykToRgb(cmyk: ICMYK): IRGB {
  let { c, m, y, k, a } = cmyk;

  c /= 100;
  m /= 100;
  y /= 100;
  k /= 100;

  const r = Math.round(255 * (1 - c) * (1 - k));
  const g = Math.round(255 * (1 - m) * (1 - k));
  const b = Math.round(255 * (1 - y) * (1 - k));

  return { r, g, b, a };
}
