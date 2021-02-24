import React, {  useState } from "react";
import PropTypes from "prop-types";

const Search = ({ setAlert, searchUsers, isShow, clearUsers }) => {
  const [searchValue, setSearchValue] = useState("");
  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (searchValue === "") {
      setAlert("Please enter something to search!!!", "light");
    } else {
      searchUsers(searchValue);
      setSearchValue("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          name="searchValue"
          type="text"
          placeholder="Search user..."
          onChange={onChangeHandler}
          value={searchValue}
        />
        <button className="btn btn-dark w-100" type="submit">
          Search
        </button>
      </form>
      {isShow && (
        <button onClick={clearUsers} className="btn btn-light w-100 my-1">
          Clear users
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  isShow: PropTypes.bool.isRequired,
};

export default Search;
