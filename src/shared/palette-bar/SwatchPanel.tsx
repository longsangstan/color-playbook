import "./SwatchPanel.css";

import React from "react";
import { SwatchesContainer } from "./SwatchesContainer";
import tinycolor from "tinycolor2";

interface SwatchProps {
  colorInput: string;
  setColorInput: (input: string) => void;
}

export const SwatchPanel: React.FC<SwatchProps> = ({
  colorInput,
  setColorInput,
}) => {
  return (
    <div className="SwatchPanel">
      <SwatchesContainer
        title="Monochromatic"
        colors={[
          tinycolor(colorInput).darken(),
          tinycolor(colorInput),
          tinycolor(colorInput).lighten(),
        ]}
        onColorClick={setColorInput}
      />

      <SwatchesContainer
        title="Analogous"
        colors={tinycolor(colorInput).analogous(3, 12)}
        onColorClick={setColorInput}
      />

      <SwatchesContainer
        title="Complementary"
        colors={[tinycolor(colorInput), tinycolor(colorInput).complement()]}
        onColorClick={setColorInput}
      />

      <SwatchesContainer
        title="Split Complementary"
        colors={tinycolor(colorInput).splitcomplement()}
        onColorClick={setColorInput}
      />

      <SwatchesContainer
        title="Triadic"
        colors={tinycolor(colorInput).triad()}
        onColorClick={setColorInput}
      />

      <SwatchesContainer
        title="Tetradic"
        colors={tinycolor(colorInput).tetrad()}
        onColorClick={setColorInput}
      />
    </div>
  );
};
