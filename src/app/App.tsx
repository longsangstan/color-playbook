import "./App.css";

import * as H from "history";

import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AboutPage from "../about-page/AboutPage";
import ButtonBar from "./ButtonBar";
import ColorPage from "../color-page/ColorPage";
import { DropResult } from "react-beautiful-dnd";
import PaletteBar from "../shared/palette-bar/PaletteBar";
import PalettePage from "../palette-page/PalettePage";
import ReactGA from "react-ga";
import getPaletteFromQueryParams from "../utils/get-palette-from-query-params";
import getRandomPalette from "../utils/get-random-palette";
import paletteToQueryString from "../utils/palette-to-query-string";
import queryString from "query-string";
import reorder from "../utils/reorder";
import tinycolor from "tinycolor2";
import { withRouter } from "react-router";

interface AppProps {
  location: H.Location;
  history: H.History;
}

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE || "UA-12345678-9", {
  debug: process.env.NODE_ENV === "development",
});
ReactGA.pageview(window.location.pathname + window.location.search);

const App: React.FC<AppProps> = (props) => {
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

  const paletteBarInput =
    getPaletteFromQueryParams(queryParams) || getRandomPalette(5);

  const setPaletteBarInput = (colors: tinycolor.Instance[]) => {
    history.push(`/palette?${paletteToQueryString(colors)}`);
  };

  if (
    pathname.includes("/palette") &&
    !getPaletteFromQueryParams(queryParams)
  ) {
    setPaletteBarInput(paletteBarInput);
  }

  const [activeColorKey, setActiveColorKey] = useState(0);
  const [isPaletteBarOpen, setIsPaletteBarOpen] = useState(true);

  const handlePaletteButtonClicked = () => {
    if (pathname.includes("/palette")) {
      setIsPaletteBarOpen(!isPaletteBarOpen);
    } else {
      pushPath(`/palette?${paletteToQueryString(getRandomPalette(5))}`);
      setIsPaletteBarOpen(true);
    }
  };

  const handlePickerColorChange = (colorHex: string) => {
    let newInput = [...paletteBarInput];
    newInput[activeColorKey] = tinycolor(colorHex);

    setPaletteBarInput(newInput);
  };

  const handleColorRefreshClick = () => {
    let newInput = [...paletteBarInput];
    newInput[activeColorKey] = tinycolor.random();

    setPaletteBarInput(newInput);
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
          render={() => (
            <PalettePage
              colors={paletteBarInput}
              activeColorKey={activeColorKey}
            />
          )}
        />

        <Route path="/about" render={() => <AboutPage />} />

        <Route
          render={() => (
            <Redirect
              to={`/palette?${paletteToQueryString(getRandomPalette(5))}`}
            />
          )}
        />
      </Switch>

      <PaletteBar
        colors={paletteBarInput}
        activeColorKey={activeColorKey}
        handleColorClick={setActiveColorKey}
        handlePickerColorChange={handlePickerColorChange}
        handleColorRefreshClick={handleColorRefreshClick}
        handleDragEnd={handleDragEnd}
        isVisible={isPaletteBarOpen && pathname.includes("/palette")}
      />

      <ButtonBar
        onRefreshClick={() => setPaletteBarInput(getRandomPalette(5))}
        isPaletteActive={pathname.includes("/palette")}
        isPaletteBarOpen={isPaletteBarOpen}
        onPaletteClick={handlePaletteButtonClicked}
        isHelpActive={pathname.includes("/about")}
        onHelpClick={() => pushPath("/about")}
      />
    </div>
  );
};

export default withRouter(App);
