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
import { useEffect, useState } from 'react';
import { calculatePixelPosition } from './utils/calculatePixelPosition';
import Modal from './components/ui/modal';
import Slider from './components/ui/slider';
import Choice from './components/ui/choice';

export default function App() {
  const scale = useWindowScale();
  const uiConfig = useAppSelector((state) => state.uiConfig);
  const [isAutoplayModalOpen, setIsAutoplayModalOpen] = useState(false);
  const [autoplayCount, setAutoplayCount] = useState(100);
  const [selectedSpinSpeed, setSelectedSpinSpeed] = useState('skip-screens');

  const spinSpeedOptions = [
    { id: 'turbo-spin', label: 'TURBO SPIN' },
    { id: 'quick-spin', label: 'QUICK SPIN' },
    { id: 'skip-screens', label: 'SKIP SCREENS' },
  ];

  useEffect(() => {
    const curvedBarStyle = uiConfig.curvedBar;
    const { bottomByPixel } = calculatePixelPosition(curvedBarStyle);

    // if (bottomByPixel !== null) {
    //   document
    //     .getElementById('pixi-container')
    //     ?.style.setProperty('bottom', `${bottomByPixel}px`);
    // }
  }, [uiConfig]);

  return (
    <>
      {/* burda */}
      {/* Autoplay Modal */}
      <Modal
        isOpen={isAutoplayModalOpen}
        onClose={() => setIsAutoplayModalOpen(false)}
        title="AUTOPLAY SETTINGS"
      >
        <div className="space-y-6">
          {/* Spin Speed Options */}
          <div className="space-y-3">
            <Choice
              options={spinSpeedOptions}
              selectedId={selectedSpinSpeed}
              onChange={setSelectedSpinSpeed}
            />
          </div>

          {/* Number of Autospins */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-lg">
              NUMBER OF AUTOSPINS
            </h3>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <Slider
                  value={autoplayCount}
                  min={1}
                  max={1000}
                  onChange={setAutoplayCount}
                />
              </div>
              <div className="text-white font-bold text-2xl min-w-[60px] text-center">
                {autoplayCount}
              </div>
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={() => {
              console.log(`Starting autoplay with ${autoplayCount} spins`);
              setIsAutoplayModalOpen(false);
            }}
            className="w-full py-3 px-6 rounded-lg font-bold text-lg transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: COLORS.green }}
          >
            START AUTOPLAY ({autoplayCount})
          </button>
        </div>
      </Modal>
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
          style={uiConfig.curvedBar}
        />
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
            onPress={() => setIsAutoplayModalOpen(true)}
          />
        </div>
      </div>
    </>
  );
}
