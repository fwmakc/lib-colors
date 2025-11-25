import { CMYK } from './cmyk/cmyk.class';
import type { ICMYK } from './cmyk/cmyk.interface';
import { Gray } from './gray/gray.class';
import type { IGray } from './gray/gray.interface';
import { HSL } from './hsl/hsl.class';
import type { IHSL } from './hsl/hsl.interface';
import { RGB } from './rgb/rgb.class';
import type { IRGB } from './rgb/rgb.interface';

export { CMYK, Gray, HSL, RGB };
export type { ICMYK, IGray, IHSL, IRGB };

export const cmyk = (
  c: number,
  m: number,
  y: number,
  k: number,
  a?: number,
): CMYK => {
  return new CMYK(c, m, y, k, a);
};

export const gray = (g: number, a?: number): Gray => {
  return new Gray(g, a);
};

export const hex = (hex: string): RGB => {
  const rgb = new RGB();
  rgb.fromHex(hex);
  return rgb;
};

export const hsl = (h: number, s: number, l: number, a?: number): HSL => {
  return new HSL(h, s, l, a);
};

export const rgb = (r: number, g: number, b: number, a?: number): RGB => {
  return new RGB(r, g, b, a);
};
