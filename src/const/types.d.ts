interface IDynamicSvgProps {
  fillColor: string;
  svgFilePath: string;
  class?: string;
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
  label?: string;
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
    }
  | {
      label?: undefined;
      iconSvgPath: string;
    };

type IOutlinedButton = TOutlinedButtonSpan & {
  onPress?: () => void;
  outlineColor?: string;
  bgColor?: string;
  color?: string;
  outlineSvgPath?: string;
  fontSize?: number;
};
