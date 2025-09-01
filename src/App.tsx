import OutlinedButton from './components/ui/outlinedButton';
import LabeledPriceButton from './components/labeledPriceButton';
import InfoButton from './components/infoButton';

import IconButton from './components/ui/iconButton';
import { COLORS } from './utils/colors';
import SvgButton from './components/ui/svgButton';
import DesktopMiddleSection from './components/desktopMiddleSection';
import AdaptiveText from './components/ui/adaptiveText';
import { useWindowScale } from './hooks/useWindowScale';

export default function App() {
  const scale = useWindowScale();

  const transform = `translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(${scale}) scaleY(${scale})`;

  return (
    <div className="bg-black relative h-screen overflow-hidden">
      <div
        className="absolute bottom-0 w-[1863px] h-26"
        style={{
          transform,
          transformOrigin: 'bottom left',
        }}
      >
        <img src="/svg/Bottom_Bar.svg" alt="bottom" className="w-full h-full" />
      </div>
      <div
        id="ui-container"
        className={`absolute bottom-0 flex h-14 w-[1863px] items-end py-1.5 pl-12 pr-8`}
        style={{
          transform,
          transformOrigin: 'bottom left',
        }}
      >
        <div className="w-20 aspect-square flex-shrink-0 mr-8">
          <InfoButton fillColor={COLORS.blue} />
        </div>
        <div className="w-12 aspect-square mr-8 flex-shrink-0">
          <IconButton icon="material-symbols:settings-rounded" />
        </div>
        <div className="w-12 aspect-square mr-16 flex-shrink-0">
          <IconButton icon="material-symbols:volume-up-rounded" />
        </div>
        <div className="h-12 w-56 mr-10 flex-shrink-0">
          <LabeledPriceButton
            label="CREDIT"
            labelColor="orange"
            value={10000}
          />
        </div>
        <div className="h-14 mb-12 w-[650px] mr-6 flex-shrink-0">
          <DesktopMiddleSection />
        </div>
        <div className="h-12 w-56 mr-10 flex-shrink-0">
          <LabeledPriceButton
            label="BET"
            labelColor="green"
            value={100000000000}
            rightIconSvgPath="svg/Bet_Icon.svg"
          />
        </div>
        <div className="flex flex-row h-full items-end flex-shrink-0">
          <div className=" h-12 flex-shrink-0">
            <SvgButton
              svgFilePath="svg/Autoplay_Button_Stroke.svg"
              fillColor={COLORS.background}
            >
              <AdaptiveText>
                <span className="text-white font-bold leading-none text-center text-xl">
                  AUTO <br /> PLAY
                </span>
              </AdaptiveText>
            </SvgButton>
          </div>
          <div className="h-40 w-40 flex-shrink-0">
            <OutlinedButton
              outlineSvgPath="svg/Spin_Button_Icon.svg"
              label="SPIN"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
