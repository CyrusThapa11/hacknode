import React, { useReducer } from "react";
import userContext from "./userContext";
import userReducer from "./userReducer";

const AppState = (props) => {
  const initialState = {
    CurrentUser: null,
    theme: "light",
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // create functions over here:

  const Login = (user) => {
    console.log("");
  };

  const SignUp = () => {};
  const SignIn = () => {};

  return (
    <userContext.Provider
      value={{ appState: state, dispatch, Login, SignUp, SignIn }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default AppState;
