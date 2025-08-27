import CurvedCorner from './curvedCorner';

export default function BorderedCurvedCorner({
  borderWidth,
  borderColor,
  fillColor,
  corner,
  width,
  height,
}: {
  borderWidth: number;
  borderColor: string;
  fillColor: string;
  corner: 'bottomright' | 'bottomleft' | 'topleft' | 'topright';
  width: number;
  height: number;
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <CurvedCorner
          fillColor={borderColor}
          corner={corner}
          width={width + borderWidth}
          height={height + borderWidth}
        />
      </div>
      <CurvedCorner
        fillColor="red"
        corner={corner}
        width={width}
        height={height}
      />
    </div>
  );
}
