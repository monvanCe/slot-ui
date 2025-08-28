import { COLORS } from '../utils/colors';
import DynamicSvg from './ui/dynamicSvg';

export default function DesktopMiddleSection() {
  return (
    <div className="relative h-full w-full">
      <div className="h-[55.35px] w-[90.33px] absolute -top-px">
        <DynamicSvg
          svgFilePath="svg/Bottom_Bar_Edge.svg"
          fillColor={COLORS.background}
        />
      </div>

      <div className="h-[55.35px] -top-px absolute left-[88px] right-[88px] bg-background border-t-2 2xl:pt-4 xl:pt-8 pt-5 z-10">
        <div className="flex flex-col text-white  items-center justify-center font-semibold leading-none tracking-tighter 2xl:text-[38px] xl:text-[26px] text-[24px] ">
          <span className="text-center">
            <span className="text-green">WIN</span> $5.000.00
          </span>
          <span className="text-center">HOLD SPACE FOR TURBO SPIN</span>
        </div>
      </div>

      <div
        className="h-[55.35px] w-[90.33px] absolute -top-px right-0"
        style={{ transform: 'scaleX(-1)' }}
      >
        <DynamicSvg
          svgFilePath="svg/Bottom_Bar_Edge.svg"
          fillColor={COLORS.background}
        />
      </div>
    </div>
  );
}
