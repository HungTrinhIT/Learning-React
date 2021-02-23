import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/nav";
import axios from "axios";
import Users from "./components/user/users";
import Search from "./components/user/search";
import Alert from "./components/layout/alert";
import About from "./components/pages/about";
import UserDetail from "./components/user/userDetail";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    userDetail: {},
  };

  //Search users
  searchUsers = async (text) => {
    this.setState({
      loading: true,
    });
    const users = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_sercret=${process.env.REACT_APP_GITHUB_CLIENT_SERCRET}`
    );
    this.setState({
      users: users.data.items,
      loading: false,
    });
  };

  //Clear users
  clearUsers = () => {
    this.setState({
      users: [],
    });
  };

  //Set alert
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type },
    });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  // Get user
  getUser = async (username) => {
    this.setState({
      loading: true,
    });

    const user = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_sercret=${process.env.REACT_APP_GITHUB_CLIENT_SERCRET}`
    );
    this.setState({
      userDetail: user.data,
      loading: false,
    });
  };
  render() {
    let { users, loading, userDetail } = this.state;
    return (
      <Router>
        <div className="App">
          <NavBar title="Github Finder" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      isShow={users.length !== 0}
                      setAlert={this.setAlert}
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
                    getUser={this.getUser}
                    user={userDetail}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
