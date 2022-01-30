import React, { useContext, useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import userContext from "../context/userContext";

const NavBar = () => {
  const { dispatch, appState } = useContext(userContext);
  let navigate = useNavigate();

  let profileUrl = "";

  if (appState.CurrentUser?.isDoner === true) {
    profileUrl = `/donor/profile/${appState.CurrentUser._id}`;
  } else if (appState.CurrentUser?.isDoner === false) {
    profileUrl = `/user/profile/${appState.CurrentUser._id}`;
  }

  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <NavLink to="/" className="logo d-flex align-items-center">
          <img src="assets/img/images/CS_LOGO.png" alt="" />
          <span>Crisis Stabilizer</span>
        </NavLink>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavLink className="nav-link scrollto " to="/">
                Home
              </NavLink>
            </li>
            {!appState.CurrentUser ? (
              <>
                <li>
                  <NavLink className="nav-link scrollto" to="/signin">
                    SingIn
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link scrollto" to="/signup">
                    Signup
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}
            {appState?.CurrentUser?.isDoner && (
              <li>
                <NavLink className="nav-link scrollto" to="/calender">
                  Calender
                </NavLink>
              </li>
            )}

            <li>
              <NavLink className="nav-link scrollto" to="/users">
                All Users
              </NavLink>
            </li>

            {profileUrl.length > 0 && (
              <>
                <li>
                  <NavLink className="getstarted scrollto" to={profileUrl}>
                    Profile
                  </NavLink>
                </li>
                <li>
                  <button
                    className="getstarted scrollto btn"
                    onClick={() => {
                      dispatch({ type: "LOG_OUT" });
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
