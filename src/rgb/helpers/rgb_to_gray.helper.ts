import type { IGray } from '../../gray/gray.interface';
import type { IRGB } from '../rgb.interface';

export function rgbToGray(rgb: IRGB): IGray {
  const { r, g, b, a } = { ...rgb };

  const grayscale = Math.round(
    ((0.299 * r + 0.587 * g + 0.114 * b) * 100) / 255,
  );

  return {
    g: grayscale,
    a,
  };
}
