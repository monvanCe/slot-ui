import AdaptiveText from './adaptiveText';

export default function LabelArea({ title, bgColor, textColor }: ILabelArea) {
  return (
    <div
      className={` pl-3 pr-2 w-full aspect-[25/5] -skew-x-[25deg] bg-${bgColor} rounded-tl-lg rounded-tr-lg`}
    >
      <div
        className={`h-full w-full skew-x-[25deg] font-bold leading-none ${
          textColor ? `text-${textColor}` : 'text-white'
        }`}
      >
        <AdaptiveText justify="start">{title}</AdaptiveText>
      </div>
    </div>
  );
}
