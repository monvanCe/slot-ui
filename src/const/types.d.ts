type TColors = 'background' | 'blue' | 'green' | 'orange' | 'white' | 'black';

interface IDynamicSvgProps {
  fillColor: string;
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
  onClick?: () => void;
  color?: string;
}

interface IInfoButton {
  onPress?: () => void;
  fillColor: string;
}

interface ISvgButton {
  svgFilePath: string;
  fillColor: string;
  onPress?: () => void;
  children?: React.ReactNode;
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

type ILabeledPriceButton = TLabeledPriceButtonLabel & {
  onPress?: () => void;
  value?: number;
  rightIconSvgPath?: string;
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
      iconSvgFillColor: string;
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
      outlineSvgFillColor: string;
      outlineSvgClassName?: string;
    };

type IOutlinedButton = TOutlinedButtonSpan &
  TOutlinedButtonOutline & {
    onPress?: () => void;
    outlineColor?: TColors;
    bgColor?: TColors;
    color?: TColors;
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
