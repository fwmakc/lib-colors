import type { IHSL } from '../../interfaces/hsl.interface';

import { stringHSL } from './string.hsl.helper';
import { toHSL } from './to.hsl.helper';

export const constHSL = (r: number, g: number, b: number, a?: number): IHSL => {
  const object = toHSL(r, g, b, a);
  const string = stringHSL(object);

  return { ...object, string };
};
