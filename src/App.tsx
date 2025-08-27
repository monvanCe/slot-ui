import OutlinedButton from './components/ui/outlinedButton';
import LabeledPriceButton from './components/labeledPriceButton';
import InfoButton from './components/infoButton';

import IconButton from './components/ui/iconButton';
import { COLORS } from './utils/colors';
import SvgButton from './components/ui/svgButton';
import DesktopMiddleSection from './components/desktopMiddleSection';

export default function App() {
  return (
    <div className="bg-black relative h-screen">
      <div className="absolute bottom-0 flex h-12 w-full border-t-2 bg-background justify-between items-end py-1 px-4">
        <div className="h-14 w-14">
          <InfoButton onPress={() => {}} fillColor={COLORS.blue} />
        </div>
        <div className="h-full aspect-square">
          <IconButton icon="material-symbols:settings-rounded" />
        </div>
        <div className="h-full aspect-square">
          <IconButton icon="material-symbols:volume-up-rounded" />
        </div>
        <div className="h-full aspect-[4]">
          <LabeledPriceButton
            label="CREDIT"
            labelColor="orange"
            value={10000}
          />
        </div>
        <div className="h-12 mb-[42px] w-[50%]">
          <DesktopMiddleSection />
        </div>
        <div className="h-full aspect-[4]">
          <LabeledPriceButton
            label="BET"
            labelColor="green"
            value={10000}
            rightIconSvgPath="svg/Bet_Icon.svg"
          />
        </div>
        <SvgButton
          svgFilePath="svg/Autoplay_Button_Stroke.svg"
          fillColor={COLORS.background}
          onPress={() => {}}
          label="AUTO PLAY"
        />
        <div className="h-32 w-32">
          <OutlinedButton
            outlineSvgPath="svg/Spin_Button_Icon.svg"
            label="SPIN"
          />
        </div>
      </div>
    </div>
  );
}
