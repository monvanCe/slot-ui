import DynamicSvg from './dynamicSvg';

export default function SvgButton({
  svgFilePath,
  fillColor,
  onPress,
  children,
}: ISvgButton) {
  return (
    <div
      className={`relative h-full ${!!onPress ? 'cursor-pointer' : ''}`}
      onClick={onPress}
    >
      <DynamicSvg svgFilePath={svgFilePath} fillColor={fillColor} />
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
