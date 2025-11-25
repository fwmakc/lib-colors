import type { IHSL } from '../../hsl/hsl.interface';
import type { IRGB } from '../rgb.interface';

export function rgbToHsl(rgb: IRGB): IHSL {
  let { r, g, b, a } = rgb;

  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;

  const l: number = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h = h / 6;
  }

  const hValue = Math.round(h * 360);
  const sValue = Math.round(s * 100);
  const lValue = Math.round(l * 100);

  return {
    h: hValue,
    s: sValue,
    l: lValue,
    a,
  };
}
