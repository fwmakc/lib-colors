import type { IRGB } from '../../rgb/rgb.interface';
import type { ILAB, IXYZ } from '../lab.interface';

import { labToXyz } from './lab_to_xyz.helper';

export function labToRgb(lab: ILAB): IRGB {
  const xyz = labToXyz(lab);
  return xyzToRgb(xyz);
}

function xyzToRgb(xyz: IXYZ): IRGB {
  const { x, y, z, alpha } = { ...xyz };

  const xNorm = x / 100;
  const yNorm = y / 100;
  const zNorm = z / 100;

  let r = xNorm * 3.2404542 + yNorm * -1.5371385 + zNorm * -0.4985314;
  let g = xNorm * -0.969266 + yNorm * 1.8760108 + zNorm * 0.041556;
  let b = xNorm * 0.0556434 + yNorm * -0.2040259 + zNorm * 1.0572252;

  r = r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r;
  g = g > 0.0031308 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : 12.92 * g;
  b = b > 0.0031308 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : 12.92 * b;

  return {
    r: Math.round(Math.max(0, Math.min(1, r)) * 255),
    g: Math.round(Math.max(0, Math.min(1, g)) * 255),
    b: Math.round(Math.max(0, Math.min(1, b)) * 255),
    a: alpha,
  };
}
