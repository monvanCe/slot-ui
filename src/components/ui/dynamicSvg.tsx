import { useEffect, useState } from 'react';

export default function DynamicSvg({
  fillColor,
  svgFilePath,
}: IDynamicSvgProps) {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch(svgFilePath);
        let svgText = await response.text();

        // .cls-1 sınıfının fill değerini değiştir
        svgText = svgText.replace(/fill:\s*[^;]+;/g, `fill: ${fillColor};`);

        // Alternatif olarak style bloğunu da güncelle
        svgText = svgText.replace(
          /(<style[^>]*>[\s\S]*?)fill:\s*[^;]+;/g,
          `$1fill: ${fillColor};`
        );

        setSvgContent(svgText);
      } catch (error) {
        console.error('SVG yüklenirken hata oluştu:', error);
      }
    };

    if (svgFilePath) {
      loadSvg();
    }
  }, [svgFilePath, fillColor]);

  if (!svgContent) {
    return (
      <div className="w-full h-full animate-pulse bg-gray-200 rounded"></div>
    );
  }

  return (
    <img
      src={`data:image/svg+xml;base64,${btoa(svgContent)}`}
      alt="dynamic-svg"
      className="w-full h-full object-contain"
    />
  );
}
