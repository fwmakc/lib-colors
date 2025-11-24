import type { IColor } from './color.interface';

export interface IHSL extends IColor {
  h: number;
  s: number;
  l: number;
}
