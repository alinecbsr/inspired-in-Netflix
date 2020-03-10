import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainContent from "./pages/MainContent";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainContent} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
