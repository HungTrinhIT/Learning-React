import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layout/nav";
import axios from "axios";
import Users from "./components/user/users";
import Search from "./components/user/search";
import Alert from "./components/layout/alert";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
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

  render() {
    let { users, loading } = this.state;
    return (
      <div className="App">
        <NavBar title="Github Finder" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            isShow={users.length !== 0}
            setAlert={this.setAlert}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
