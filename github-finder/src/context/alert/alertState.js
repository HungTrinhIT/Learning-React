import React, { useReducer } from "react";
import { SET_ALERT } from "../type";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);
  //Set alert
  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => {
      dispatch({ type: SET_ALERT, payload: null });
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
