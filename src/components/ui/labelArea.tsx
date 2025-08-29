import AdaptiveText from './adaptiveText';

export default function LabelArea({ title, bgColor, textColor }: ILabelArea) {
  return (
    <div
      className={` pl-4 h-5 w-24 -skew-x-[25deg] bg-${bgColor} rounded-tl-lg rounded-tr-lg`}
    >
      <div
        className={`h-full w-full skew-x-[25deg] font-semibold leading-none ${
          textColor ? `text-${textColor}` : 'text-white'
        }`}
      >
        <AdaptiveText>{title}</AdaptiveText>
      </div>
    </div>
  );
}
