import OutlinedButton from './components/ui/outlinedButton';
import LabeledPriceButton from './components/labeledPriceButton';
import InfoButton from './components/infoButton';

import IconButton from './components/ui/iconButton';

export default function App() {
  return (
    <div className="bg-red-500">
      <div className="flex gap-2 p-1">
        <div className="w-10 h-10">
          <InfoButton />
        </div>
        <div className="w-10 h-10">
          <IconButton icon="material-symbols:settings-rounded" />
        </div>
        <div className="w-10 h-10">
          <IconButton icon="material-symbols:volume-up-rounded" />
        </div>
        <div className="h-10 mt-5">
          <LabeledPriceButton />
        </div>
        <div className="h-20 w-20">
          <OutlinedButton iconSvgPath="svg/Bet_Icon.svg" />
        </div>
        <div className="h-20 w-20">
          <OutlinedButton
            outlineSvgPath="svg/Spin_Button_Icon.svg"
            label="SPIN"
          />
        </div>
      </div>
    </div>
  );
}
