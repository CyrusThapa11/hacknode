import React, { useContext, useState } from "react";
import userContext from "../context/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// functions

const UserSignIn = () => {
  const navigate = useNavigate();
  const { dispatch, appState } = useContext(userContext);
  const [UserState, setUserState] = useState({ email: "", password: "" });
  const HandleChange = (e) => {
    e.preventDefault();
    console.log("changing");
    setUserState({
      ...UserState,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async (e) => {
    // console.log("signing in ");
    e.preventDefault();
    const userr = await axios.post(
      "http://localhost:5000/users/signin",
      UserState
    );
    // console.log("userr", userr.data);
    const { user } = userr.data;
    dispatch({
      type: "SIGNIN_USER",
      payload: user,
    });
    setUserState({ email: "", password: "" });
    navigate(`/user/${user._id}`);
  };

  console.log("new state :", appState);

  return (
    <div style={{ height: "50vh" }}>
      <h2>UserSignin</h2>
      <form>
        <input
          type="text"
          name="email"
          onChange={HandleChange}
          style={{ border: "2px solid skyblue", height: "40px" }}
          value={UserState.email}
        />
        <input
          name="password"
          type="password"
          onChange={HandleChange}
          style={{ border: "2px solid skyblue", height: "40px" }}
          value={UserState.password}
        />
        <button onClick={handleClick}>SignIn</button>
      </form>
    </div>
  );
};

export default UserSignIn;
