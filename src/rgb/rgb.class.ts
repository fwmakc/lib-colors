import { CMYK } from '../cmyk/cmyk.class';
import { Gray } from '../gray/gray.class';
import { alphaIsSet } from '../helpers/alpha_is_set.helper';
import { clamp } from '../helpers/clamp.helper';
import { HSL } from '../hsl/hsl.class';
import { LAB } from '../lab/lab.class';

import { colorRGB } from './consts/color.rgb.const';
import { maxRGB } from './consts/max.rgb.const';
import { rgbFromHex } from './helpers/rgb_from_hex.helper';
import { rgbToCmyk } from './helpers/rgb_to_cmyk.helper';
import { rgbToGray } from './helpers/rgb_to_gray.helper';
import { rgbToHex } from './helpers/rgb_to_hex.helper';
import { rgbToHsl } from './helpers/rgb_to_hsl.helper';
import { rgbToLab } from './helpers/rgb_to_lab.helper';
import { rgbToString } from './helpers/rgb_to_string.helper';
import type { IRGB } from './rgb.interface';

export class RGB {
  private color: IRGB = colorRGB;
  readonly max: IRGB = maxRGB;

  get r(): number {
    return this.color.r;
  }

  set r(value: number) {
    this.color.r = clamp(value, 0, this.max.r);
  }

  get g(): number {
    return this.color.g;
  }

  set g(value: number) {
    this.color.g = clamp(value, 0, this.max.g);
  }

  get b(): number {
    return this.color.b;
  }

  set b(value: number) {
    this.color.b = clamp(value, 0, this.max.b);
  }

  get a(): number | undefined {
    return this.color.a;
  }

  set a(value: number | undefined) {
    this.color.a = alphaIsSet(value) ? clamp(Number(value), 0, 1) : undefined;
  }

  constructor(r: number = 0, g: number = 0, b: number = 0, a?: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  toString(): string {
    return rgbToString(this.color);
  }

  fromHex(hex: string): void {
    const { r, g, b, a } = rgbFromHex(hex);

    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  toHex(): string {
    return rgbToHex(this.color);
  }

  cmyk(): CMYK {
    const { c, m, y, k, a } = rgbToCmyk(this.color);
    return new CMYK(c, m, y, k, a);
  }

  gray(): Gray {
    const { g, a } = rgbToGray(this.color);
    return new Gray(g, a);
  }

  hsl(): HSL {
    const { h, s, l, a } = rgbToHsl(this.color);
    return new HSL(h, s, l, a);
  }

  lab(): LAB {
    const { l, a, b, alpha } = rgbToLab(this.color);
    return new LAB(l, a, b, alpha);
  }
}
