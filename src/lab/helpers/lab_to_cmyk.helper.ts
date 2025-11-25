import type { ICMYK } from '../../cmyk/cmyk.interface';
import type { ILAB, IXYZ } from '../lab.interface';

import { labToXyz } from './lab_to_xyz.helper';

export function labToCmyk(lab: ILAB): ICMYK {
  const xyz = labToXyz(lab);
  return xyzToCmyk(xyz);
}

function xyzToCmyk(xyz: IXYZ): ICMYK {
  const { x, y, z, alpha } = { ...xyz };

  // Нормализуем XYZ
  const xNorm = Math.min(1, x / 95.047);
  const yNorm = Math.min(1, y / 100.0);
  const zNorm = Math.min(1, z / 108.883);

  // Преобразуем в CMY (дополнительные цвета к RGB)
  const c = 1 - xNorm;
  const m = 1 - yNorm;
  const yVal = 1 - zNorm;

  // Вычисляем черную составляющую (GCR - Gray Component Replacement)
  const k = Math.min(c, m, yVal);

  // Компенсируем цветные составляющие
  const cFinal = (c - k) / (1 - k) || 0;
  const mFinal = (m - k) / (1 - k) || 0;
  const yFinal = (yVal - k) / (1 - k) || 0;

  return {
    c: Math.round(Math.max(0, Math.min(1, cFinal)) * 100),
    m: Math.round(Math.max(0, Math.min(1, mFinal)) * 100),
    y: Math.round(Math.max(0, Math.min(1, yFinal)) * 100),
    k: Math.round(Math.max(0, Math.min(1, k)) * 100),
    a: alpha,
  };
}
