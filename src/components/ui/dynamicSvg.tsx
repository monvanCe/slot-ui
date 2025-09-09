import { useEffect, useState } from 'react';

export default function DynamicSvg({
  fillColor,
  svgFilePath,
  targetCssClass = 'cls-1',
  propertyName = 'fill',
}: IDynamicSvgProps) {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch(svgFilePath);
        let svgText = await response.text();

        const escapedProperty = propertyName.replace(
          /[.*+?^${}()|[\]\\]/g,
          '\\$&'
        );
        const escapedTargetClass = targetCssClass.replace(
          /[.*+?^${}()|[\]\\]/g,
          '\\$&'
        );
        const regex = new RegExp(
          `(\\.${escapedTargetClass}\\s*\\{[^}]*${escapedProperty}:\\s*)[^;]+;`,
          'g'
        );

        svgText = svgText.replace(regex, `$1${fillColor};`);

        setSvgContent(svgText);
      } catch (error) {
        console.error('SVG yüklenirken hata oluştu:', error);
      }
    };

    if (svgFilePath) {
      loadSvg();
    }
  }, [svgFilePath, fillColor, targetCssClass, propertyName]);

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
