import React, { useState } from "react";
import "./App.css";

import * as H from "history";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { withRouter } from "react-router";
import queryString from "query-string";

import PickerPage from "./PickerPage";
import IconButton from "./IconButton";

import tinycolor from "tinycolor2";
import ColorPlate from "./ColorPlate";

interface AppProps {
  location: H.Location;
  history: H.History;
}

const App: React.FC<AppProps> = props => {
  const { location, history } = props;

  const queryParams = queryString.parse(location.search);

  const colorInput =
    typeof queryParams.input === "string" ? queryParams.input : "";

  const setColorInput = (input: string) => {
    history.push(`/picker?input=${input.replace(/#/g, "")}`);
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
          path="/picker"
          render={() => (
            <PickerPage colorInput={colorInput} setColorInput={setColorInput} />
          )}
        />

        <Route
          path="/palette"
          render={() => (
            <div>
              <h1>Palette</h1>
              <div
                className={`palette-bar animated ${
                  isPaletteBarOpen ? "zoomIn" : "zoomOut"
                }`}
                // style={{ display: isPaletteBarOpen ? "" : "none" }}
              >
                <div className="palette-bar-row">
                  <ColorPlate size={40} tinycolor={tinycolor.random()} />
                  <ColorPlate size={40} tinycolor={tinycolor.random()} />
                  <ColorPlate size={40} tinycolor={tinycolor.random()} />
                  <ColorPlate size={40} tinycolor={tinycolor.random()} />
                  <ColorPlate size={40} tinycolor={tinycolor.random()} />
                </div>
                <div className="palette-bar-divider" />
                <div className="palette-bar-row">
                  <ColorPlate size={40} tinycolor={tinycolor.random()} />
                  <ColorPlate size={40} tinycolor={tinycolor.random()} />
                  <ColorPlate size={40} tinycolor={tinycolor.random()} />
                  <ColorPlate size={40} tinycolor={tinycolor.random()} />
                  <ColorPlate size={40} tinycolor={tinycolor.random()} />
                </div>
              </div>
            </div>
          )}
        />

        <Route path="/help" render={() => <h1>Help</h1>} />

        <Route render={() => <Redirect to="/picker" />} />
      </Switch>

      <div className="button-bar">
        <IconButton
          iconName="colorize"
          isActive={location.pathname.includes("/picker")}
          onClick={() => history.push("picker")}
        />

        <IconButton
          iconName="color_lens"
          isActive={location.pathname.includes("/palette")}
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
