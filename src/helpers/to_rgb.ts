import { alphaIsSet } from './alpha_is_set';

export function toRGB(r: number, g: number, b: number, a?: number): string {
  if (alphaIsSet(a)) {
    return `rgba(${r},${g},${b},${a})`;
  }
  return `rgb(${r},${g},${b})`;
}
