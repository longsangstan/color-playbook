import React, { useState } from "react";

// @ts-ignore
import Select from "react-select"; // a bug for value prop type for grouped options?

import Pattern from "./illustrations/Pattern";
import Gradients from "./illustrations/Gradients";

interface PalettePageProps {
  colors: tinycolor.Instance[];
}

const uiOptions = [
  { value: "bootstrap", label: "Bootstrap" },
  { value: "material", label: "Material Design" }
];

const graphicsOptions = [
  { value: "pattern", label: "Pattern" },
  { value: "gradient", label: "Gradient" }
];

const groupedOptions = [
  {
    label: "UI",
    options: uiOptions
  },
  {
    label: "Graphics",
    options: graphicsOptions
  }
];

const PalettePage: React.FC<PalettePageProps> = ({ colors }) => {
  const [selectedOption, setSelectedOption] = useState(graphicsOptions[0]);

  const renderIllustration = () => {
    if (selectedOption.value === "pattern") {
      return (
        <div style={{ height: 350, width: 350 }}>
          <Pattern colors={colors} />
        </div>
      );
    }

    if (selectedOption.value === "gradient") {
      return (
        <div style={{ margin: 10 }}>
          <Gradients colors={colors} />
        </div>
      );
    }
  };

  return (
    <div className="palette-page">
      <div style={{ width: 200, marginTop: 25, marginBottom: 25 }}>
        <Select
          className="illustrations-dropdown"
          classNamePrefix="illustrations-dropdown"
          value={selectedOption}
          onChange={(value: { value: string; label: string }) => {
            setSelectedOption(value);
          }}
          options={groupedOptions}
          isSearchable={false}
        />
      </div>

      {renderIllustration()}
    </div>
  );
};

export default PalettePage;
