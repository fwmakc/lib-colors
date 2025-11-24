import { constCMYK } from './helpers/cmyk/const.cmyk.helper';
import { constHex } from './helpers/hex/const.hex.helper';
import { constHSL } from './helpers/hsl/const.hsl.helper';
import { constRGB } from './helpers/rgb/const.rgb.helper';
import type { ICMYK } from './interfaces/cmyk.interface';
import type { IHEX } from './interfaces/hex.interface';
import type { IHSL } from './interfaces/hsl.interface';
import type { IRGB } from './interfaces/rgb.interface';

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
    return constCMYK(this.r, this.g, this.b, this.a);
  }

  hex(): IHEX {
    return constHex(this.r, this.g, this.b, this.a);
  }

  hsl(): IHSL {
    return constHSL(this.r, this.g, this.b, this.a);
  }

  rgb(): IRGB {
    return constRGB(this.r, this.g, this.b, this.a);
  }
}
