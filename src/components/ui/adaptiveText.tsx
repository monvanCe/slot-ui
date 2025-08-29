import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from 'react';

interface AdaptiveTextProps {
  children: ReactNode;
  className?: string;
  minFontSize?: number;
  maxFontSize?: number;
  justify?: 'start' | 'center' | 'end';
  align?: 'start' | 'center' | 'end';
}

const AdaptiveText: React.FC<AdaptiveTextProps> = ({
  children,
  className = '',
  minFontSize = 8,
  maxFontSize = 100,
  justify = 'center',
  align = 'center',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(maxFontSize);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const lastFontSizeRef = useRef<number>(fontSize);

  // Justify ve align class'larını hesapla
  const getJustifyClass = () => {
    switch (justify) {
      case 'start':
        return 'justify-start';
      case 'end':
        return 'justify-end';
      default:
        return 'justify-center';
    }
  };

  const getAlignClass = () => {
    switch (align) {
      case 'start':
        return 'items-start';
      case 'end':
        return 'items-end';
      default:
        return 'items-center';
    }
  };

  const adjustFontSize = useCallback(() => {
    if (!containerRef.current || !textRef.current) return;

    const container = containerRef.current;
    const textElement = textRef.current;

    // Container boyutlarını al
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Eğer container boyutu 0 ise işlemi durdur
    if (containerWidth === 0 || containerHeight === 0) return;

    // Başlangıç font boyutu
    let currentFontSize = maxFontSize;

    // Font boyutunu azaltarak yazının sığıp sığmadığını kontrol et
    while (currentFontSize > minFontSize) {
      textElement.style.fontSize = `${currentFontSize}px`;

      // Yazının boyutlarını kontrol et
      const textWidth = textElement.scrollWidth;
      const textHeight = textElement.scrollHeight;

      // Eğer yazı container'a sığıyorsa döngüyü kır
      if (textWidth <= containerWidth && textHeight <= containerHeight) {
        break;
      }

      currentFontSize -= 1;
    }

    // Font boyutu değiştiyse state'i güncelle
    if (currentFontSize !== lastFontSizeRef.current) {
      lastFontSizeRef.current = currentFontSize;
      setFontSize(currentFontSize);
    }
  }, [children, minFontSize, maxFontSize]);

  useEffect(() => {
    // Debounced resize handler
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        adjustFontSize();
      }, 100);
    };

    // İlk ayarlama
    const initialTimeout = setTimeout(() => {
      adjustFontSize();
    }, 0);

    // ResizeObserver ekle
    let resizeObserver: ResizeObserver | null = null;

    if (window.ResizeObserver && containerRef.current) {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(containerRef.current);
    }

    // Cleanup
    return () => {
      clearTimeout(initialTimeout);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [adjustFontSize]);

  // Children değiştiğinde font boyutunu yeniden ayarla
  useEffect(() => {
    const timeout = setTimeout(() => {
      adjustFontSize();
    }, 0);

    return () => clearTimeout(timeout);
  }, [children, adjustFontSize]);

  return (
    <div
      ref={containerRef}
      className={`h-full w-full flex ${getAlignClass()} ${getJustifyClass()} overflow-hidden ${className}`}
    >
      <div
        ref={textRef}
        style={{ fontSize: `${fontSize}px` }}
        className="whitespace-nowrap leading-none flex items-center"
      >
        {children}
      </div>
    </div>
  );
};

export default AdaptiveText;
