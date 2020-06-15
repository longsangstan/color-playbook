import "./ColorBlock.css";

import React from "react";

interface ColorBlockProps {
  position?: "first" | "last";
  filled?: boolean;
  width: number;
  height: number;
  tinycolor: tinycolor.Instance;
  onColorClick: (color: string) => void;
}

export const ColorBlock: React.FC<ColorBlockProps> = ({
  position,
  filled = true,
  width,
  height,
  tinycolor,
  onColorClick,
}) => {
  let classNames = ["ColorBlock"];
  if (position === "first") classNames.push("ColorBlock--first");
  if (position === "last") classNames.push("ColorBlock--last");

  return (
    <div
      className={classNames.join(" ")}
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
