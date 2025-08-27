import React from 'react';

interface CurvedCornerProps {
  fillColor?: string;
  width?: number;
  height?: number;
  corner?: 'bottomright' | 'bottomleft' | 'topleft' | 'topright';
  className?: string;
}

const CurvedCorner: React.FC<CurvedCornerProps> = ({
  fillColor = '#ff0000',
  width = 100,
  height = 100,
  corner = 'bottomright',
  className = '',
}) => {
  const getCornerStyles = () => {
    const baseStyles: React.CSSProperties = {
      width: `${width}px`,
      height: `${height}px`,
      overflow: 'hidden',
      position: 'relative',
    };

    const pseudoStyles: React.CSSProperties = {
      content: '""',
      display: 'block',
      width: '200%',
      height: '200%',
      position: 'absolute',
      borderRadius: '50%',
    };

    switch (corner) {
      case 'bottomright':
        return {
          container: baseStyles,
          pseudo: {
            ...pseudoStyles,
            bottom: 0,
            right: 0,
            boxShadow: `${width / 2}px ${height / 2}px 0 0 ${fillColor}`,
          },
        };
      case 'bottomleft':
        return {
          container: baseStyles,
          pseudo: {
            ...pseudoStyles,
            bottom: 0,
            left: 0,
            boxShadow: `-${width / 2}px ${height / 2}px 0 0 ${fillColor}`,
          },
        };
      case 'topleft':
        return {
          container: baseStyles,
          pseudo: {
            ...pseudoStyles,
            top: 0,
            left: 0,
            boxShadow: `-${width / 2}px -${height / 2}px 0 0 ${fillColor}`,
          },
        };
      case 'topright':
        return {
          container: baseStyles,
          pseudo: {
            ...pseudoStyles,
            top: 0,
            right: 0,
            boxShadow: `${width / 2}px -${height / 2}px 0 0 ${fillColor}`,
          },
        };
      default:
        return {
          container: baseStyles,
          pseudo: {
            ...pseudoStyles,
            bottom: 0,
            right: 0,
            boxShadow: `${width / 2}px ${height / 2}px 0 0 ${fillColor}`,
          },
        };
    }
  };

  const { container, pseudo } = getCornerStyles();

  return (
    <div className={className} style={container}>
      <div style={pseudo} />
    </div>
  );
};

export default CurvedCorner;
