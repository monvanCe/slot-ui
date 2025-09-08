import { useState } from 'react';
import DynamicSvg from './dynamicSvg';

interface ISwitch {
  label: string;
  description: string;
  value: boolean;
  onChange: (value: boolean) => void;
  className?: string;
}

export default function Switch({
  label,
  description,
  value,
  onChange,
  className = '',
}: ISwitch) {
  const handleToggle = () => {
    onChange(!value);
  };

  return (
    <div className={`flex items-center justify-between py-3 ${className}`}>
      {/* Left side - Label and Description */}
      <div className="flex-1">
        <h3 className="text-white font-bold text-lg mb-1">{label}</h3>
        <p className="text-gray-400 text-sm uppercase">{description}</p>
      </div>

      {/* Right side - Switch */}
      <div className="ml-4">
        <button
          onClick={handleToggle}
          className={`
            relative w-20 h-8 rounded-full transition-all duration-300 ease-in-out
            ${value ? 'bg-green-500' : 'bg-gray-600'}
          `}
          aria-label={`Toggle ${label}`}
        >
          {/* Switch Track */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {/* Left side content */}
            <div
              className={`
              absolute left-0 top-0 w-1/2 h-full flex items-center justify-center
              transition-all duration-300 ease-in-out
              ${value ? 'opacity-0' : 'opacity-100'}
            `}
            >
              <span className="text-white text-xs font-bold">OFF</span>
            </div>

            {/* Right side content */}
            <div
              className={`
              absolute right-0 top-0 w-1/2 h-full flex items-center justify-center
              transition-all duration-300 ease-in-out
              ${value ? 'opacity-100' : 'opacity-0'}
            `}
            >
              <span className="text-white text-xs font-bold">ON</span>
            </div>

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 flex items-center justify-center">
                <DynamicSvg
                  fillColor="#ffffff"
                  svgFilePath="/svg/Spin_Button_Icon.svg"
                  className="w-3 h-3"
                />
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
