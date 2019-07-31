import React from "react";

import Palette from "./Palette";

interface PalettesContainerProps {
  title: string;
  palettes: tinycolor.Instance[][];
  onColorClick: (color: string) => void;
}

const PalettesContainer: React.FC<PalettesContainerProps> = props => {
  const { title, palettes, onColorClick } = props;

  return (
    <div className="palettes-container">
      <div className="palettes-container-title">{title}</div>

      {palettes.map((palette, i) => (
        <Palette key={i} tinyColors={palette} onColorClick={onColorClick} />
      ))}
    </div>
  );
};

export default PalettesContainer;
