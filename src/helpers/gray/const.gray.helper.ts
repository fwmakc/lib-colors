import type { IGray } from '../../interfaces/gray.interface';

import { stringGray } from './string.gray.helper';
import { toGray } from './to.gray.helper';

export const constGray = (
  r: number,
  g: number,
  b: number,
  a?: number,
): IGray => {
  const object = toGray(r, g, b, a);
  const string = stringGray(object);

  return { ...object, string };
};
