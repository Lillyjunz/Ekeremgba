import React from "react";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <div>
        {/* Navbar & Hero Start */}
        <div className="container-fluid header-top">
          <div className="nav-shaps-2" />
          <div className="container d-flex align-items-center">
            <div className="d-flex align-items-center h-100">
              <a href="#" className="navbar-brand" style={{ height: 125 }}>
                <h1 className="text-primary mb-0">
                  <i className="fas fa-hand-rock me-2" /> Fitness
                </h1>
                {/* <img src="img/logo.png" alt="Logo"> */}
              </a>
            </div>
            <div className="w-100 h-100">
              <div
                className="topbar px-0 py-2 d-none d-lg-block"
                style={{ height: 45 }}
              >
                <div className="row gx-0 align-items-center">
                  <div className="col-lg-8 text-center text-lg-center mb-lg-0">
                    <div className="d-flex flex-wrap">
                      <div className="pe-4">
                        <a
                          href="mailto:example@gmail.com"
                          className="text-muted small"
                        >
                          <i className="fas fa-envelope text-primary me-2" />
                          example@gmail.com
                        </a>
                      </div>
                      <div className="pe-0">
                        <a
                          href="mailto:example@gmail.com"
                          className="text-muted small"
                        >
                          <i className="fa fa-clock text-primary me-2" />
                          Mon - Sat: 8.00 am-7.00 pm
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-flex justify-content-end">
                      <div className="d-flex align-items-center small">
                        <a href="#" className="login-btn text-body me-3 pe-3">
                          {" "}
                          <span>Login</span>
                        </a>
                        <a href="#" className="text-body me-3">
                          {" "}
                          Register
                        </a>
                      </div>
                      <div className="d-flex pe-3">
                        <a className="btn p-0 text-primary me-3" href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn p-0 text-primary me-3" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a className="btn p-0 text-primary me-3" href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a className="btn p-0 text-primary me-0" href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-bar px-0 py-lg-0" style={{ height: 80 }}>
                <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
                  <a href="#" className="navbar-brand-2">
                    <h1 className="text-primary mb-0">
                      <i className="fas fa-hand-rock me-2" /> Fitness
                    </h1>
                    {/* <img src="img/logo.png" alt="Logo"> */}
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                  >
                    <span className="fa fa-bars" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-0 mx-lg-auto">
                      <a href="index.html" className="nav-item nav-link">
                        Home
                      </a>
                      <a href="about.html" className="nav-item nav-link active">
                        About
                      </a>
                      <a href="course.html" className="nav-item nav-link">
                        Courses
                      </a>
                      <a href="blog.html" className="nav-item nav-link">
                        Blogs
                      </a>
                      <div className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link"
                          data-bs-toggle="dropdown"
                        >
                          <span className="dropdown-toggle">Pages</span>
                        </a>
                        <div className="dropdown-menu">
                          <a href="feature.html" className="dropdown-item">
                            Our Features
                          </a>
                          <a href="team.html" className="dropdown-item">
                            Our team
                          </a>
                          <a href="testimonial.html" className="dropdown-item">
                            Testimonial
                          </a>
                          <a href="404.html" className="dropdown-item">
                            404 Page
                          </a>
                        </div>
                      </div>
                      <a href="contact.html" className="nav-item nav-link">
                        Contact
                      </a>
                      <div className="nav-btn ps-3">
                        <button
                          className="btn-search btn btn-primary btn-md-square mt-2 mt-lg-0 mb-4 mb-lg-0 flex-shrink-0"
                          data-bs-toggle="modal"
                          data-bs-target="#searchModal"
                        >
                          <i className="fas fa-search" />
                        </button>
                        <a
                          href="#"
                          className="btn btn-primary py-2 px-4 ms-0 ms-lg-3"
                        >
                          {" "}
                          <span>Get Quote</span>
                        </a>
                      </div>
                      <div className="nav-shaps-1" />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar & Hero End */}
        {/* Modal Search Start */}
        <div
          className="modal fade"
          id="searchModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Search by keyword
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body d-flex align-items-center bg-primary">
                <div className="input-group w-75 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                  />
                  <span
                    id="search-icon-1"
                    className="btn bg-light border nput-group-text p-3"
                  >
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Search End */}
      </div>

      <div>
        {/* Modal Search Start */}
        <div
          className="modal fade"
          id="searchModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Search by keyword
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body d-flex align-items-center bg-primary">
                <div className="input-group w-75 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                  />
                  <span
                    id="search-icon-1"
                    className="btn bg-light border nput-group-text p-3"
                  >
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Search End */}
        {/* Header Start */}
        <div className="container-fluid bg-breadcrumb">
          <div className="container text-center py-5" style={{ maxWidth: 900 }}>
            <h4
              className="text-white display-4 mb-4 wow fadeInDown"
              data-wow-delay="0.1s"
            >
              About Us
            </h4>
            <ol
              className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
              data-wow-delay="0.3s"
            >
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active text-primary">About</li>
            </ol>
          </div>
        </div>
        {/* Header End */}
        {/* About Start */}
        <div className="container-fluid about pt-5">
          <div className="container pt-5">
            <div className="row g-5">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="about-content h-100">
                  <h4 className="text-primary">About Fitness Center</h4>
                  <h1 className="display-4 text-white mb-4">
                    We are the best at fulfilling your potential and achieving
                    your goals.
                  </h1>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                    impedit accusantium autem quaerat natus nesciunt veritatis
                    fugiat dolor eaque fuga.
                  </p>
                  <div className="tab-class pb-4">
                    <ul className="nav d-flex mb-2">
                      <li className="nav-item mb-3">
                        <a
                          className="d-flex py-2 active"
                          data-bs-toggle="pill"
                          href="#tab-1"
                        >
                          <span style={{ width: 150 }}>Our Mission</span>
                        </a>
                      </li>
                      <li className="nav-item mb-3">
                        <a
                          className="d-flex py-2 mx-3"
                          data-bs-toggle="pill"
                          href="#tab-2"
                        >
                          <span style={{ width: 150 }}>Our Vision</span>
                        </a>
                      </li>
                      <li className="nav-item mb-3">
                        <a
                          className="d-flex py-2"
                          data-bs-toggle="pill"
                          href="#tab-3"
                        >
                          <span style={{ width: 150 }}>Our Goal</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row">
                          <div className="col-12">
                            <div className="d-flex align-items-center border-top border-bottom py-4">
                              <span className="fas fa-rocket text-white fa-4x me-4" />
                              <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="row">
                          <div className="col-12">
                            <div className="d-flex align-items-center border-top border-bottom py-4">
                              <span className="fas fa-rocket text-white fa-4x me-4" />
                              <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="tab-3" className="tab-pane fade show p-0">
                        <div className="row">
                          <div className="col-12">
                            <div className="d-flex align-items-center border-top border-bottom py-4">
                              <span className="fas fa-rocket text-white fa-4x me-4" />
                              <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-4 align-items-center">
                    <div className="col-sm-6">
                      <a href="#" className="btn btn-primary py-3 px-5">
                        {" "}
                        <span>Make Appointment</span>
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex flex-shrink-0 ps-4">
                        <a
                          href="#"
                          className="btn btn-light btn-lg-square position-relative wow tada"
                          data-wow-delay=".9s"
                        >
                          <i className="fa fa-phone-alt fa-2x" />
                          <div
                            className="position-absolute"
                            style={{ top: 5, right: 5 }}
                          >
                            <span>
                              <i className="fa fa-comment-dots text-dark" />
                            </span>
                          </div>
                        </a>
                        <div className="d-flex flex-column ms-3">
                          <span>Call to Our Experts</span>
                          <a href="tel:+ 0123 456 7890">
                            <span className="text-white">
                              Free: + 0123 456 7890
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="about-img h-100">
                  <div className="about-img-inner d-flex h-100">
                    <img
                      src="img/about-2.png"
                      className="img-fluid w-100"
                      style={{ objectFit: "cover" }}
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
