import React from "react";
import "./App.css";

import tinycolor from "tinycolor2";
import * as H from "history";
import { withRouter } from "react-router";
import queryString from "query-string";

import PalettesContainer from "./PalettesContainer";
import Palette from "./Palette";
import CopyableText from "./CopyableText";
import IconButton from "./IconButton";

import getPrimaryPalette from "./get-primary-palette";

interface AppProps {
  location: H.Location;
  history: H.History;
}

const App: React.FC<AppProps> = props => {
  const queryParams = queryString.parse(props.location.search);

  const colorInput =
    typeof queryParams.input === "string" ? queryParams.input : "";

  const pickerColors = [
    tinycolor.random(),
    tinycolor.random(),
    tinycolor.random(),
    tinycolor.random(),
    tinycolor.random(),
    tinycolor.random(),
    tinycolor.random()
  ];

  const setColorInput = (input: string) => {
    props.history.push(`/?input=${input.replace(/#/g, "")}`);
  };
  const onColorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorInput(e.target.value);
  };

  /**
   * Palettes
   */

  const complementPalette = getPrimaryPalette(
    tinycolor(colorInput)
      .complement()
      .toHexString()
  );

  const triadPalettes = tinycolor(colorInput)
    .triad()
    .map(t => getPrimaryPalette(t.toHexString()));

  triadPalettes.shift();

  const analogousPalettes = tinycolor(colorInput)
    .analogous(3, 12)
    .map(t => getPrimaryPalette(t.toHexString()));

  analogousPalettes.shift();

  const splitcomplementPalettes = tinycolor(colorInput)
    .splitcomplement()
    .map(t => getPrimaryPalette(t.toHexString()));

  splitcomplementPalettes.shift();

  const tetradPalettes = tinycolor(colorInput)
    .tetrad()
    .map(t => getPrimaryPalette(t.toHexString()));

  tetradPalettes.shift();

  return (
    <div className="App">
      <div
        className="color-input-container"
        style={{
          backgroundColor: tinycolor(colorInput).isValid()
            ? tinycolor(colorInput).toHexString()
            : "white",
          height: "25vh"
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
                : "black"
          }}
          className="color-input"
          placeholder="pick or enter a color"
          value={colorInput}
          onChange={onColorInputChange}
        />

        <div
          className="color-input-picker"
          style={{
            opacity: tinycolor(colorInput).isValid() ? 0 : 1
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
      <div className="button-bar">
        <IconButton
          iconName="colorize"
          isActive={false}
          onClick={() => console.log("xx")}
        />

        <IconButton iconName="color_lens" isActive={false} />

        <IconButton iconName="help_outline" isActive={false} />
      </div>
    </div>
  );
};

export default withRouter(App);
