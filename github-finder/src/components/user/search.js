import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    searchValue: "",
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.searchValue === "") {
      this.props.setAlert("Please enter something to search!!!", "light");
    } else {
      this.props.searchUsers(this.state.searchValue);
      this.setState({
        searchValue: "",
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            name="searchValue"
            type="text"
            placeholder="Search user..."
            onChange={this.onChangeHandler}
            value={this.state.searchValue}
          />
          <button className="btn btn-dark w-100" type="submit">
            Search
          </button>
        </form>
        {this.props.isShow && (
          <button
            onClick={this.props.clearUsers}
            className="btn btn-light w-100 my-1"
          >
            Clear users
          </button>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  isShow: PropTypes.bool.isRequired,
};

export default Search;
