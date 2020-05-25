import React, { useState } from "react";

import IllustrationSelect from "./IllustrationSelect";
import Illustrations from "../illustrations";
import { uiOptions } from "./IllustrationSelect.options";

interface PalettePageProps {
  colors: tinycolor.Instance[];
  activeColorKey: number;
}

const PalettePage: React.FC<PalettePageProps> = ({
  colors,
  activeColorKey,
}) => {
  const [selectedOption, setSelectedOption] = useState(uiOptions[1]);

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
