import { useState, useEffect } from 'react';

export const useWindowScale = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;

      // Referans genişlik (tam ekran için ideal boyut)
      const referenceWidth = 1864;

      // Sadece genişliğe göre scale hesapla
      const newScale = windowWidth / referenceWidth;

      // Minimum scale değeri (çok küçülmesin)
      const minScale = 0.3;
      const finalScale = Math.max(newScale, minScale);

      setScale(finalScale);
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
