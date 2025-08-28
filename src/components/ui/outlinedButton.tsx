export default function OutlinedButton({
  onPress,
  outlineColor = 'background',
  bgColor = 'green',
  color = 'white',
  iconSvgPath,
  outlineSvgPath,
  label,
  fontSize,
}: IOutlinedButton) {
  return (
    <div
      className={`relative border-2 h-full w-full bg-${outlineColor} rounded-full p-[20%] ${
        onPress ? 'cursor-pointer' : ''
      }`}
      onClick={onPress}
    >
      <div
        className={`h-full w-full bg-${bgColor} rounded-full p-[20%] flex items-center justify-center`}
      >
        {iconSvgPath && (
          <img
            src={iconSvgPath}
            alt="change-bet"
            className={`text-${color} w-full h-full`}
          />
        )}
        {label && (
          <span
            className={`text-${color} font-semibold`}
            style={{ fontSize: `${fontSize}px` }}
          >
            {label}
          </span>
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
