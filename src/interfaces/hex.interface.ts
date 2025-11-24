import type { IColor } from './color.interface';

export interface IHex extends IColor<string> {
  r: string;
  g: string;
  b: string;
}
