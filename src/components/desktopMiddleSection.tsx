import { COLORS } from '../utils/colors';
import BorderedCurvedCorner from './ui/borderedCurvedCorner';

export default function DesktopMiddleSection() {
  return (
    <div className="flex flex-row items-end h-full w-full">
      <div className="-mr-1">
        <BorderedCurvedCorner
          borderWidth={2}
          borderColor="white"
          fillColor={COLORS.background}
          corner="bottomright"
          width={30}
          height={30}
        />
      </div>

      <div className="h-full w-full bg-background rounded-t-3xl border-2 border-b-0 "></div>
    </div>
  );
}
