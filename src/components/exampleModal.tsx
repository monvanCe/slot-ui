import { useState } from 'react';
import Modal from './ui/modal';
import Slider from './ui/slider';
import Choice from './ui/choice';
import Counter from './ui/counter';
import Switch from './ui/switch';
import { COLORS } from '../utils/colors';

interface IExampleModal {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExampleModal({ isOpen, onClose }: IExampleModal) {
  const [autoplayCount, setAutoplayCount] = useState(100);
  const [selectedSpinSpeed, setSelectedSpinSpeed] = useState('skip-screens');
  const [counterValue, setCounterValue] = useState(5);
  const [betValue, setBetValue] = useState(10000);

  // Switch states
  const [quickSpin, setQuickSpin] = useState(false);
  const [batterySaver, setBatterySaver] = useState(false);
  const [ambientMusic, setAmbientMusic] = useState(false);
  const [gameSounds, setGameSounds] = useState(false);
  const [introScreen, setIntroScreen] = useState(true);

  const spinSpeedOptions = [
    { id: 'turbo-spin', label: 'TURBO SPIN' },
    { id: 'quick-spin', label: 'QUICK SPIN' },
    { id: 'skip-screens', label: 'SKIP SCREENS' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="SETTINGS">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column - Existing Settings */}
        <div className="space-y-6">
          {/* Autoplay Settings Section */}
          <div className="space-y-4">
            <h2 className="text-white font-bold text-xl border-b border-gray-600 pb-2">
              AUTOPLAY SETTINGS
            </h2>

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

            {/* Start Autoplay Button */}
            <button
              onClick={() => {
                console.log(`Starting autoplay with ${autoplayCount} spins`);
                onClose();
              }}
              className="w-full py-3 px-6 rounded-lg font-bold text-lg transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: COLORS.green }}
            >
              START AUTOPLAY ({autoplayCount})
            </button>
          </div>

          {/* Other Settings Section */}
          <div className="space-y-4">
            <h2 className="text-white font-bold text-xl border-b border-gray-600 pb-2">
              OTHER SETTINGS
            </h2>

            {/* Counter Test - Number Type */}
            <div className="space-y-3">
              <Counter
                value={counterValue}
                step={1}
                displayType="number"
                onIncrement={setCounterValue}
                onDecrement={setCounterValue}
              />
            </div>

            {/* Counter Test - Currency Type */}
            <div className="space-y-3">
              <Counter
                value={betValue}
                step={100}
                displayType="currency"
                label="Bet Value"
                onIncrement={setBetValue}
                onDecrement={setBetValue}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Switch Settings */}
        <div className="space-y-6">
          <h2 className="text-white font-bold text-xl border-b border-gray-600 pb-2">
            GAME SETTINGS
          </h2>

          <div className="space-y-4">
            <Switch
              label="QUICK SPIN"
              description="PLAY FASTER BY REDUCING TOTAL SPIN TIME"
              value={quickSpin}
              onChange={setQuickSpin}
            />

            <Switch
              label="BATTERY SAVER"
              description="SAVE BATTERY LIFE BY REDUCING ANIMATION SPEED"
              value={batterySaver}
              onChange={setBatterySaver}
            />

            <Switch
              label="AMBIENT MUSIC"
              description="TURN ON OR OFF THE GAME MUSIC"
              value={ambientMusic}
              onChange={setAmbientMusic}
            />

            <Switch
              label="GAME SOUNDS"
              description="TURN ON OR OFF THE GAME SOUNDS"
              value={gameSounds}
              onChange={setGameSounds}
            />

            <Switch
              label="INTRO SCREEN"
              description="SHOW THE INTRO SCREEN BEFORE STARTING THE GAME"
              value={introScreen}
              onChange={setIntroScreen}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
