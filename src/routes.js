import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ControlPage from "./pages/ControlPage";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/control" component={ControlPage} />
        <Route exact path="/info" component={InfoPage} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
