import DynamicSvg from './dynamicSvg';
import { COLORS } from '../../utils/colors';

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

export default function Choice({
  options,
  selectedId,
  onChange,
  className = '',
}: IChoice) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {options.map((option) => {
        const isSelected = option.id === selectedId;

        return (
          <div
            key={option.id}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onChange(option.id)}
          >
            {/* Choice Circle */}
            <div
              className={`w-8 aspect-square p-1 rounded-full flex items-center justify-center transition-all duration-200 ${
                isSelected ? 'border-0' : 'border-2 border-white'
              }`}
              style={{
                backgroundColor: isSelected ? COLORS.green : 'transparent',
              }}
            >
              {isSelected && (
                <DynamicSvg
                  fillColor="#ffffff"
                  svgFilePath="/svg/Confirm_Icon.svg"
                  className="w-3 h-3"
                />
              )}
            </div>

            {/* Label */}
            <span className="text-white font-medium text-sm">
              {option.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
