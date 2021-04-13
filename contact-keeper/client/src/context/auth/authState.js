import React, { useReducer } from "react";
import AuthContext from "./authContext,";
import AuthReducer from "./authReducer";
const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Load user

  // Login user

  // Register user

  // Log out user

  //  Clear errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.isAuthenticated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
