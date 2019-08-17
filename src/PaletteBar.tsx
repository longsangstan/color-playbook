import React from "react";

import posed from "react-pose";
import { ChromePicker, ColorResult } from "react-color";
import tinycolor from "tinycolor2";

import ColorPlate from "./ColorPlate";

const Wrapper = posed.div({
  visible: {
    applyAtStart: { display: "" },
    y: 0
  },
  hidden: {
    applyAtEnd: { display: "none" },
    y: 600
  }
});

interface PaletteBarProps {
  isVisible: boolean;
  colors: tinycolor.Instance[];
  activeColorKey: number;
  handleColorClick: (key: number) => void;
  handlePickerColorChange: (color: ColorResult) => void;
}

const PaletteBar: React.FC<PaletteBarProps> = ({
  isVisible,
  colors,
  activeColorKey,
  handleColorClick,
  handlePickerColorChange
}) => {
  return (
    <Wrapper className={`palette-bar`} pose={isVisible ? "visible" : "hidden"}>
      <div className="palette-bar-row">
        {colors.map((item, index) => (
          <ColorPlate
            key={index}
            filled={index !== activeColorKey}
            size={40}
            tinycolor={item}
            onColorClick={() => handleColorClick(index)}
          />
        ))}
      </div>
      <div className="palette-bar-divider" />
      <ChromePicker
        disableAlpha={true}
        color={colors[activeColorKey].toHexString()}
        onChange={handlePickerColorChange}
      />
    </Wrapper>
  );
};

export default PaletteBar;
