import "./ColorBlock.css";

import React from "react";

interface ColorBlockProps {
  filled?: boolean;
  width: number;
  height: number;
  tinycolor: tinycolor.Instance;
  onColorClick: (color: string) => void;
}

export const ColorBlock: React.FC<ColorBlockProps> = ({
  filled = true,
  width,
  height,
  tinycolor,
  onColorClick,
}) => {
  return (
    <div
      className="ColorBlock"
      style={{
        borderColor: tinycolor.toHexString(),
        background: filled ? tinycolor.toHexString() : "#fff",
        width: width,
        height: height,
      }}
      onClick={() => onColorClick(tinycolor.toHexString())}
    />
  );
};
