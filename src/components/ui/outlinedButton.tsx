import AdaptiveText from './adaptiveText';

export default function OutlinedButton({
  onPress,
  outlineColor = 'background',
  bgColor = 'green',
  color = 'white',
  iconSvgPath,
  outlineSvgPath,
  label,
}: IOutlinedButton) {
  return (
    <div
      className={`relative border-2 h-full w-full bg-${outlineColor} rounded-full p-[20%] ${
        onPress ? 'cursor-pointer' : ''
      }`}
      onClick={onPress}
    >
      <div
        className={`h-full w-full bg-${bgColor} rounded-full flex items-center justify-center`}
      >
        {iconSvgPath && (
          <div className="h-full w-full p-[20%]">
            <img
              src={iconSvgPath}
              alt="change-bet"
              className={`text-${color} w-full h-full`}
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
          <img src={outlineSvgPath} alt="outline" className="w-full h-full" />
        </div>
      )}
    </div>
  );
}
