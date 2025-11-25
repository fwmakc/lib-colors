import { alphaIsSet } from '../helpers/alpha_is_set.helper';
import { clamp } from '../helpers/clamp.helper';
import { LAB } from '../lab/lab.class';
import { RGB } from '../rgb/rgb.class';

import type { ICMYK } from './cmyk.interface';
import { colorCMYK } from './consts/color.cmyk.const';
import { maxCMYK } from './consts/max.cmyk.const';
import { cmykToLab } from './helpers/cmyk_to_lab.helper';
import { cmykToRgb } from './helpers/cmyk_to_rgb.helper';
import { cmykToString } from './helpers/cmyk_to_string.helper';

export class CMYK {
  private color: ICMYK = colorCMYK;
  readonly max: ICMYK = maxCMYK;

  get c(): number {
    return this.color.c;
  }

  set c(value: number) {
    this.color.c = clamp(value, 0, this.max.c);
  }

  get m(): number {
    return this.color.m;
  }

  set m(value: number) {
    this.color.m = clamp(value, 0, this.max.m);
  }

  get y(): number {
    return this.color.y;
  }

  set y(value: number) {
    this.color.y = clamp(value, 0, this.max.y);
  }

  get k(): number {
    return this.color.k;
  }

  set k(value: number) {
    this.color.k = clamp(value, 0, this.max.k);
  }

  get a(): number | undefined {
    return this.color.a;
  }

  set a(value: number | undefined) {
    this.color.a = alphaIsSet(value) ? clamp(Number(value), 0, 1) : undefined;
  }

  constructor(c: number, m: number, y: number, k: number, a?: number) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
    this.a = a;
  }

  sum(): number {
    const { c, m, y, k } = this.color;
    return c + m + y + k;
  }

  toString(): string {
    return cmykToString(this.color);
  }

  lab(): LAB {
    const { l, a, b, alpha } = cmykToLab(this.color);
    return new LAB(l, a, b, alpha);
  }

  rgb(): RGB {
    const { r, g, b, a } = cmykToRgb(this.color);
    return new RGB(r, g, b, a);
  }
}
