import React from "react";

interface ColorPlateProps {
  filled?: boolean;
  size: number;
  tinycolor: tinycolor.Instance;
  onColorClick: (color: string) => void;
}

const ColorPlate: React.FC<ColorPlateProps> = ({
  filled = true,
  size,
  tinycolor,
  onColorClick
}) => {
  return (
    <div
      className="color animated bounceIn"
      style={{
        borderColor: tinycolor.toHexString(),
        background: filled ? tinycolor.toHexString() : "#fff",
        width: size - 4,
        height: size - 4
      }}
      onClick={() => onColorClick(tinycolor.toHexString())}
    />
  );
};

export default ColorPlate;
