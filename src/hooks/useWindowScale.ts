import { useState, useEffect } from 'react';
import { REFERENCE_WIDTH } from '../const/staticVariables';

export const useWindowScale = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;

      const referenceWidth = REFERENCE_WIDTH;

      const newScale = windowWidth / referenceWidth;

      setScale(newScale);
    };

    // İlk hesaplama
    calculateScale();

    // Pencere boyutu değiştiğinde tekrar hesapla
    window.addEventListener('resize', calculateScale);

    return () => {
      window.removeEventListener('resize', calculateScale);
    };
  }, []);

  return scale;
};
