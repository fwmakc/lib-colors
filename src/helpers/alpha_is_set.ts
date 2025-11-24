export function alphaIsSet(a?: number): boolean {
  a = Number(a);
  return a >= 0 && a < 1;
}
