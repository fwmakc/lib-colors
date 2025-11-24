import type { IHEX } from '../../interfaces/hex.interface';

import { stringHex } from './string.hex.helper';
import { toHex } from './to.hex.helper';

export const constHex = (r: number, g: number, b: number, a?: number): IHEX => {
  const object = toHex(r, g, b, a);
  const string = (): string => stringHex(object);

  return { ...object, string };
};
