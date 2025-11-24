import type { IColor } from './color.interface';

export interface IHEX extends IColor<string> {
  r: string;
  g: string;
  b: string;
}
