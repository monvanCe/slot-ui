import OutlinedButton from './components/ui/outlinedButton';
import LabeledPriceButton from './components/labeledPriceButton';
import InfoButton from './components/infoButton';

import IconButton from './components/ui/iconButton';
import { COLORS } from './utils/colors';
import SvgButton from './components/ui/svgButton';
import DesktopMiddleSection from './components/desktopMiddleSection';
import AdaptiveText from './components/ui/adaptiveText';
import { useWindowScale } from './hooks/useWindowScale';
import { useAppSelector } from './store/store';

export default function App() {
  const scale = useWindowScale();
  const uiConfig = useAppSelector((state) => state.uiConfig);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'bottom left',
        position: 'relative',
        width: 1864,
        marginTop: '100vh',
      }}
    >
      <img src="/svg/Bottom_Bar.svg" alt="bottom" style={uiConfig.curvedBar} />

      <div style={uiConfig.mobileBottom} />
      <div style={uiConfig.mobileBetButton}>
        <OutlinedButton
          iconSvgPath="svg/Bet_Icon.svg"
          iconSvgFillColor="white"
        />
      </div>

      <div style={uiConfig.mobileAutoplayButton}>
        <OutlinedButton
          iconSvgPath="svg/Popup_Arrow.svg"
          iconSvgFillColor={COLORS.background}
          iconSvgClassName="cls-2"
          bgColor="orange"
        />
      </div>

      <div style={uiConfig.infoButton}>
        <InfoButton fillColor={COLORS.blue} />
      </div>
      <div style={uiConfig.settingsButton}>
        <IconButton icon="material-symbols:settings-rounded" />
      </div>
      <div style={uiConfig.volumeButton}>
        <IconButton icon="material-symbols:volume-up-rounded" />
      </div>
      <div style={uiConfig.creditButton}>
        <LabeledPriceButton
          label={'CREDIT'}
          labelColor="orange"
          value={10000}
        />
      </div>
      <div style={uiConfig.middleSection}>
        <DesktopMiddleSection />
      </div>
      <div style={uiConfig.betButton}>
        <LabeledPriceButton label="BET" labelColor="green" value={10000} />
      </div>
      <div style={uiConfig.autoplayButton}>
        <SvgButton
          svgFilePath="svg/Autoplay_Button_Stroke.svg"
          fillColor="transparent"
        >
          <AdaptiveText>
            <span className="text-white font-bold leading-none text-center text-xl">
              AUTO <br /> PLAY
            </span>
          </AdaptiveText>
        </SvgButton>
      </div>
      <div style={uiConfig.spinButton}>
        <OutlinedButton
          outlineSvgPath="svg/Spin_Button_Icon.svg"
          outlineSvgFillColor="white"
          label="SPIN"
        />
      </div>
    </div>
  );
}
