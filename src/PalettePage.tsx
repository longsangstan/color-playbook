import React from "react";

import Pattern from "./illustrations/Pattern";
import Gradients from "./illustrations/Gradients";

interface PalettePageProps {
  colors: tinycolor.Instance[];
}

const PalettePage: React.FC<PalettePageProps> = ({ colors }) => {
  return (
    <div className="palette-page">
      <h1>Illustrations</h1>
      <div style={{ height: 350, width: 350 }}>
        <Pattern colors={colors} />
      </div>

      <div style={{ margin: 10 }}>
        <Gradients colors={colors} />
      </div>
    </div>
  );
};

export default PalettePage;
