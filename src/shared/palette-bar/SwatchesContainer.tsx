import "./SwatchesContainer.css";

import React from "react";
import { Swatch } from "./Swatch";

interface SwatchesContainerProps {
  title: string;
  colors: tinycolor.Instance[];
  onColorClick: (color: string) => void;
}

export const SwatchesContainer: React.FC<SwatchesContainerProps> = (props) => {
  const { title, colors, onColorClick } = props;

  return (
    <div className="SwatchesContainer">
      <div className="SwatchesContainer__title">{title}</div>
      <Swatch tinyColors={colors} onColorClick={onColorClick} colorSize={20} />
    </div>
  );
};
