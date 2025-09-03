import { useEffect, useState } from 'react';

export default function DynamicSvg({
  fillColor,
  svgFilePath,
  className,
}: IDynamicSvgProps) {
  const [svgContent, setSvgContent] = useState<string>('');

  const regexByClassName = (className: string | undefined) => {
    switch (className) {
      case 'cls-1':
        return /(\.cls-1\s*\{[^}]*fill:\s*)[^;]+;/g;

      case 'st0':
        return /(\.st0\s*\{[^}]*fill:\s*)[^;]+;/g;

      case 'cls-2':
        return /(\.cls-2\s*\{[^}]*fill:\s*)[^;]+;/g;

      default:
        return /(\.cls-1\s*\{[^}]*fill:\s*)[^;]+;/g;
    }
  };

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch(svgFilePath);
        let svgText = await response.text();

        svgText = svgText.replace(
          regexByClassName(className),
          `$1${fillColor};`
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
