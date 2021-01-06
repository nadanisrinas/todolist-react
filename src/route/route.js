import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//component
import Todo from "../pages/ToDo/Todo";
import CreateToDo from "../pages/CreateToDo/CreateToDo";

const Path = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Todo} />
          <Route exact path="/create" component={CreateToDo} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default Path;
