import type { IHEX } from '../../interfaces/hex.interface';

export function stringHex(hex: IHEX): string {
  const { r, g, b, a } = hex;

  return `#${r}${g}${b}${a}`;
}
