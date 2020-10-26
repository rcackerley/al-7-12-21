import React from "react";
import ReactDOM from "react-dom";
import "./_starter/index.css";
import { AppShell } from "./_starter/AppShell";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Icons from "./_starter/components/Icons";
import Colors from "./_starter/components/Colors";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/">
          <AppShell></AppShell>
        </Route>
        <Route path="/icons">
          <Icons />
        </Route>
        <Route path="/colors">
          <Colors />
        </Route>
      </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
