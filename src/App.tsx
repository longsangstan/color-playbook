import React from "react";
import "./App.css";

import * as H from "history";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";
import queryString from "query-string";

import PickerPage from "./PickerPage";

import IconButton from "./IconButton";

interface AppProps {
  location: H.Location;
  history: H.History;
}

const App: React.FC<AppProps> = props => {
  const queryParams = queryString.parse(props.location.search);

  const colorInput =
    typeof queryParams.input === "string" ? queryParams.input : "";

  const setColorInput = (input: string) => {
    props.history.push(`/?input=${input.replace(/#/g, "")}`);
  };

  return (
    <Router>
      <div className="App">
        <PickerPage colorInput={colorInput} setColorInput={setColorInput} />

        <div className="button-bar">
          <IconButton
            iconName="colorize"
            isActive={false}
            onClick={() => console.log("xx")}
          />

          <IconButton
            iconName="color_lens"
            isActive={false}
            onClick={() => console.log("xx")}
          />

          <IconButton
            iconName="help_outline"
            isActive={false}
            onClick={() => console.log("xx")}
          />
        </div>
      </div>
    </Router>
  );
};

export default withRouter(App);
