export function getColorFromCSS(propertyName: string): string {
  const rgbValue = getComputedStyle(document.documentElement)
    .getPropertyValue(propertyName)
    .trim();

  if (!rgbValue) {
    console.warn(`CSS property ${propertyName} bulunamadı`);
    return '#000000';
  }

  const rgbArray = rgbValue.split(' ').map(Number);

  if (rgbArray.length !== 3) {
    console.warn(`Geçersiz RGB formatı: ${rgbValue}`);
    return '#000000';
  }

  const [r, g, b] = rgbArray;
  return `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

export const COLORS: { [key in TColors]: TFillColor } = {
  background: getColorFromCSS('--color-background-rgb') as TFillColor,

  blue: getColorFromCSS('--color-blue-rgb') as TFillColor,

  green: getColorFromCSS('--color-green-rgb') as TFillColor,

  orange: getColorFromCSS('--color-orange-rgb') as TFillColor,

  red: getColorFromCSS('--color-red-rgb') as TFillColor,

  white: getColorFromCSS('white') as TFillColor,

  black: getColorFromCSS('black') as TFillColor,
} as const;
