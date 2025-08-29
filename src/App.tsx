import OutlinedButton from './components/ui/outlinedButton';
import LabeledPriceButton from './components/labeledPriceButton';
import InfoButton from './components/infoButton';

import IconButton from './components/ui/iconButton';
import { COLORS } from './utils/colors';
import SvgButton from './components/ui/svgButton';
import DesktopMiddleSection from './components/desktopMiddleSection';

export default function App() {
  return (
    <div className="bg-black relative h-screen overflow-y-hidden">
      <div className="absolute bottom-0 flex h-14 w-full border-t-2 bg-background justify-between items-end py-1 pl-12 pr-8">
        <div className="h-20 w-20 flex-shrink-0">
          <InfoButton fillColor={COLORS.blue} />
        </div>
        <div className="h-full aspect-square">
          <IconButton icon="material-symbols:settings-rounded" />
        </div>
        <div className="h-full aspect-square">
          <IconButton icon="material-symbols:volume-up-rounded" />
        </div>
        <div className="h-full w-56">
          <LabeledPriceButton
            label="CREDIT"
            labelColor="orange"
            value={10000}
          />
        </div>
        <div className="h-14 mb-12 w-[650px]">
          <DesktopMiddleSection />
        </div>
        <div className="h-full w-56">
          <LabeledPriceButton
            label="BET"
            labelColor="green"
            value={10000}
            rightIconSvgPath="svg/Bet_Icon.svg"
          />
        </div>
        <div className="flex flex-row h-full items-end">
          <div className=" h-full flex-shrink-0">
            <SvgButton
              svgFilePath="svg/Autoplay_Button_Stroke.svg"
              fillColor={COLORS.background}
              label="AUTO PLAY"
            />
          </div>
          <div className="h-40 w-40 flex-shrink-0">
            <OutlinedButton
              outlineSvgPath="svg/Spin_Button_Icon.svg"
              label="SPIN"
              fontSize={26}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
