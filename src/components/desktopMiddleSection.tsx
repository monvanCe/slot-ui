import AdaptiveText from './ui/adaptiveText';

export default function DesktopMiddleSection() {
  return (
    <div className=" h-full w-full">
      <div className="w-full h-14">
        <AdaptiveText>
          <span className="text-white font-extrabold">
            <span className="text-green">WIN</span> $5.000.00
          </span>
        </AdaptiveText>
      </div>

      <div className="text-center w-full h-12">
        <AdaptiveText className="font-bold text-white">
          HOLD SPACE FOR TURBO SPIN
        </AdaptiveText>
      </div>
    </div>
  );
}
