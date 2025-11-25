import type { ILAB, IXYZ } from '../lab.interface';

export function labToXyz(lab: ILAB): IXYZ {
  const { l, a, b, alpha } = lab;

  const refX = 95.047;
  const refY = 100.0;
  const refZ = 108.883;

  const fy = (l + 16) / 116;
  const fx = a / 500 + fy;
  const fz = fy - b / 200;

  const xNorm = fx > 0.206893 ? Math.pow(fx, 3) : (fx - 16 / 116) / 7.787;
  const yNorm = fy > 0.206893 ? Math.pow(fy, 3) : (fy - 16 / 116) / 7.787;
  const zNorm = fz > 0.206893 ? Math.pow(fz, 3) : (fz - 16 / 116) / 7.787;

  return {
    x: Math.max(0, xNorm * refX),
    y: Math.max(0, yNorm * refY),
    z: Math.max(0, zNorm * refZ),
    alpha,
  };
}
