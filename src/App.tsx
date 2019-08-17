import React, { useState } from "react";
import "./App.css";

import * as H from "history";
import { Route, Redirect, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import queryString from "query-string";

import ColorPage from "./ColorPage";

import IconButton from "./IconButton";

import PaletteBar from "./PaletteBar";

interface AppProps {
  location: H.Location;
  history: H.History;
}

const App: React.FC<AppProps> = props => {
  const { location, history } = props;

  const queryParams = queryString.parse(location.search);

  /**
   * Color Page
   */

  const colorInput =
    typeof queryParams.input === "string" ? queryParams.input : "";

  const setColorInput = (input: string) => {
    history.push(`/color?input=${input.replace(/#/g, "")}`);
  };

  /**
   * Palette Page
   */

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
        isVisible={isPaletteBarOpen && location.pathname.includes("/palette")}
      />

      <div className="button-bar">
        <IconButton
          iconName="invert_colors"
          isActive={location.pathname.includes("/color")}
          onClick={() => history.push("color")}
        />

        <IconButton
          iconName="color_lens"
          isActive={location.pathname.includes("/palette")}
          filled={isPaletteBarOpen}
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
