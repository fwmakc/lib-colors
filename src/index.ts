import { Color } from './color.class';
import { fromCMYK } from './helpers/cmyk/from.cmyk.helper';
import { fromHex } from './helpers/hex/from.hex.helper';
import { fromHSL } from './helpers/hsl/from.hsl.helper';
import { fromRGB } from './helpers/rgb/from.rgb.helper';

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
