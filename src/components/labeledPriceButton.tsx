import DynamicSvg from './ui/dynamicSvg';
import { COLORS } from '../utils/colors';
import LabelArea from './ui/labelArea';
import AdaptiveText from './ui/adaptiveText';

export default function LabeledPriceButton({
  onPress,
  label,
  labelColor,
  value = 0,
  rightIconSvgPath,
}: ILabeledPriceButton) {
  return (
    <div
      className={`relative h-full w-full
         border-2 border-white pl-[10%] pr-[10%] rounded-full flex items-center ${
           onPress ? 'cursor-pointer' : ''
         }  `}
      onClick={onPress}
    >
      <div className="absolute bottom-[100%] left-[15%]">
        {label && <LabelArea title={label} bgColor={labelColor} />}
      </div>
      <div className="font-semibold w-full h-8">
        <AdaptiveText className="text-white" justify="start">
          ${value.toLocaleString()}
        </AdaptiveText>
      </div>
      {rightIconSvgPath && (
        <div className="absolute p-1 h-[60%] aspect-square -right-2 top-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center">
          <DynamicSvg
            fillColor={COLORS.background}
            svgFilePath={rightIconSvgPath}
          />
        </div>
      )}
    </div>
  );
}
