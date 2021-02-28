import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [searchValue, setSearchValue] = useState("");
  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (searchValue === "") {
      alertContext.setAlert("Please enter something to search!!!", "light");
    } else {
      githubContext.searchUsers(searchValue);
      setSearchValue("");
    }
  };
  const isShow = githubContext.users.length !== 0;
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
        <button onClick={githubContext.clearUsers} className="btn btn-light w-100 my-1">
          Clear users
        </button>
      )}
    </div>
  );
};

export default Search;
