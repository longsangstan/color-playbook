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
  const queryParams = queryString.parse(props.location.search);

  const colorInput =
    typeof queryParams.input === "string" ? queryParams.input : "";

  const setColorInput = (input: string) => {
    props.history.push(`/picker/?input=${input.replace(/#/g, "")}`);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/picker"
            render={() => (
              <PickerPage
                colorInput={colorInput}
                setColorInput={setColorInput}
              />
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
