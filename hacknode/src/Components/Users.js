import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./User.css";
import moment from "moment";
import Toast from "./Toast";
import { toast } from "react-toastify";

const Users = () => {
  let UserDataList = [];
  let [UserData, setUsersList] = useState([]);
  const getData = async () => {
    // console.log("getting users data");
    const users = await axios.get(`http://localhost:5000/users`);
    // console.log("users.data", users.data);

    setUsersList(users.data);
    UserDataList = [...UserData];
  };
  useEffect(() => {
    getData();
  }, []);

  const [location, setLocation] = useState("");

  let UsersList = UserData?.map((user) => (
    <div className="col-md-6 col-lg-4" key={user._id}>
      <div className="card card-margin">
        <div className="card-header no-border">
          <h5 className="card-title date-display">
            {" "}
            {moment(user.createdAt).format("YYYY-MM-DD")}
          </h5>
        </div>
        <div className="card-body pt-0">
          <div className="card-widget">
            <div className="card-widget-title-wrapper">
              <div className="card-widget-date-primary">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Maxwell Admin"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="card-widget-meeting-info">
                <span className="card-widget-pro-title">{user?.name}</span>
              </div>
            </div>
            <ol className="card-widget-meeting-points">
              <li className="card-widget-meeting-item">
                <span> Number of People : {user?.noOfPeople || 1} </span>
              </li>
              <li className="card-widget-meeting-item">
                <span> Location : {user?.location || "World"} </span>
              </li>
              <li className="card-widget-meeting-item">
                <span> City : {user?.city || "Somewhere"} </span>
              </li>
              <li className="card-widget-meeting-item">
                <span>Approximate people : {user.noOfPeople || 2} </span>
              </li>
              <li className="card-widget-meeting-item">
                <span>
                  Description : {user.description || "Water shortage"}{" "}
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  ));

  const handleClick = (e) => {
    e.preventDefault();
    // console.log("location--", location);
    if (location === "" || location.length === 0) {
      getData();
    }
    let newUsersList = [];
    UserData.forEach((user) => {
      if (user.city === location || user.location === location) {
        newUsersList.push(user);
      }
    });
    // console.log("newUsersList", newUsersList);
    setUsersList(newUsersList);
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
    // console.log("location--", location);
  };
  // console.log("UserData--", UserData);

  const sortByLatest = () => {
    let newUserList = [];
    newUserList = [...UserData];
    newUserList.sort((a, b) => a.createdAt - b.createdAt);
    console.log("newUserList", newUserList);
  };

  return (
    <>
      <div className="container mb-5" style={{ marginTop: "6rem" }}>
        <div className="row mb-4">
          <div className="container">
            <div className="form-group">
              <div className="row">
                <input
                  type="text"
                  className="form-control"
                  className="col-sm-3 "
                  name="location"
                  onChange={handleChange}
                />
                <button onClick={handleClick} className="col-sm-1 ">
                  Find
                </button>
                <div className="col-sm-3">
                  <button onClick={sortByLatest} className="">
                    Sort By latest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">{UsersList}</div>
      </div>
    </>
  );
};

export default Users;
