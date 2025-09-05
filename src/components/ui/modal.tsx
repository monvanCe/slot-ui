import { useEffect } from 'react';
import DynamicSvg from './dynamicSvg';
import { COLORS } from '../../utils/colors';

export default function Modal({ isOpen, onClose, children, title }: IModal) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className="relative rounded-lg shadow-2xl max-w-md w-full mx-4 p-6 border-2 border-white"
        style={{ backgroundColor: COLORS.background }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {title && <h2 className="text-xl font-bold text-white">{title}</h2>}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="ml-auto p-2 rounded-full border-2 border-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
            aria-label="Close modal"
          >
            <div className="w-4 h-4">
              <DynamicSvg
                fillColor="#ffffff"
                svgFilePath="/svg/Exit_Icon.svg"
              />
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="text-white">{children}</div>
      </div>
    </div>
  );
}
