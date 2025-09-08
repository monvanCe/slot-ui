import { COLORS } from '../../utils/colors';
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
    <div className={`flex items-center justify-between py-1 ${className}`}>
      {/* Left side - Label and Description */}
      <div className="flex-1">
        <p className="text-white font-bold text-lg uppercase">{label}</p>
        <p className="text-white text-sm uppercase">{description}</p>
      </div>

      {/* Right side - Switch */}
      <div className="ml-4">
        <button
          onClick={handleToggle}
          className="relative h-8 aspect-[2] rounded-full border border-white transition-all duration-300 ease-in-out bg-transparent"
          aria-label={`Toggle ${label}`}
        >
          {/* Switch Track */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            {/* Background text */}
            <div className={`absolute top-px ${value ? 'left-2' : 'right-2'}`}>
              <span
                className={`text-white text-xs font-bold transition-opacity duration-300`}
              >
                {value ? 'ON' : 'OFF'}
              </span>
            </div>

            {/* Sliding knob */}
            <div
              className={`absolute top-px h-7 aspect-square p-1.5 rounded-full transition-all duration-500 ease-in-out flex items-center justify-center ${
                value ? 'bg-green right-px' : 'bg-white left-px'
              }`}
            >
              <DynamicSvg
                fillColor={value ? COLORS.white : COLORS.background}
                svgFilePath="/svg/Slider_Icon.svg"
                className="st0"
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
