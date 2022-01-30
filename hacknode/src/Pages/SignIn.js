import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userContext from "../context/userContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { dispatch, appState } = useContext(userContext);
  const [UserState, setUserState] = useState({
    email: "",
    password: "",
    name: "",
    isDonor: false,
  });
  const HandleChange = (e) => {
    e.preventDefault();
    setUserState({
      ...UserState,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let posturl = "users";
    let type = "SIGNIN_USER";
    if (UserState.isDonor) {
      posturl = "donors";
      type = "SIGNIN_DONOR";
    }
    const userr = await axios.post(
      `http://localhost:5000/${posturl}/signin`,
      UserState
    );
    // console.log("userr----->", userr);
    const user = userr.data.data;
    toast(userr.data.message);
    dispatch({
      type,
      payload: user,
    });
    let redirectUrl = `/user/profile/${user._id}`;
    if (UserState.isDonor) {
      redirectUrl = `/donor/profile/${user._id}`;
    }
    setUserState({ email: "", password: "", name: "" });
    navigate(redirectUrl);
  };

  // console.log("new state :", appState);

  return (
    <>
      <section
        className="vh-100"
        style={{ backgroundColor: "#eee", padding: "10px" }}
      >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div
                  className="card-body p-md-1"
                  // style={{ padding: "5px!important" }}
                >
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-2 mt-2">
                        SignIn
                      </p>

                      <form className="mx-1 mx-md-2">
                        <div className="d-flex flex-row align-items-center mb-1">
                          <i className="fas fa-user fa-md me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="name"
                              onChange={HandleChange}
                              value={UserState.name}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-1">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              name="email"
                              onChange={HandleChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-1">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="password"
                              onChange={HandleChange}
                              id="form3Example4c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>

                        {/* <div className="d-flex flex-row align-items-center mb-1">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              onChange={HandleChange}
                              id="form3Example4cd"
                              className="form-control"
                            />
                            <label className="form-label" htmlFor="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div> */}
                        <div className="form-check d-flex justify-content-center mb-3">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            id="form2Example3c"
                            name="isDoner"
                            checked={UserState.isDonor}
                            onChange={() =>
                              setUserState({
                                ...UserState,
                                isDonor: !UserState.isDonor,
                              })
                            }
                            // onClick={() =>
                            //   setUserState({
                            //     ...UserState,
                            //     isDonor: !UserState.isDonor,
                            //   })
                            // }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            Are you a <a href="#!">Donor ?</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-2 mb-1 mb-lg-1">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={handleClick}
                          >
                            Signin
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Pic"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
