import AdaptiveText from './ui/adaptiveText';
import DynamicSvg from './ui/dynamicSvg';

export default function OutlinedButton({
  onPress,
  outlineColor = 'background',
  bgColor = 'green',
  color = 'white',
  label,
  iconSvgPath,
  iconSvgFillColor,
  iconSvgClassName,
  outlineSvgPath,
  outlineSvgFillColor,
  outlineSvgClassName,
  disabled = false,
}: IOutlinedButton) {
  return (
    <div
      className={`relative border-2 h-full w-full bg-${outlineColor} rounded-full p-[20%] ${
        onPress && !disabled ? 'cursor-pointer' : ''
      } ${disabled ? 'opacity-50' : ''}`}
      onClick={disabled ? undefined : onPress}
    >
      <div
        className={`h-full w-full bg-${bgColor} rounded-full flex items-center justify-center`}
      >
        {iconSvgPath && (
          <div className="h-full w-full p-[20%]">
            <DynamicSvg
              svgFilePath={iconSvgPath}
              fillColor={iconSvgFillColor}
              className={iconSvgClassName}
            />
          </div>
        )}
        {label && (
          <div className="h-full w-full p-2">
            <AdaptiveText className={`text-${color} font-semibold`}>
              {label}
            </AdaptiveText>
          </div>
        )}
      </div>
      {outlineSvgPath && (
        <div className="absolute p-[5%] inset-0 w-full h-full">
          <DynamicSvg
            svgFilePath={outlineSvgPath}
            fillColor={outlineSvgFillColor}
            className={outlineSvgClassName}
          />
        </div>
      )}
    </div>
  );
}
