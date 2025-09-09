import DynamicSvg from './ui/dynamicSvg';

export default function InfoButton({
  onPress,
  fillColor,
  disabled = false,
}: IInfoButton) {
  return (
    <div
      className={`relative h-full w-full ${
        onPress && !disabled ? 'cursor-pointer' : ''
      } ${disabled ? 'opacity-50' : ''}`}
      onClick={disabled ? undefined : onPress}
    >
      <DynamicSvg svgFilePath="svg/Info_Button.svg" fillColor={fillColor} />
      <div className="absolute inset-0 flex items-center justify-center p-[20%]">
        <DynamicSvg svgFilePath="svg/Info_Icon.svg" fillColor="#fff" />
      </div>
    </div>
  );
}
