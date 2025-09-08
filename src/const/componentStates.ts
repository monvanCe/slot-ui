import { COLORS } from '../utils/colors';

export const COMPONENT_STATES: {
  mobileBetButton: { [key in TButtonStates]?: IOutlinedButton };
  mobileAutoplayButton: { [key in TButtonStates]?: IOutlinedButton };
  spinButton: { [key in TButtonStates]?: IOutlinedButton };
  infoButton: { [key in TButtonStates]?: IInfoButton };
  settingsButton: { [key in TButtonStates]?: IIconButton };
  volumeButton: { [key in TButtonStates]?: IIconButton };
  creditButton: { [key in TButtonStates]?: ILabeledPriceButton };
  betButton: { [key in TButtonStates]?: ILabeledPriceButton };
  autoplayButton: { [key in TButtonStates]?: ISvgButton };
} = {
  mobileBetButton: {
    default: {
      iconSvgPath: 'svg/Bet_Icon.svg',
      iconSvgFillColor: '#fff',
    },
  },

  mobileAutoplayButton: {
    default: {
      iconSvgPath: 'svg/Popup_Arrow.svg',
      iconSvgFillColor: COLORS.background,
      iconSvgClassName: 'cls-2',
      bgColor: 'green',
    },
  },

  spinButton: {
    default: {
      outlineSvgPath: 'svg/Spin_Button_Icon.svg',
      outlineSvgFillColor: '#fff',
      label: 'SPIN',
      bgColor: 'green',
    },
    spinning: {
      outlineSvgPath: 'svg/Spin_Button_Icon.svg',
      outlineSvgFillColor: '#fff',
      label: 'STOP',
      bgColor: 'red',
    },
  },

  infoButton: {
    default: {
      fillColor: COLORS.blue,
    },
    active: {
      fillColor: COLORS.green,
    },
  },

  settingsButton: {
    default: {
      icon: 'material-symbols:settings-rounded',
    },
    active: {
      icon: 'material-symbols:settings-rounded',
      color: 'green',
    },
  },

  volumeButton: {
    default: {
      icon: 'material-symbols:volume-up-rounded',
    },
    active: {
      icon: 'material-symbols:volume-up-rounded',
      color: 'green',
    },
    passive: {
      icon: 'material-symbols:volume-off-rounded',
      color: 'red',
    },
  },

  creditButton: {
    default: {
      label: 'CREDIT',
      labelColor: 'orange',
    },
  },

  betButton: {
    default: {
      label: 'BET',
      labelColor: 'green' as TColors,
    },
    pressable: {
      label: 'BET',
      labelColor: 'green' as TColors,
      rightIconBgColor: 'green' as TColors,
      rightIconSvgPath: 'svg/Bet_Icon.svg',
      rightIconSvgFillColor: '#fff',
    },
  },

  autoplayButton: {
    default: {
      svgFilePath: 'svg/Autoplay_Button_Stroke.svg',
      fillColor: 'transparent',
    },
    spinning: {
      svgFilePath: 'svg/Autoplay_Button_Stroke.svg',
      fillColor: COLORS.orange,
    },
    active: {
      svgFilePath: 'svg/Autoplay_Button_Stroke.svg',
      fillColor: COLORS.green,
    },
  },
};
