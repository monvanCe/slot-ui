import { useState, useRef, useEffect, useCallback } from 'react';
import DynamicSvg from './dynamicSvg';
import { COLORS } from '../../utils/colors';

export default function Slider({
  value,
  min = 0,
  max = 100,
  onChange,
  className = '',
}: ISlider) {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const percentage = ((value - min) / (max - min)) * 100;
  const updateValue = useCallback(
    (e: MouseEvent | React.MouseEvent) => {
      if (!sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const newValue = Math.round(min + (percentage / 100) * (max - min));

      onChange(newValue);
    },
    [min, max, onChange]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      updateValue(e);
    },
    [updateValue]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      updateValue(e);
    },
    [isDragging, updateValue]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, [setIsDragging]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className={`relative ${className}`}>
      {/* Slider Track */}
      <div
        ref={sliderRef}
        className="relative w-full h-1 cursor-pointer"
        onMouseDown={handleMouseDown}
      >
        {/* Background Track */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: '#6b7280' }}
        />

        {/* Active Track */}
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-150"
          style={{ width: `${percentage}%`, backgroundColor: COLORS.green }}
        />

        {/* Slider Handle */}
        <div
          className="absolute p-1.5 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full cursor-pointer shadow-lg transition-all duration-150 hover:scale-110 flex items-center justify-center"
          style={{
            left: `calc(${percentage}% - 12px)`,
            backgroundColor: COLORS.green,
          }}
        >
          <DynamicSvg
            fillColor="#ffffff"
            svgFilePath="/svg/Slider_Icon.svg"
            className="w-3 h-4"
          />
        </div>
      </div>
    </div>
  );
}
