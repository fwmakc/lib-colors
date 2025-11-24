import { ICMYK } from './interfaces/cmyk.interface';
import { toCMYK } from './helpers/to_cmyk';
import { toHex } from './helpers/to_hex';
import { toHSL } from './helpers/to_hsl';
import { toRGB } from './helpers/to_rgb';

export class Color {
  r = 0;
  g = 0;
  b = 0;
  a?: number | undefined;

  constructor(r: number, g: number, b: number, a?: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  cmyk(): ICMYK {
    return toCMYK(this.r, this.g, this.b, this.a);
  }

  hex(): string {
    return toHex(this.r, this.g, this.b, this.a);
  }

  hsl(): string {
    return toHSL(this.r, this.g, this.b, this.a);
  }

  rgb(): string {
    return toRGB(this.r, this.g, this.b, this.a);
  }
}
