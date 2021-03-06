import React, { useState } from "react";
import "./App.css";

import ReactGA from "react-ga";

import tinycolor from "tinycolor2";

import * as H from "history";
import { Route, Redirect, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import queryString from "query-string";

import ColorPage from "./ColorPage";
import PalettePage from "./PalettePage";
import AboutPage from "./AboutPage";

import IconButton from "./IconButton";

import PaletteBar from "./PaletteBar";

import { ColorResult } from "react-color";
import { DropResult } from "react-beautiful-dnd";

import reorder from "./reorder";
import getPaletteFromQueryParams from "./get-palette-from-query-params";

interface AppProps {
  location: H.Location;
  history: H.History;
}

ReactGA.initialize("UA-118263436-4", {
  debug: false
});
ReactGA.pageview(window.location.pathname + window.location.search);

const App: React.FC<AppProps> = props => {
  const { location, history } = props;
  const { pathname, search } = location;

  const queryParams = queryString.parse(search);

  const pushPath = (path: string) => {
    ReactGA.pageview(path);
    history.push(path);
  };

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

  const [paletteBarInput, setPaletteBarInput] = useState(
    getPaletteFromQueryParams(queryParams)
  );
  const [activeColorKey, setActiveColorKey] = useState(0);
  const [isPaletteBarOpen, setIsPaletteBarOpen] = useState(true);

  const handlePaletteButtonClicked = () => {
    if (pathname.includes("/palette")) {
      setIsPaletteBarOpen(!isPaletteBarOpen);
    } else {
      pushPath("/palette");
      setIsPaletteBarOpen(true);
    }
  };

  const handlePickerColorChange = (color: ColorResult) => {
    setPaletteBarInput(paletteBarInput => {
      let newInput = [...paletteBarInput];
      newInput[activeColorKey] = tinycolor(color.hex);
      return newInput;
    });
  };

  const handleDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    let newPaletteBarInput = reorder(
      paletteBarInput,
      result.source.index,
      result.destination.index
    );
    setPaletteBarInput(newPaletteBarInput);

    if (result.source.index === activeColorKey) {
      setActiveColorKey(result.destination.index);
    } else if (
      result.source.index > activeColorKey &&
      result.destination.index <= activeColorKey
    ) {
      setActiveColorKey(activeColorKey + 1);
    } else if (
      result.source.index < activeColorKey &&
      result.destination.index >= activeColorKey
    ) {
      setActiveColorKey(activeColorKey - 1);
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
          render={() => <PalettePage colors={paletteBarInput} />}
        />

        <Route path="/about" render={() => <AboutPage />} />

        <Route render={() => <Redirect to="/palette" />} />
      </Switch>

      <PaletteBar
        colors={paletteBarInput}
        activeColorKey={activeColorKey}
        handleColorClick={setActiveColorKey}
        handlePickerColorChange={handlePickerColorChange}
        handleDragEnd={handleDragEnd}
        isVisible={isPaletteBarOpen && pathname.includes("/palette")}
      />

      <div className="button-bar">
        <IconButton
          iconName="invert_colors"
          isActive={pathname.includes("/color")}
          onClick={() => pushPath("/color")}
        />

        <IconButton
          iconName="color_lens"
          isActive={pathname.includes("/palette")}
          filled={isPaletteBarOpen}
          onClick={() => handlePaletteButtonClicked()}
        />

        <IconButton
          iconName="help_outline"
          isActive={pathname.includes("/about")}
          onClick={() => pushPath("/about")}
        />
      </div>
    </div>
  );
};

export default withRouter(App);
