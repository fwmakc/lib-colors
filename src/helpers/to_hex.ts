import { alphaIsSet } from './alpha_is_set';

export function toHex(r: number, g: number, b: number, a?: number): string {
  const toHexComponent = (color: number): string =>
    Math.round(color).toString(16).padStart(2, '0');

  const rHex = toHexComponent(r);
  const gHex = toHexComponent(g);
  const bHex = toHexComponent(b);

  const aHex = alphaIsSet(a) ? toHexComponent((a || 1) * 256 - 1) : '';

  return `#${rHex}${gHex}${bHex}${aHex}`;
}
