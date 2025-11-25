import { xyzToLab } from '../../lab/helpers/xyz_to_lab.helper';
import type { ILAB, IXYZ } from '../../lab/lab.interface';
import type { ICMYK } from '../cmyk.interface';

export function cmykToLab(cmyk: ICMYK): ILAB {
  const xyz = cmykToXyz(cmyk);
  return xyzToLab(xyz);
}

// Базовые отражательные характеристики CMYK красок (упрощенная модель)
const baseReflectance = {
  c: { x: 0.1, y: 0.2, z: 0.8 }, // Cyan - хорошо отражает синий/зеленый
  m: { x: 0.6, y: 0.2, z: 0.4 }, // Magenta - хорошо отражает красный/синий
  y: { x: 0.8, y: 0.9, z: 0.1 }, // Yellow - хорошо отражает красный/зеленый
  k: { x: 0.05, y: 0.05, z: 0.05 }, // Black - плохо отражает все
};

function cmykToXyz(cmyk: ICMYK): IXYZ {
  let { c, m, y, k, a } = cmyk;

  c /= 100;
  m /= 100;
  y /= 100;
  k /= 100;

  // Моделируем наложение красок (упрощенная модель Кубелки-Мунка)
  const reflectance = calculateReflectance(c, m, y, k);

  // Преобразуем отражательную способность в XYZ
  // Используем стандартный источник освещения D65
  const illuminantD65 = { x: 95.047, y: 100.0, z: 108.883 };

  return {
    x: reflectance.x * illuminantD65.x,
    y: reflectance.y * illuminantD65.y,
    z: reflectance.z * illuminantD65.z,
    alpha: a,
  };
}

function calculateReflectance(
  c: number,
  m: number,
  y: number,
  k: number,
): IXYZ {
  // Начальная отражательная способность (белая бумага)
  let r = { x: 0.95, y: 0.95, z: 0.95 };

  // Применяем черную краску (самый сильный эффект)
  const blackEffect = 1 - k * 0.9; // Черная краска сильно поглощает свет
  r.x *= blackEffect;
  r.y *= blackEffect;
  r.z *= blackEffect;

  // Цветные краски - используем их спектральные характеристики
  // Каждая краска уменьшает отражение согласно своим характеристикам

  // Cyan - сильно поглощает красный, слабо - зеленый/синий
  const cEffect = {
    x: 1 - c * (1 - baseReflectance.c.x),
    y: 1 - c * (1 - baseReflectance.c.y),
    z: 1 - c * (1 - baseReflectance.c.z),
  };
  r.x *= cEffect.x;
  r.y *= cEffect.y;
  r.z *= cEffect.z;

  // Magenta - сильно поглощает зеленый
  const mEffect = {
    x: 1 - m * (1 - baseReflectance.m.x),
    y: 1 - m * (1 - baseReflectance.m.y),
    z: 1 - m * (1 - baseReflectance.m.z),
  };
  r.x *= mEffect.x;
  r.y *= mEffect.y;
  r.z *= mEffect.z;

  // Yellow - сильно поглощает синий
  const yEffect = {
    x: 1 - y * (1 - baseReflectance.y.x),
    y: 1 - y * (1 - baseReflectance.y.y),
    z: 1 - y * (1 - baseReflectance.y.z),
  };
  r.x *= yEffect.x;
  r.y *= yEffect.y;
  r.z *= yEffect.z;

  // Учитываем эффект наложения (dot gain)
  const totalInk = c + m + y + k;
  const dotGain = Math.min(0.3, totalInk * 0.1);
  const gainFactor = 1 - dotGain;

  r.x *= gainFactor;
  r.y *= gainFactor;
  r.z *= gainFactor;

  // Обеспечиваем физически корректные значения
  return {
    x: Math.max(0, Math.min(1, r.x)),
    y: Math.max(0, Math.min(1, r.y)),
    z: Math.max(0, Math.min(1, r.z)),
  };
}
