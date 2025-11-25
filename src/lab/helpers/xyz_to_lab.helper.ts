import type { ILAB, IXYZ } from '../lab.interface';

export function xyzToLab(xyz: IXYZ): ILAB {
  const { x, y, z, alpha } = { ...xyz };

  const refX = 95.047;
  const refY = 100.0;
  const refZ = 108.883;

  const xNorm = x / refX;
  const yNorm = y / refY;
  const zNorm = z / refZ;

  const fx =
    xNorm > 0.008856 ? Math.pow(xNorm, 1 / 3) : 7.787 * xNorm + 16 / 116;
  const fy =
    yNorm > 0.008856 ? Math.pow(yNorm, 1 / 3) : 7.787 * yNorm + 16 / 116;
  const fz =
    zNorm > 0.008856 ? Math.pow(zNorm, 1 / 3) : 7.787 * zNorm + 16 / 116;

  let l = Math.max(0, 116 * fy - 16);
  let a = 500 * (fx - fy);
  let b = 200 * (fy - fz);

  l = Math.round(l * 100) / 100;
  a = Math.round(a * 100) / 100;
  b = Math.round(b * 100) / 100;

  return { l, a, b, alpha };
}
