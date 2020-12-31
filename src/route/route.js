import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//component
import Todo from "../pages/Todo";

const Path = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Todo} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default Path;
