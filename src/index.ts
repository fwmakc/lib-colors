import { Color } from './color.class';
import { fromHex } from './helpers/from_hex';
import { fromHSL } from './helpers/from_hsl';
import { fromRGB } from './helpers/from_rgb';

export { Color };

export const rgb = (r: number, g: number, b: number, a?: number) => {
  ({ r, g, b, a } = fromRGB(r, g, b, a));
  return new Color(r, g, b, a);
};

export const hex = (hex: string) => {
  const { r, g, b, a } = fromHex(hex);
  return new Color(r, g, b, a);
};

export const hsl = (h: number, s: number, l: number) => {
  const { r, g, b, a } = fromHSL(h, s, l);
  return new Color(r, g, b, a);
};
