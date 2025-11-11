export function alphaIsSet(a?: number): boolean {
  return a !== undefined && a >= 0 && a < 1;
}
