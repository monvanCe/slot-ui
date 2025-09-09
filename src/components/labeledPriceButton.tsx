import DynamicSvg from './ui/dynamicSvg';
import LabelArea from './ui/labelArea';
import AdaptiveText from './ui/adaptiveText';

export default function LabeledPriceButton({
  onPress,
  label,
  labelColor,
  value = 0,
  rightIconSvgPath,
  disabled = false,
  rightIconBgColor,
  rightIconSvgFillColor,
}: ILabeledPriceButton) {
  return (
    <div
      className={`relative h-full w-full
         border-2 border-white pl-[10%] pr-[10%] py-[2%] rounded-full flex items-center ${
           onPress && !disabled ? 'cursor-pointer' : ''
         } ${disabled ? 'opacity-50' : ''}  `}
      onClick={disabled ? undefined : onPress}
    >
      <div className="absolute bottom-[100%] left-[15%] w-6/12">
        {label && <LabelArea title={label} bgColor={labelColor} />}
      </div>
      <div className="font-bold w-full h-full">
        <AdaptiveText className="text-white" justify="start">
          ${value.toLocaleString()}
        </AdaptiveText>
      </div>
      {rightIconSvgPath && (
        <div
          className={`absolute p-1.5 h-[75%] aspect-square -right-4 top-1/2 -translate-y-1/2 bg-${rightIconBgColor} rounded-full flex items-center justify-center`}
        >
          <DynamicSvg
            fillColor={rightIconSvgFillColor}
            svgFilePath={rightIconSvgPath}
          />
        </div>
      )}
    </div>
  );
}
