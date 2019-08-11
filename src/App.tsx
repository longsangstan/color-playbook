import React from "react";
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
    history.push(`/picker/?input=${input.replace(/#/g, "")}`);
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

        <Route path="/palette" render={() => <h1>Palette</h1>} />

        <Route path="/help" render={() => <h1>Help</h1>} />

        <Route render={() => <Redirect to="/picker" />} />
      </Switch>

      <div className="button-bar">
        <IconButton
          iconName="colorize"
          isActive={false}
          onClick={() => history.push("/picker")}
        />

        <IconButton
          iconName="color_lens"
          isActive={false}
          onClick={() => history.push("/palette")}
        />

        <IconButton
          iconName="help_outline"
          isActive={false}
          onClick={() => history.push("/help")}
        />
      </div>
    </div>
  );
};

export default withRouter(App);
