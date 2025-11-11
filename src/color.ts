export const color = (r: number, g: number, b: number, a = 1) => {
  const clamp = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);

  return {
    r: clamp(r, 0, 255),
    g: clamp(g, 0, 255),
    b: clamp(b, 0, 255),
    a: clamp(a, 0, 1),
  };
};
