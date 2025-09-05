import { REFERENCE_WIDTH, SCALE_MULTIPLIER } from '../const/staticVariables';

interface PixelPosition {
  bottomByPixel: number | null;
  leftByPixel: number | null;
}

export const calculatePixelPosition = (
  style: React.CSSProperties
): PixelPosition => {
  const windowWidth = window.innerWidth;
  const scale = windowWidth / REFERENCE_WIDTH;

  const bottomByPixel = style.bottom
    ? scale * ((style.bottom as number) || 0) * SCALE_MULTIPLIER
    : null;

  const leftByPixel = style.left
    ? scale * ((style.left as number) || 0) * SCALE_MULTIPLIER
    : null;

  return { bottomByPixel, leftByPixel };
};
