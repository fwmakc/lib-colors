import type { IRGB } from '../../interfaces/rgb.interface';

import { stringRGB } from './string.rgb.helper';
import { toRGB } from './to.rgb.helper';

export const constRGB = (r: number, g: number, b: number, a?: number): IRGB => {
  const object = toRGB(r, g, b, a);
  const string = (): string => stringRGB(object);

  return { ...object, string };
};
