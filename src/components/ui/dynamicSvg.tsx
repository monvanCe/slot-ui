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

        // Sadece cls-1 class'ına sahip elementlerin fill değerini değiştir
        svgText = svgText.replace(
          /class="cls-1"[^>]*fill="[^"]*"/g,
          `class="cls-1" fill="${fillColor}"`
        );

        // Style bloğunda cls-1 için fill değerini güncelle
        svgText = svgText.replace(
          /(\.cls-1\s*\{[^}]*fill:\s*)[^;]+;/g,
          `$1${fillColor};`
        );

        // Inline style'da cls-1 için fill değerini güncelle
        svgText = svgText.replace(
          /(class="cls-1"[^>]*style="[^"]*fill:\s*)[^;"]+/g,
          `$1${fillColor}`
        );

        // Sadece cls-1 class'ına sahip elementlerin fill değerini değiştir
        svgText = svgText.replace(
          /class="st0"[^>]*fill="[^"]*"/g,
          `class="st0" fill="${fillColor}"`
        );

        // Style bloğunda cls-1 için fill değerini güncelle
        svgText = svgText.replace(
          /(\.st0\s*\{[^}]*fill:\s*)[^;]+;/g,
          `$1${fillColor};`
        );

        // Inline style'da cls-1 için fill değerini güncelle
        svgText = svgText.replace(
          /(class="st0"[^>]*style="[^"]*fill:\s*)[^;"]+/g,
          `$1${fillColor}`
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
