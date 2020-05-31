import "./ColorPage.css";

import CopyableText from "../CopyableText";
import Palette from "./Palette";
import PalettesContainer from "./PalettesContainer";
import React from "react";
import getPrimaryPalette from "../utils/get-primary-palette";
import tinycolor from "tinycolor2";

interface ColorPageProps {
  colorInput: string;
  setColorInput: (input: string) => void;
}

const ColorPage: React.FC<ColorPageProps> = (props) => {
  const { colorInput, setColorInput } = props;

  const onColorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorInput(e.target.value);
  };

  const pickerColors = [
    tinycolor.random(),
    tinycolor.random(),
    tinycolor.random(),
    tinycolor.random(),
    tinycolor.random(),
    tinycolor.random(),
    tinycolor.random(),
  ];

  /**
   * Palettes
   */

  const complementPalette = getPrimaryPalette(
    tinycolor(colorInput).complement().toHexString()
  );

  const triadPalettes = tinycolor(colorInput)
    .triad()
    .map((t) => getPrimaryPalette(t.toHexString()));

  triadPalettes.shift();

  const analogousPalettes = tinycolor(colorInput)
    .analogous(3, 12)
    .map((t) => getPrimaryPalette(t.toHexString()));

  analogousPalettes.shift();

  const splitcomplementPalettes = tinycolor(colorInput)
    .splitcomplement()
    .map((t) => getPrimaryPalette(t.toHexString()));

  splitcomplementPalettes.shift();

  const tetradPalettes = tinycolor(colorInput)
    .tetrad()
    .map((t) => getPrimaryPalette(t.toHexString()));

  tetradPalettes.shift();

  return (
    <>
      <div
        className="color-input-container"
        style={{
          backgroundColor: tinycolor(colorInput).isValid()
            ? tinycolor(colorInput).toHexString()
            : "white",
          height: "25vh",
        }}
      >
        <div style={{ height: 50 }} />
        <input
          style={{
            margin: 5,
            borderColor: tinycolor(colorInput).isValid()
              ? "transparent"
              : "black",
            color:
              tinycolor(colorInput).isValid() && tinycolor(colorInput).isDark()
                ? "white"
                : "black",
          }}
          className="color-input"
          placeholder="pick or enter a color"
          value={colorInput}
          onChange={onColorInputChange}
        />

        <div
          className="color-input-picker"
          style={{
            opacity: tinycolor(colorInput).isValid() ? 0 : 1,
          }}
        >
          <Palette
            colorSize={25}
            tinyColors={pickerColors}
            onColorClick={setColorInput}
          />
        </div>
      </div>
      {tinycolor(colorInput).isValid() ? (
        <>
          <div className="color-strings-container">
            <div style={{ minWidth: 80, margin: 10 }}>
              <CopyableText text={tinycolor(colorInput).toHexString()} />
            </div>
            <div style={{ minWidth: 125, margin: 10 }}>
              <CopyableText text={tinycolor(colorInput).toRgbString()} />
            </div>
          </div>

          <PalettesContainer
            title={"Primary"}
            palettes={[getPrimaryPalette(colorInput)]}
            onColorClick={setColorInput}
          />

          <PalettesContainer
            title={"Complement"}
            palettes={[complementPalette]}
            onColorClick={setColorInput}
          />

          <PalettesContainer
            title={"Triad"}
            palettes={triadPalettes}
            onColorClick={setColorInput}
          />

          <PalettesContainer
            title={"Analogous"}
            palettes={analogousPalettes}
            onColorClick={setColorInput}
          />

          <PalettesContainer
            title={"Split Complement"}
            palettes={splitcomplementPalettes}
            onColorClick={setColorInput}
          />

          <PalettesContainer
            title={"Tetrad"}
            palettes={tetradPalettes}
            onColorClick={setColorInput}
          />
        </>
      ) : null}
    </>
  );
};

export default ColorPage;
