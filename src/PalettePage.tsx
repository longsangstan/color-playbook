import React, { useState } from "react";

// @ts-ignore
import Select from "react-select"; // a bug for value prop type for grouped options?

import Pattern from "./illustrations/Pattern";
import Gradients from "./illustrations/Gradients";
import Bootstrap from "./illustrations/Bootstrap";

interface PalettePageProps {
  colors: tinycolor.Instance[];
  activeColorKey: number;
}

const uiOptions = [
  { value: "bootstrap", label: "Bootstrap" },
  { value: "material", label: "Material Design" }
];

const graphicsOptions = [
  { value: "pattern", label: "Pattern" },
  { value: "gradients", label: "Gradients" }
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

const PalettePage: React.FC<PalettePageProps> = ({
  colors,
  activeColorKey
}) => {
  const [selectedOption, setSelectedOption] = useState(uiOptions[0]);

  const renderIllustration = () => {
    if (selectedOption.value === "pattern") {
      return (
        <div style={{ height: 350, width: 350 }}>
          <Pattern colors={colors} />
        </div>
      );
    }

    if (selectedOption.value === "gradients") {
      return (
        <div>
          <Gradients colors={colors} />
        </div>
      );
    }

    if (selectedOption.value === "bootstrap") {
      return (
        <div>
          <Bootstrap colors={colors} />
        </div>
      );
    }
  };

  return (
    <div className="palette-page">
      <div style={{ width: 200, marginTop: 25, marginBottom: 25 }}>
        <style type="text/css">
          {`
          .illustrations-dropdown__option--is-focused {
            background-color: ${colors[activeColorKey]
              .clone()
              .brighten(30)
              .toHexString()} !important;
          }

          .illustrations-dropdown__option--is-selected {
            background-color: ${colors[
              activeColorKey
            ].toHexString()} !important;
          }

          .illustrations-dropdown__option:active {
            background-color: ${colors[activeColorKey]
              .clone()
              .brighten(40)
              .toHexString()} !important;
          }

          .illustrations-dropdown__control--is-focused {
            border-color: ${colors[activeColorKey].toHexString()} !important;
            box-shadow: 0 0 0 1px ${colors[
              activeColorKey
            ].toHexString()} !important;
          }

          .illustrations-dropdown__control:hover {
            border-color: ${colors[activeColorKey].toHexString()} !important;
          }
          `}
        </style>
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
