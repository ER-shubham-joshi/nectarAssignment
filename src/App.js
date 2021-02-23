import React from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./component/Login";
import UserDetails from "./component/UserDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/users">
            <UserDetails />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
