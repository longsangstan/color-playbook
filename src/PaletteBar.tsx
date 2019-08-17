import React from "react";

import posed from "react-pose";
import { ChromePicker } from "react-color";
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
}

const PaletteBar: React.FC<PaletteBarProps> = ({ isVisible }) => {
  return (
    <Wrapper className={`palette-bar`} pose={isVisible ? "visible" : "hidden"}>
      <div className="palette-bar-row">
        <ColorPlate
          filled={false}
          size={40}
          tinycolor={tinycolor.random()}
          onColorClick={() => null}
        />
        <ColorPlate
          size={40}
          tinycolor={tinycolor.random()}
          onColorClick={() => null}
        />
        <ColorPlate
          size={40}
          tinycolor={tinycolor.random()}
          onColorClick={() => null}
        />
        <ColorPlate
          size={40}
          tinycolor={tinycolor.random()}
          onColorClick={() => null}
        />
        <ColorPlate
          size={40}
          tinycolor={tinycolor.random()}
          onColorClick={() => null}
        />
      </div>
      <div className="palette-bar-divider" />
      <ChromePicker disableAlpha={true} />
    </Wrapper>
  );
};

export default PaletteBar;
