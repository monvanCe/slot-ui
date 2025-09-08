import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { COMPONENT_STATES } from '../../const/componentStates';

interface ComponentStatesState {
  mobileBetButton: IOutlinedButton;
  mobileAutoplayButton: IOutlinedButton;
  spinButton: IOutlinedButton;
  infoButton: IInfoButton;
  settingsButton: IIconButton;
  volumeButton: IIconButton;
  creditButton: ILabeledPriceButton;
  betButton: ILabeledPriceButton;
  autoplayButton: ISvgButton;
}

const initialState: ComponentStatesState = {
  mobileBetButton: COMPONENT_STATES.mobileBetButton.default!,
  mobileAutoplayButton: COMPONENT_STATES.mobileAutoplayButton.default!,
  spinButton: COMPONENT_STATES.spinButton.default!,
  infoButton: COMPONENT_STATES.infoButton.default!,
  settingsButton: COMPONENT_STATES.settingsButton.default!,
  volumeButton: COMPONENT_STATES.volumeButton.default!,
  creditButton: COMPONENT_STATES.creditButton.default!,
  betButton: COMPONENT_STATES.betButton.pressable!,
  autoplayButton: COMPONENT_STATES.autoplayButton.default!,
};

const componentStatesSlice = createSlice({
  name: 'componentStates',
  initialState,
  reducers: {
    setMobileBetButtonState: (
      state,
      action: PayloadAction<IOutlinedButton>
    ) => {
      state.mobileBetButton = action.payload;
    },
    setMobileAutoplayButtonState: (
      state,
      action: PayloadAction<IOutlinedButton>
    ) => {
      state.mobileAutoplayButton = action.payload;
    },
    setSpinButtonState: (state, action: PayloadAction<IOutlinedButton>) => {
      state.spinButton = action.payload;
    },
    setInfoButtonState: (state, action: PayloadAction<IInfoButton>) => {
      state.infoButton = action.payload;
    },
    setSettingsButtonState: (state, action: PayloadAction<IIconButton>) => {
      state.settingsButton = action.payload;
    },
    setVolumeButtonState: (state, action: PayloadAction<IIconButton>) => {
      state.volumeButton = action.payload;
    },
    setCreditButtonState: (
      state,
      action: PayloadAction<ILabeledPriceButton>
    ) => {
      state.creditButton = action.payload;
    },
    setBetButtonState: (state, action: PayloadAction<ILabeledPriceButton>) => {
      state.betButton = action.payload;
    },
    setAutoplayButtonState: (state, action: PayloadAction<ISvgButton>) => {
      state.autoplayButton = action.payload;
    },
  },
});

export const {
  setMobileBetButtonState,
  setMobileAutoplayButtonState,
  setSpinButtonState,
  setInfoButtonState,
  setSettingsButtonState,
  setVolumeButtonState,
  setCreditButtonState,
  setBetButtonState,
  setAutoplayButtonState,
} = componentStatesSlice.actions;

export default componentStatesSlice;
