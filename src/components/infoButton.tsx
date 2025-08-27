import DynamicSvg from './ui/dynamicSvg';

export default function InfoButton({ onPress, fillColor }: IInfoButton) {
  return (
    <div className="relative h-full w-full cursor-pointer" onClick={onPress}>
      <DynamicSvg svgFilePath="svg/Info_Button.svg" fillColor={fillColor} />
      <div className="absolute inset-0 flex items-center justify-center p-[20%]">
        <DynamicSvg svgFilePath="svg/Info_Icon.svg" fillColor="white" />
      </div>
    </div>
  );
}
