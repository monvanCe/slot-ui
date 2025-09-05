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
  const [shouldAnimate, setShouldAnimate] = useState(true);
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
      e.preventDefault();
      setIsDragging(true);
      setShouldAnimate(false); // Disable animation during drag
      updateValue(e);
    },
    [updateValue]
  );

  const handleTrackClick = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) return;
      setShouldAnimate(true); // Enable animation for click-to-position
      updateValue(e);
    },
    [isDragging, updateValue]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updateValue(e);
    },
    [isDragging, updateValue]
  );

  const handleMouseUp = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setShouldAnimate(true); // Re-enable animation after drag ends
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'grabbing';
    } else {
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className={`relative ${className}`}>
      {/* Slider Track */}
      <div
        ref={sliderRef}
        className="relative w-full h-1 cursor-pointer"
        onClick={handleTrackClick}
      >
        {/* Background Track */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: '#6b7280' }}
        />

        {/* Active Track */}
        <div
          className={`absolute top-0 left-0 h-full rounded-full ${
            shouldAnimate ? 'transition-all duration-150' : ''
          }`}
          style={{ width: `${percentage}%`, backgroundColor: COLORS.green }}
        />

        {/* Slider Handle */}
        <div
          className={`absolute p-1.5 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full shadow-lg ${
            shouldAnimate ? 'transition-all duration-150' : ''
          } hover:scale-110 flex items-center justify-center select-none`}
          style={{
            left: `calc(${percentage}% - 12px)`,
            backgroundColor: COLORS.green,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={handleMouseDown}
        >
          <DynamicSvg
            fillColor="#ffffff"
            svgFilePath="/svg/Slider_Icon.svg"
            className="w-3 h-4 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
