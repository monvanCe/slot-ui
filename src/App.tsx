import OutlinedButton from './components/outlinedButton';
import LabeledPriceButton from './components/labeledPriceButton';
import InfoButton from './components/infoButton';

import IconButton from './components/ui/iconButton';
import SvgButton from './components/ui/svgButton';
import DesktopMiddleSection from './components/desktopMiddleSection';
import AdaptiveText from './components/ui/adaptiveText';
import { useWindowScale } from './hooks/useWindowScale';
import { useAppSelector } from './store/store';
import { useEffect, useState } from 'react';
import { calculatePixelPosition } from './utils/calculatePixelPosition';
import ExampleModal from './components/exampleModal';

import {
  setComponentState,
  setComponentStateByVariant,
} from './utils/componentStateManager';

export default function App() {
  const scale = useWindowScale();
  const componentStyles = useAppSelector((state) => state.componentStyles);
  const componentStates = useAppSelector((state) => state.componentStates);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  useEffect(() => {
    // bu kısım piksel hesaplanması için örnek konmuştur. lazım olduğunda pixi tarafına iletilecek
    const curvedBarStyle = componentStyles.curvedBar;
    //eslint-disable-next-line
    const { bottomByPixel } = calculatePixelPosition(curvedBarStyle);

    // if (bottomByPixel !== null) {
    //   document
    //     .getElementById('pixi-container')
    //     ?.style.setProperty('bottom', `${bottomByPixel}px`);
    // }
  }, [componentStyles]);

  return (
    <>
      {/* Settings Modal */}
      <ExampleModal
        isOpen={isSettingsModalOpen}
        onClose={() => {
          setIsSettingsModalOpen(false);
          setComponentStateByVariant('settingsButton', 'default');
        }}
      />
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'bottom left',
          position: 'relative',
          width: 1864,
          marginTop: '100vh',
        }}
      >
        <img
          src="/svg/Bottom_Bar.svg"
          alt="bottom"
          style={componentStyles.curvedBar}
        />
        <div style={componentStyles.mobileBottom} />
        <div style={componentStyles.mobileBetButton}>
          <OutlinedButton {...componentStates.mobileBetButton} />
        </div>
        <div style={componentStyles.mobileAutoplayButton}>
          <OutlinedButton {...componentStates.mobileAutoplayButton} />
        </div>
        <div style={componentStyles.infoButton}>
          <InfoButton {...componentStates.infoButton} />
        </div>
        <div style={componentStyles.settingsButton}>
          <IconButton
            {...componentStates.settingsButton}
            onPress={() => {
              setIsSettingsModalOpen(true);
              setComponentStateByVariant('settingsButton', 'active');
            }}
          />
        </div>
        <div style={componentStyles.volumeButton}>
          <IconButton {...componentStates.volumeButton} />
        </div>
        <div style={componentStyles.creditButton}>
          <LabeledPriceButton {...componentStates.creditButton} value={10000} />
        </div>
        <div style={componentStyles.middleSection}>
          <DesktopMiddleSection />
        </div>
        <div style={componentStyles.betButton}>
          <LabeledPriceButton
            {...componentStates.betButton}
            value={10000}
            onPress={() => {}}
          />
        </div>
        <div style={componentStyles.autoplayButton}>
          <SvgButton {...componentStates.autoplayButton}>
            <AdaptiveText>
              <span className="text-white font-bold leading-none text-center text-xl">
                AUTO <br /> PLAY
              </span>
            </AdaptiveText>
          </SvgButton>
        </div>
        <div style={componentStyles.spinButton}>
          <OutlinedButton
            {...componentStates.spinButton}
            onPress={() => {
              if (componentStates.spinButton.label === 'SPIN') {
                setComponentState('spinButton', 'spinning');
                setComponentState('autoplayButton', 'spinning');
              } else {
                setComponentState('spinButton', 'default');
                setComponentState('autoplayButton', 'default');
              }
            }}
          />
        </div>
      </div>
    </>
  );
}
