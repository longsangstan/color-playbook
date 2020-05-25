import { OptionType, groupedOptions } from "./IllustrationSelect.options";
import Select, { ValueType } from "react-select"; // a bug for value prop type for grouped options?

import React from "react";

interface IllustrationSelectProps {
  colors: tinycolor.Instance[];
  activeColorKey: number;
  selectedOption: {
    value: string;
    label: string;
  };
  setSelectedOption: (option: OptionType) => void;
}

const IllustrationSelect: React.FC<IllustrationSelectProps> = ({
  colors,
  activeColorKey,
  selectedOption,
  setSelectedOption,
}) => {
  return (
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
        onChange={(selectedOption: ValueType<OptionType>) => {
          const value = selectedOption as OptionType;
          setSelectedOption(value);
        }}
        options={groupedOptions}
        isSearchable={false}
      />
    </div>
  );
};

export default IllustrationSelect;
