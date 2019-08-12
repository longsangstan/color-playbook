import React from "react";

interface ColorPlateProps {
  size?: number;
  tinycolor: tinycolor.Instance;
  onColorClick?: (color: string) => void;
}

const ColorPlate: React.FC<ColorPlateProps> = props => {
  const { size, tinycolor, onColorClick } = props;

  return (
    <div
      className="color animated bounceIn"
      style={{
        background: tinycolor.toHexString(),
        width: size,
        height: size
      }}
      onClick={() =>
        onColorClick ? onColorClick(tinycolor.toHexString()) : null
      }
    />
  );
};

ColorPlate.defaultProps = {
  size: 50
};

export default ColorPlate;
