import type { IHex } from '../../interfaces/hex.interface';

export function stringHex(hex: IHex): string {
  const { r, g, b, a } = hex;

  return `#${r}${g}${b}${a}`;
}
