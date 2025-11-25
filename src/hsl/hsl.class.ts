import { alphaIsSet } from '../helpers/alpha_is_set.helper';
import { clamp } from '../helpers/clamp.helper';
import { RGB } from '../rgb/rgb.class';

import { colorHSL } from './consts/color.hsl.const';
import { maxHSL } from './consts/max.hsl.const';
import { hslToRgb } from './helpers/hsl_to_rgb.helper';
import { hslToString } from './helpers/hsl_to_string.helper';
import type { IHSL } from './hsl.interface';

export class HSL {
  private color: IHSL = { ...colorHSL };
  readonly max: IHSL = maxHSL;

  get h(): number {
    return this.color.h;
  }

  set h(value: number) {
    this.color.h = Math.round(value % this.max.h);
  }

  get s(): number {
    return this.color.s;
  }

  set s(value: number) {
    this.color.s = clamp(value, 0, this.max.s);
  }

  get l(): number {
    return this.color.l;
  }

  set l(value: number) {
    this.color.l = clamp(value, 0, this.max.l);
  }

  get a(): number | undefined {
    return this.color.a;
  }

  set a(value: number | undefined) {
    this.color.a = alphaIsSet(value) ? clamp(Number(value), 0, 1) : undefined;
  }

  constructor(h: number, s: number, l: number, a?: number) {
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
  }

  toString(): string {
    return hslToString(this.color);
  }

  rgb(): RGB {
    const { r, g, b, a } = hslToRgb(this.color);
    return new RGB(r, g, b, a);
  }
}
