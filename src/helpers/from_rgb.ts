import { IColor } from '../color.interface';

export function fromRGB(r: number, g: number, b: number, a?: number): IColor {
  const clamp = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);

  r = clamp(r, 0, 255);
  g = clamp(g, 0, 255);
  b = clamp(b, 0, 255);
  a = a ? clamp(a, 0, 1) : undefined;

  return { r, g, b, a };
}
