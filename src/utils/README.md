# Colors Utility

Bu utility, CSS'deki custom properties'den renk değerlerini JavaScript/TypeScript'te kullanabilmenizi sağlar.

## Kullanım

### 1. Temel Renkler

```typescript
import { COLORS } from '../utils/colors';

// CSS'deki background rengini kullan
const backgroundColor = COLORS.background; // #30343c
const textColor = COLORS.text; // #ffffff
const blueColor = COLORS.blue; // #48acec
```

### 2. Kısa Yol Fonksiyonları

```typescript
import { FILL_COLORS } from '../utils/colors';

// Hazır kısayollar
const bgColor = FILL_COLORS.background(); // #30343c
const primaryColor = FILL_COLORS.primary(); // #48acec
```

### 3. Component'ta Kullanım

```typescript
import DynamicSvgIcon from './ui/dynamicSvgIcon';
import { COLORS } from '../utils/colors';

export default function MyComponent() {
  return (
    <DynamicSvgIcon
      fillColor={COLORS.background}
      svgFilePath="svg/My_Icon.svg"
    />
  );
}
```

### 4. Özel Renk İçin

```typescript
import { getColorFromCSS } from '../utils/colors';

// CSS'deki herhangi bir custom property'yi al
const myCustomColor = getColorFromCSS('--my-custom-color-rgb');
```

## Mevcut Renkler

- `COLORS.background` - Arka plan rengi (#30343c)
- `COLORS.border` - Kenarlık rengi (#ffffff)
- `COLORS.text` - Metin rengi (#ffffff)
- `COLORS.blue` - Mavi renk (#48acec)
- `COLORS.green` - Yeşil renk (#59b156)
- `COLORS.orange` - Turuncu renk (#ed9542)

## Not

Renkler otomatik olarak CSS'deki custom properties'den okunur ve hex formata çevrilir.
