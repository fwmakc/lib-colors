import type { ICMYK } from '../../cmyk/cmyk.interface';
import type { IRGB } from '../rgb.interface';

export function rgbToCmyk(rgb: IRGB): ICMYK {
  let { r, g, b, a } = { ...rgb };

  r /= 255;
  g /= 255;
  b /= 255;

  const k = 1 - Math.max(r, g, b);

  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100, a };
  }

  const c = (1 - r - k) / (1 - k);
  const m = (1 - g - k) / (1 - k);
  const y = (1 - b - k) / (1 - k);

  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100),
    a,
  };
}
