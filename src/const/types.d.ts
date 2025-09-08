type TColors =
  | 'background'
  | 'blue'
  | 'green'
  | 'orange'
  | 'white'
  | 'black'
  | 'red';
type TButtonStates =
  | 'default'
  | 'pressable'
  | 'active'
  | 'spinning'
  | 'passive';
type TFillColor =
  | `#${string}`
  | `rgb(${number},${number},${number})`
  | `rgba(${number},${number},${number},${number})`
  | 'transparent'
  | 'currentColor';

interface IDynamicSvgProps {
  fillColor: TFillColor;
  svgFilePath: string;
  className?: string;
}

interface ILabelArea {
  title: string;
  bgColor: string;
  textColor?: string;
}

interface IIconButton {
  icon: string;
  onPress?: () => void;
  color?: string;
  disabled?: boolean;
}

interface IInfoButton {
  onPress?: () => void;
  fillColor: TFillColor;
  disabled?: boolean;
}

interface ISvgButton {
  svgFilePath: string;
  fillColor: TFillColor;
  onPress?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

type TLabeledPriceButtonLabel =
  | {
      label: string;
      labelColor: string;
    }
  | {
      label?: undefined;
      labelColor?: undefined;
    };

type TLabeledPriceButtonRightIcon =
  | {
      rightIconSvgPath: string;
      rightIconBgColor: string;
      rightIconSvgFillColor: TFillColor;
    }
  | {
      rightIconSvgPath?: undefined;
      rightIconBgColor?: undefined;
      rightIconSvgFillColor?: undefined;
    };

type ILabeledPriceButton = TLabeledPriceButtonLabel &
  TLabeledPriceButtonRightIcon & {
    onPress?: () => void;
    value?: number;
    disabled?: boolean;
  };

type TOutlinedButtonSpan =
  | {
      label: string;
      iconSvgPath?: undefined;
      iconSvgFillColor?: undefined;
      iconSvgClassName?: undefined;
    }
  | {
      label?: undefined;
      iconSvgPath: string;
      iconSvgFillColor: TFillColor;
      iconSvgClassName?: string;
    };

type TOutlinedButtonOutline =
  | {
      outlineSvgPath?: undefined;
      outlineSvgFillColor?: undefined;
      outlineSvgClassName?: undefined;
    }
  | {
      outlineSvgPath: string;
      outlineSvgFillColor: TFillColor;
      outlineSvgClassName?: string;
    };

type IOutlinedButton = TOutlinedButtonSpan &
  TOutlinedButtonOutline & {
    onPress?: () => void;
    outlineColor?: TColors;
    bgColor?: TColors;
    color?: TColors;
    disabled?: boolean;
  };

interface IUIConfig {
  curvedBar: React.CSSProperties;
  infoButton: React.CSSProperties;
  settingsButton: React.CSSProperties;
  volumeButton: React.CSSProperties;
  creditButton: React.CSSProperties;
  middleSection: React.CSSProperties;
  betButton: React.CSSProperties;
  autoplayButton: React.CSSProperties;
  spinButton: React.CSSProperties;
  mobileBottom: React.CSSProperties;
  mobileBetButton: React.CSSProperties;
  mobileAutoplayButton: React.CSSProperties;
}

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

interface ISlider {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  className?: string;
}

interface IChoiceOption {
  id: string;
  label: string;
}

interface IChoice {
  options: IChoiceOption[];
  selectedId: string;
  onChange: (selectedId: string) => void;
  className?: string;
}

type TCounterDisplayType = 'number' | 'currency';

interface ICounter {
  label?: string;
  value: number;
  step: number;
  displayType: TCounterDisplayType;
  onIncrement: (newValue: number) => void;
  onDecrement: (newValue: number) => void;
  className?: string;
}
