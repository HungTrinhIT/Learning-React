import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/nav";

import Alert from "./components/layout/alert";
import About from "./components/pages/about";
import UserDetail from "./components/user/userDetail";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";
import Home from "./components/pages/home";
import NotFound from "./components/pages/notfound";
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar title="Github Finder" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={UserDetail} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
