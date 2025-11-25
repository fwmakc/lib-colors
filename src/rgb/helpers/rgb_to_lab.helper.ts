import { xyzToLab } from '../../lab/helpers/xyz_to_lab.helper';
import type { ILAB, IXYZ } from '../../lab/lab.interface';
import type { IRGB } from '../rgb.interface';

export function rgbToLab(rgb: IRGB): ILAB {
  const xyz = rgbToXyz(rgb);
  return xyzToLab(xyz);
}

function rgbToXyz(rgb: IRGB): IXYZ {
  let { r, g, b, a } = rgb;

  r /= 255;
  g /= 255;
  b /= 255;

  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  const x = (r * 0.4124564 + g * 0.3575761 + b * 0.1804375) * 100;
  const y = (r * 0.2126729 + g * 0.7151522 + b * 0.072175) * 100;
  const z = (r * 0.0193339 + g * 0.119192 + b * 0.9503041) * 100;

  return { x, y, z, alpha: a };
}
