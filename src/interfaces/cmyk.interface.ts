import type { IColor } from './color.interface';

export interface ICMYK extends IColor {
  c: number;
  m: number;
  y: number;
  k: number;
}
