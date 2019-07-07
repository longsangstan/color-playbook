import React, { useState } from "react";
import "./App.css";

import tinycolor from "tinycolor2";

import Palette from "./Palette";
import CopyableText from "./CopyableText";

const colorToShades = (colorInput: string): tinycolor.Instance[] => {
  let output = [];

  for (let i = 0; i < 10; i++) {
    output.push(tinycolor(colorInput).darken(i * 5));
  }

  return output;
};

const colorToTints = (colorInput: string): tinycolor.Instance[] => {
  let output = [];

  for (let i = 0; i < 10; i++) {
    output.push(tinycolor(colorInput).lighten(i * 5));
  }

  return output;
};

const App: React.FC = () => {
  const [colorInput, setColorInput] = useState("");

  const onColorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorInput(e.target.value);
  };

  return (
    <div className="App">
      <div
        className="color-input-container"
        style={{
          backgroundColor: tinycolor(colorInput).isValid()
            ? tinycolor(colorInput).toHexString()
            : "white",
          height: "20vh"
        }}
      >
        <input
          style={{
            borderColor: tinycolor(colorInput).isValid()
              ? "transparent"
              : "black",
            color:
              tinycolor(colorInput).isValid() && tinycolor(colorInput).isDark()
                ? "white"
                : "black"
          }}
          className="color-input"
          placeholder="Type a color"
          value={colorInput}
          onChange={onColorInputChange}
        />
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

          <Palette
            title={"Shades"}
            tinyColors={colorToShades(colorInput)}
            onColorClick={setColorInput}
          />

          <Palette
            title={"Tints"}
            tinyColors={colorToTints(colorInput)}
            onColorClick={setColorInput}
          />

          <Palette
            title={"Complement"}
            tinyColors={[
              tinycolor(colorInput),
              tinycolor(colorInput).complement()
            ]}
            onColorClick={setColorInput}
          />

          <Palette
            title={"Triad"}
            tinyColors={tinycolor(colorInput).triad()}
            onColorClick={setColorInput}
          />

          <Palette
            title={"Analogous"}
            tinyColors={tinycolor(colorInput).analogous(3, 12)}
            onColorClick={setColorInput}
          />

          <Palette
            title={"Split Complement"}
            tinyColors={tinycolor(colorInput).splitcomplement()}
            onColorClick={setColorInput}
          />

          <Palette
            title={"Tetrad"}
            tinyColors={tinycolor(colorInput).tetrad()}
            onColorClick={setColorInput}
          />
        </>
      ) : null}
    </div>
  );
};

export default App;
