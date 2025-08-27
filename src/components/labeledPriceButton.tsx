import DynamicSvg from './ui/dynamicSvg';
import { COLORS } from '../utils/colors';
import LabelArea from './ui/labelArea';

export default function LabeledPriceButton({
  onPress,
  label,
  labelColor,
  value = 0,
  rightIconSvgPath,
}: ILabeledPriceButton) {
  return (
    <div
      className={`relative h-10 w-40 border-2 border-white pl-4 pb-1 rounded-full flex items-center gap-1 ${
        onPress ? 'cursor-pointer' : ''
      } ${label ? 'mt-5' : ''} ${rightIconSvgPath ? 'mr-2' : ''}`}
      onClick={onPress}
    >
      <div className="absolute bottom-9 left-5">
        {label && <LabelArea title={label} bgColor={labelColor} />}
      </div>
      <span className="text-white font-semibold text-2xl">
        ${value.toLocaleString()}
      </span>
      {rightIconSvgPath && (
        <div className="absolute p-1 h-6 w-6 -right-2 top-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center">
          <DynamicSvg
            fillColor={COLORS.background}
            svgFilePath={rightIconSvgPath}
          />
        </div>
      )}
    </div>
  );
}
