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

export const COLORS = {
  get background() {
    return getColorFromCSS('--color-background-rgb');
  },

  get border() {
    return getColorFromCSS('--color-border-rgb');
  },

  get text() {
    return getColorFromCSS('--color-text-rgb');
  },

  get blue() {
    return getColorFromCSS('--color-blue-rgb');
  },

  get green() {
    return getColorFromCSS('--color-green-rgb');
  },

  get orange() {
    return getColorFromCSS('--color-orange-rgb');
  },
} as const;
