import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
const Home = () => {
  return (
    <div>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1
              //  data-aos="fade-up"
              >
                Crisis stabilizer is here for rescue.
              </h1>
              <h2
              //  data-aos="fade-up"
              // data-aos-delay="400"
              >
                A community to come together and help the people.
              </h2>
              <div
              //  data-aos="fade-up"
              // data-aos-delay="600"
              >
                <div className="text-center text-lg-start">
                  <NavLink
                    to="/"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img">
              <img
                src="assets/img/images/help6.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div
            className="container"
            // data-aos="fade-up"
          >
            <div className="row gx-0">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
                // data-aos="fade-up"
                // data-aos-delay="200"
              >
                <div className="content">
                  <h3>What is crisis stabilizer ?</h3>
                  <h2>
                    It is a platform where people can come together to help the
                    people affected by any crisis or natural disaster
                  </h2>
                  <p>
                    A solution for the people who might be in difficult times of
                    their life.
                  </p>
                  <div className="text-center text-lg-start">
                    <NavLink
                      to="/"
                      className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 d-flex align-items-center"
                // data-aos="zoom-out"
                // data-aos-delay="200"
              >
                <img
                  src="assets/img/images/help4.jpg"
                  className="img-fluid"
                  alt=""
                  // style={{ maxWidth: "400px" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="counts" className="counts">
          <div
            className="container"
            // data-aos="fade-up"
          >
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <div>
                    <span
                      // data-purecounter-start="0"
                      // data-purecounter-end="232"
                      // data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i
                    className="bi bi-journal-richtext"
                    style={{ color: "#ee6c20" }}
                  ></i>
                  <div>
                    <span
                      // data-purecounter-start="0"
                      // data-purecounter-end="521"
                      // data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Projects</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-headset" style={{ color: "#15be56" }}></i>
                  <div>
                    <span
                      // data-purecounter-start="0"
                      // data-purecounter-end="1463"
                      // data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-people" style={{ color: "#bb0852" }}></i>
                  <div>
                    <span
                      // data-purecounter-start="0"
                      // data-purecounter-end="15"
                      // data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="features">
          <div
            className="container"
            // data-aos="fade-up"
          >
            <div
              className="row feture-tabs"
              // data-aos="fade-up"
            >
              <div className="col-lg-6">
                <h3>How to use it ?</h3>

                <ul className="nav nav-pills mb-3">
                  <li>
                    <NavLink
                      className="nav-link active"
                      // data-bs-toggle="pill"
                      to="#tab1"
                    >
                      Instructions
                    </NavLink>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1">
                    <p>
                      1) You can register as a user or as a donor ( who will
                      provide the user basics necessary items the person needs )
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2"></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2"></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <img
                  src="assets/img/images/help7.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
