import React, { useState } from "react";
import "./App.css";

import tinycolor from "tinycolor2";

import * as H from "history";
import { Route, Redirect, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import queryString from "query-string";

import ColorPage from "./ColorPage";

import IconButton from "./IconButton";

import PaletteBar from "./PaletteBar";

import { ColorResult } from "react-color";
import { DropResult } from "react-beautiful-dnd";

import reorder from "./reorder";
import getRandomPalatte from "./get-random-palette";

interface AppProps {
  location: H.Location;
  history: H.History;
}

const App: React.FC<AppProps> = props => {
  const { location, history } = props;
  const { pathname } = location;

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

  const [paletteBarInput, setPaletteBarInput] = useState(getRandomPalatte(5));
  const [activeColorKey, setActiveColorKey] = useState(0);
  const [isPaletteBarOpen, setIsPaletteBarOpen] = useState(true);

  const handlePaletteButtonClicked = () => {
    if (pathname.includes("/palette")) {
      setIsPaletteBarOpen(!isPaletteBarOpen);
    } else {
      history.push("palette");
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
          render={() => (
            <div>
              <h1>Palette</h1>
            </div>
          )}
        />

        <Route path="/help" render={() => <h1>Help</h1>} />

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
          onClick={() => history.push("color")}
        />

        <IconButton
          iconName="color_lens"
          isActive={pathname.includes("/palette")}
          filled={isPaletteBarOpen}
          onClick={() => handlePaletteButtonClicked()}
        />

        <IconButton
          iconName="help_outline"
          isActive={pathname.includes("/help")}
          onClick={() => history.push("help")}
        />
      </div>
    </div>
  );
};

export default withRouter(App);
