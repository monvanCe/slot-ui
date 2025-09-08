import React from 'react';
import AdaptiveText from './adaptiveText';
import DynamicSvg from './dynamicSvg';
import { COLORS } from '../../utils/colors';

const Counter: React.FC<ICounter> = ({
  value,
  step,
  displayType,
  onIncrement,
  onDecrement,
  label,
  className = '',
}) => {
  const handleIncrement = () => {
    onIncrement(value + step);
  };

  const handleDecrement = () => {
    onDecrement(value - step);
  };

  const formatValue = (val: number): string => {
    if (displayType === 'currency') {
      return `$${val.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}`;
    }
    return val.toString();
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="text-center mb-2 h-4">
          <AdaptiveText className="text-white font-medium">
            {label}
          </AdaptiveText>
        </div>
      )}
      {/* container */}
      <div className="h-10 w-full border border-white rounded-full flex px-1 py-1 gap-2">
        <button
          onClick={handleDecrement}
          className="h-full aspect-square p-2 rounded-full bg-white"
        >
          <DynamicSvg
            svgFilePath="/svg/Minus_Icon.svg"
            fillColor={COLORS.background}
          />
        </button>

        {/* AdaptiveText Container */}
        <div className="flex-1 h-full overflow-hidden">
          <AdaptiveText className="text-white font-bold">
            {formatValue(value)}
          </AdaptiveText>
        </div>

        <button
          onClick={handleIncrement}
          className="h-full aspect-square bg-white rounded-full p-2"
        >
          <DynamicSvg
            svgFilePath="/svg/Plus_Icon.svg"
            fillColor={COLORS.background}
            className="w-4 h-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Counter;
