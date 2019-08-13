import React, { useState } from "react";
import "./App.css";

import * as H from "history";
import { Route, Redirect, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import queryString from "query-string";

import { ChromePicker } from "react-color";

import ColorPage from "./ColorPage";
import IconButton from "./IconButton";

import tinycolor from "tinycolor2";
import ColorPlate from "./ColorPlate";

import posed from "react-pose";

interface AppProps {
  location: H.Location;
  history: H.History;
}

const PaletteBar = posed.div({
  visible: {
    applyAtStart: { display: "" },
    y: 0
  },
  hidden: {
    applyAtEnd: { display: "none" },
    y: 600
  }
});

const App: React.FC<AppProps> = props => {
  const { location, history } = props;

  const queryParams = queryString.parse(location.search);

  const colorInput =
    typeof queryParams.input === "string" ? queryParams.input : "";

  const setColorInput = (input: string) => {
    history.push(`/color?input=${input.replace(/#/g, "")}`);
  };

  const [isPaletteBarOpen, setIsPaletteBarOpen] = useState(true);

  const handlePaletteButtonClicked = () => {
    if (location.pathname.includes("/palette")) {
      setIsPaletteBarOpen(!isPaletteBarOpen);
    } else {
      history.push("palette");
      setIsPaletteBarOpen(true);
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route
          path="/color"
          render={() => (
            <ColorPage colorInput={colorInput} setColorInput={setColorInput} />
          )}
        />

        <Route
          path="/palette"
          render={() => (
            <div>
              <h1>Palette</h1>
            </div>
          )}
        />

        <Route path="/help" render={() => <h1>Help</h1>} />

        <Route render={() => <Redirect to="/color" />} />
      </Switch>

      <PaletteBar
        className={`palette-bar`}
        pose={
          isPaletteBarOpen && location.pathname.includes("/palette")
            ? "visible"
            : "hidden"
        }
      >
        <div className="palette-bar-row">
          <ColorPlate size={40} tinycolor={tinycolor.random()} />
          <ColorPlate size={40} tinycolor={tinycolor.random()} />
          <ColorPlate size={40} tinycolor={tinycolor.random()} />
          <ColorPlate size={40} tinycolor={tinycolor.random()} />
          <ColorPlate size={40} tinycolor={tinycolor.random()} />
        </div>
        <div className="palette-bar-divider" />
        <ChromePicker disableAlpha={true} />
      </PaletteBar>

      <div className="button-bar">
        <IconButton
          iconName="invert_colors"
          isActive={location.pathname.includes("/color")}
          onClick={() => history.push("color")}
        />

        <IconButton
          iconName="color_lens"
          isActive={location.pathname.includes("/palette")}
          isOutline={isPaletteBarOpen}
          onClick={() => handlePaletteButtonClicked()}
        />

        <IconButton
          iconName="help_outline"
          isActive={location.pathname.includes("/help")}
          onClick={() => history.push("help")}
        />
      </div>
    </div>
  );
};

export default withRouter(App);
