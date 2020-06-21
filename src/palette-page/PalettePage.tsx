import "./PalettePage.css";

import React, { useState } from "react";

import IllustrationSelect from "./IllustrationSelect";
import Illustrations from "../illustrations";
import { otherOptions } from "./IllustrationSelect.options";

interface PalettePageProps {
  colors: tinycolor.Instance[];
  activeColorKey: number;
}

const PalettePage: React.FC<PalettePageProps> = ({
  colors,
  activeColorKey,
}) => {
  const [selectedOption, setSelectedOption] = useState(otherOptions[0]);

  return (
    <div className="palette-page">
      <IllustrationSelect
        colors={colors}
        activeColorKey={activeColorKey}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <Illustrations colors={colors} type={selectedOption.value} />
    </div>
  );
};

export default PalettePage;
