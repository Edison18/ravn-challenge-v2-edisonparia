import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../views/Home";
import { PageNotFound } from "../views/PageNotFound";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/:character"} component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
