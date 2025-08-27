interface IDynamicSvgProps {
  fillColor: string;
  svgFilePath: string;
}

type TLabel =
  | {
      label: string;
      labelColor: string;
    }
  | {
      label?: undefined;
      labelColor?: undefined;
    };

type ILabeledPriceButton = TLabel & {
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
};
