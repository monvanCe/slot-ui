import DynamicSvg from './dynamicSvg';

export default function SvgButton({
  svgFilePath,
  fillColor,
  onPress,
  label,
}: ISvgButton) {
  return (
    <div className="relative h-full cursor-pointer" onClick={onPress}>
      <DynamicSvg svgFilePath={svgFilePath} fillColor={fillColor} />
      {label && (
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <span className="text-white font-semibold leading-none text-center">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
