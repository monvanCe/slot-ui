export default function LabelArea({
  title,
  bgColor,
  textColor,
}: {
  title: string;
  bgColor: string;
  textColor?: string;
}) {
  return (
    <div
      className={` pl-4 py-0.5 w-24 -skew-x-[25deg] bg-${bgColor} rounded-tl-lg rounded-tr-lg`}
    >
      <div
        className={`skew-x-[25deg] font-semibold leading-none ${
          textColor ? `text-${textColor}` : 'text-white'
        }`}
      >
        {title}
      </div>
    </div>
  );
}
