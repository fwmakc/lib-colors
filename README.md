Простая библиотека по определению пустых значений для различных типов данных.

Библиотка javascript/typescript (ES6) для node.js.

# Установка

```
npm install lib-colors
```

или

```
yarn add lib-colors
```

# Начало работы

Можно импортировать методы как с отдельные функции:

```
import { rgb, cmyk } from 'lib-colors';

const color = rgb(0, 127, 255, 1).hex();

const colorFromHex = hex('#000000');
const colorFromHsl = hsl(120, 100, 50);
const colorFromRgb = rgb(0, 0, 0);

const hexColor = color.hex();
const hslColor = color.hsl();
const rgbColor = color.rgb();

const cmykFromRgb = rgb(127, 127, 255).cmyk();
const rgbFromCmyk = cmyk(0, 100, 100, 0).rgb();
```

# Список методов

Библиотека находится в разработке.

# Поддержка

Больше интересных библиотек в репозитории.

Если библиотека понравилась, и вы хотите меня поддержать, не пожалейте поставить звездочку.

А сейчас просто обнимите своих родных и близких, скажите им, как вы их любите.

# Лицензия

Лицензия MIT, 2025
