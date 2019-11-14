import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Main;
