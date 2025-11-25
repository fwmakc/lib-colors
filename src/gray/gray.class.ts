import { alphaIsSet } from '../helpers/alpha_is_set.helper';
import { clamp } from '../helpers/clamp.helper';
import { RGB } from '../rgb/rgb.class';

import { colorGray } from './consts/color.gray.const';
import { maxGray } from './consts/max.gray.const';
import type { IGray } from './gray.interface';
import { grayToRgb } from './helpers/gray_to_rgb.helper';
import { grayToString } from './helpers/gray_to_string.helper';

export class Gray {
  private color: IGray = colorGray;
  readonly max: IGray = maxGray;

  get g(): number {
    return this.color.g;
  }

  set g(value: number) {
    this.color.g = clamp(value, 0, this.max.g);
  }

  get a(): number | undefined {
    return this.color.a;
  }

  set a(value: number | undefined) {
    this.color.a = alphaIsSet(value) ? clamp(Number(value), 0, 1) : undefined;
  }

  constructor(g: number, a?: number) {
    this.g = g;
    this.a = a;
  }

  toString(): string {
    return grayToString(this.color);
  }

  rgb(): RGB {
    const { r, g, b, a } = grayToRgb(this.color);
    return new RGB(r, g, b, a);
  }
}
