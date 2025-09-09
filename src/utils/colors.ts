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

export const COLORS: { [key in TColors]: TSvgFillColor } = {
  background: getColorFromCSS('--color-background-rgb') as TSvgFillColor,

  blue: getColorFromCSS('--color-blue-rgb') as TSvgFillColor,

  green: getColorFromCSS('--color-green-rgb') as TSvgFillColor,

  orange: getColorFromCSS('--color-orange-rgb') as TSvgFillColor,

  red: getColorFromCSS('--color-red-rgb') as TSvgFillColor,

  white: getColorFromCSS('white') as TSvgFillColor,

  black: getColorFromCSS('black') as TSvgFillColor,
} as const;
