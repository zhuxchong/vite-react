import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "@/router";
function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          const { component: Component } = route;
          return (
            <Route
              render={(props) => {
                return <Component {...props} />;
              }}
              exact
              key={route.path}
              path={route.path}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
