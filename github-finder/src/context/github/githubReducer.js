import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER_DETAIL,
  SEARCH_USERS,
  SET_LOADING,
} from "../type";

const githubReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        repos: [],
        userDetail: [],
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
