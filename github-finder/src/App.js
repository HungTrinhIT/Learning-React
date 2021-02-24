import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/nav";
import axios from "axios";
import Users from "./components/user/users";
import Search from "./components/user/search";
import Alert from "./components/layout/alert";
import About from "./components/pages/about";
import UserDetail from "./components/user/userDetail";
const App = (props) => {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [userDetail, setUserDetail] = useState({});

  //Search users
  const searchUsers = async (text) => {
    setLoading(true);
    const users = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_sercret=${process.env.REACT_APP_GITHUB_CLIENT_SERCRET}`
    );
    setUsers(users.data.items);
    setLoading(false);
  };

  //Clear users
  const clearUsers = () => {
    setUsers([]);
  };

  //Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert({ alert: null });
    }, 3000);
  };

  // Get user
  const getUser = async (username) => {
    setLoading(true);

    const user = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_sercret=${process.env.REACT_APP_GITHUB_CLIENT_SERCRET}`
    );

    setUserDetail(user.data);
    setLoading(false);
  };

  // Get repositories
  const getRepository = async (userName) => {
    setLoading(true);
    const repos = await axios.get(
      `https://api.github.com/users/${userName}/repos?client_id=${process.env.REACT_APP_CLIENT_ID}&client_sercret=${process.env.REACT_APP_GITHUB_CLIENT_SERCRET}`
    );

    setRepos(repos.data);
    setLoading(false);
  };

  return (
    <Router>
      <div className="App">
        <NavBar title="Github Finder" />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    isShow={users.length !== 0}
                    setAlert={showAlert}
                  />
                  <Users users={users} loading={loading} />
                </>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <UserDetail
                  {...props}
                  getUser={getUser}
                  user={userDetail}
                  repos={repos}
                  loading={loading}
                  getRepository={getRepository}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
