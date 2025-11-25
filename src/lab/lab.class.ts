import { CMYK } from '../cmyk/cmyk.class';
import { alphaIsSet } from '../helpers/alpha_is_set.helper';
import { clamp } from '../helpers/clamp.helper';
import { RGB } from '../rgb/rgb.class';

import { colorLAB } from './consts/color.lab.const';
import { maxLAB } from './consts/max.lab.const';
import { labToCmyk } from './helpers/lab_to_cmyk.helper';
import { labToRgb } from './helpers/lab_to_rgb.helper';
import { labToString } from './helpers/lab_to_string.helper';
import type { ILAB } from './lab.interface';

export class LAB {
  private color: ILAB = { ...colorLAB };
  readonly max: ILAB = maxLAB;

  get l(): number {
    return this.color.l;
  }

  set l(value: number) {
    this.color.l = clamp(value, 0, this.max.l);
  }

  get a(): number {
    return this.color.a;
  }

  set a(value: number) {
    this.color.a = clamp(value, -128, this.max.a);
  }

  get b(): number {
    return this.color.b;
  }

  set b(value: number) {
    this.color.b = clamp(value, -128, this.max.b);
  }

  get alpha(): number | undefined {
    return this.color.alpha;
  }

  set alpha(value: number | undefined) {
    this.color.alpha = alphaIsSet(value)
      ? clamp(Number(value), 0, 1)
      : undefined;
  }

  constructor(l: number, a: number, b: number, alpha?: number) {
    this.l = l;
    this.a = a;
    this.b = b;
    this.alpha = alpha;
  }

  toString(): string {
    return labToString(this.color);
  }

  cmyk(): CMYK {
    const { c, m, y, k, a } = labToCmyk(this.color);
    return new CMYK(c, m, y, k, a);
  }

  rgb(): RGB {
    const { r, g, b, a } = labToRgb(this.color);
    return new RGB(r, g, b, a);
  }
}
