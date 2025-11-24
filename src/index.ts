import { Color } from './color.class';
import { fromCMYK } from './helpers/from_cmyk';
import { fromHex } from './helpers/from_hex';
import { fromHSL } from './helpers/from_hsl';
import { fromRGB } from './helpers/from_rgb';

export { Color };

export const rgb = (
  red: number,
  green: number,
  blue: number,
  alpha?: number,
): Color => {
  const { r, g, b, a } = fromRGB(red, green, blue, alpha);
  return new Color(r, g, b, a);
};

export const hex = (hex: string): Color => {
  const { r, g, b, a } = fromHex(hex);
  return new Color(r, g, b, a);
};

export const hsl = (h: number, s: number, l: number, alpha?: number): Color => {
  const { r, g, b, a } = fromHSL(h, s, l, alpha);
  return new Color(r, g, b, a);
};

export const cmyk = (
  c: number,
  m: number,
  y: number,
  k: number,
  alpha?: number,
): Color => {
  const { r, g, b, a } = fromCMYK(c, m, y, k, alpha);
  return new Color(r, g, b, a);
};
