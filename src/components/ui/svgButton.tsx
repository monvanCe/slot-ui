import DynamicSvg from './dynamicSvg';

export default function SvgButton({
  svgFilePath,
  fillColor,
  onPress,
  children,
  disabled = false,
}: ISvgButton) {
  return (
    <div
      className={`relative h-full ${onPress ? 'cursor-pointer' : ''} ${
        disabled ? 'opacity-50' : ''
      }`}
      onClick={disabled ? undefined : onPress}
    >
      <DynamicSvg svgFilePath={svgFilePath} fillColor={fillColor} />
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
