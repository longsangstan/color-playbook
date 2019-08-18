import React from "react";

import Example from "./illustrations/Example";

interface PalettePageProps {
  colors: tinycolor.Instance[];
}

const PalettePage: React.FC<PalettePageProps> = ({ colors }) => {
  return (
    <div className="palette-page">
      <h1>Illustration</h1>
      <div style={{ height: 300, width: 300 }}>
        <Example colors={colors} />
      </div>
    </div>
  );
};

export default PalettePage;
