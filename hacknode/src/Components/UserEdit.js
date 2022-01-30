import React, { useContext, useEffect, useState } from "react";
import userContext from "../context/userContext";
import "./Edit.css";
import axios from "axios";
import { toast } from "react-toastify";

const UserEdit = () => {
  const { dispatch, appState } = useContext(userContext);
  console.log("appState", appState);

  const { CurrentUser } = appState;
  console.log("CurrentUser", CurrentUser);
  let intiState = {
    name: CurrentUser.name,
    email: CurrentUser.email,
    description: CurrentUser?.description,
    noOfPeople: CurrentUser?.noOfPeople,
    itemsRequired: CurrentUser?.itemsRequired,
    city: CurrentUser?.city,
    location: CurrentUser?.location,
  };

  const [userData, setUserData] = useState(intiState);

  const updateData = async (e) => {
    e.preventDefault();
    const result = await axios.put(
      `http://localhost:5000/users/edit/${CurrentUser._id}`,
      {
        ...userData,
      }
    );
    toast(result.data.message);
    console.log("result is --- ", result);
    // update data in context api :
    dispatch({ type: "UPDATE_DONOR", payload: result.data.user });
  };
  console.log("USERDATA____", userData);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="container" style={{ marginTop: "6rem" }}>
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-60">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Maxwell Admin"
                      />
                    </div>
                    <h5 className="user-name">{CurrentUser.name}</h5>
                    <h6 className="user-email">{CurrentUser.email}</h6>
                  </div>
                  {/* <div className="about">
                    <h5>About</h5>
                    <p>
                      I'm Yuki. Full Stack Designer I enjoy creating
                      user-centric, delightful and human experiences.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-70">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label HtmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="name"
                        onChange={handleChange}
                        value={userData.name}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label HtmlFor="eMail">
                        Short Description about the cirsis{" "}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="eMail"
                        name="description"
                        onChange={handleChange}
                        value={userData.description}
                        // placeholder="Water shortage since 3days..."
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label HtmlFor="phone">
                        Approximate number of people
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="noOfPeople"
                        onChange={handleChange}
                        value={userData.noOfPeople}
                        placeholder="6"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label HtmlFor="website">Items required</label>
                      <input
                        type="text"
                        className="form-control"
                        id="website"
                        name="itemsRequired"
                        onChange={handleChange}
                        value={userData.itemsRequired}
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mt-3 mb-2 text-primary">Address</h6>
                  </div>

                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label HtmlFor="Location">Location</label>
                        <input
                          type="name"
                          className="form-control"
                          id="Location"
                          name="location"
                          onChange={handleChange}
                          value={userData.location}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label HtmlFor="ciTy">City</label>
                        <input
                          type="name"
                          className="form-control"
                          id="ciTy"
                          name="city"
                          onChange={handleChange}
                          value={userData.city}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters mt-3">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <div className="text-right">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-secondary mx-3"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-primary"
                        onClick={updateData}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default UserEdit;
