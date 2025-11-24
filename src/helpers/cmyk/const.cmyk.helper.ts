import type { ICMYK } from '../../interfaces/cmyk.interface';

import { stringCMYK } from './string.cmyk.helper';
import { toCMYK } from './to.cmyk.helper';

export const constCMYK = (
  r: number,
  g: number,
  b: number,
  a?: number,
): ICMYK => {
  const object = toCMYK(r, g, b, a);
  const string = stringCMYK(object);

  return { ...object, string };
};
