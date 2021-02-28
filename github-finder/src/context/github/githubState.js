import React, { useReducer } from "react";
import {
  SEARCH_USERS,
  SET_LOADING,
  GET_USER_DETAIL,
  CLEAR_USERS,
  GET_REPOS,
} from "../type";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import UserServices from "../../services";
const GithubState = (props) => {
  const initialState = {
    users: [],
    repos: [],
    loading: false,
    userDetail: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search users
  const searchUsers = async (text) => {
    setLoading();
    const users = await UserServices.searchUsers(text);
    dispatch({ type: SEARCH_USERS, payload: users.data.items });
  };

  //Clear users
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  //Get user
  const getUser = async (username) => {
    setLoading(true);
    const user = await UserServices.getUserDetail(username);
    console.log(user.data);
    dispatch({ type: GET_USER_DETAIL, payload: user.data });
  };

  // Get repositorechies
  const getRepository = async (username) => {
    setLoading(true);
    const repos = await UserServices.getRepository(username);
    dispatch({ type: GET_REPOS, payload: repos.data });
  };
  //Set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        userDetail: state.userDetail,
        searchUsers,
        setLoading,
        getUser,
        clearUsers,
        getRepository,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
