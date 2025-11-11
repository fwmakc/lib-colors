import { IColor } from '../color.interface';

export function fromCMYK(
  c: number,
  m: number,
  y: number,
  k: number,
  a?: number,
): IColor {
  c = c / 100;
  m = m / 100;
  y = y / 100;
  k = k / 100;

  const r = 255 * (1 - c) * (1 - k);
  const g = 255 * (1 - m) * (1 - k);
  const b = 255 * (1 - y) * (1 - k);

  return {
    r: Math.round(r),
    g: Math.round(g),
    b: Math.round(b),
    a,
  };
}
