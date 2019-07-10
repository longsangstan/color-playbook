import React from "react";

interface ColorPlateProps {
  size?: number;
  tinycolor: tinycolor.Instance;
  onColorClick: (color: string) => void;
}

const ColorPlate: React.FC<ColorPlateProps> = props => {
  const { size, tinycolor, onColorClick } = props;

  return (
    <div
      className="color"
      style={{
        background: tinycolor.toHexString(),
        width: size,
        height: size
      }}
      onClick={() => onColorClick(tinycolor.toHexString())}
    />
  );
};

ColorPlate.defaultProps = {
  size: 50
};

export default ColorPlate;
