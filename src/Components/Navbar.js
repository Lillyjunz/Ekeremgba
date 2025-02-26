import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        {/* Spinner Start */}
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        {/* Spinner End */}
        {/* Navbar & Hero Start */}
        <div className="container-fluid header-top">
          <div className="nav-shaps-2 " />
          <div className="container d-flex align-items-center ">
            <div className="d-flex align-items-center h-100 ">
              <a href="#" className="navbar-brand ">
                <img src="img/log.png" width={90} alt="Logo" />
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
                          ekeremgbaakpauche@gmail.com
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
                    <img src="img/logo.png" width={70} alt="Logo" />
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
                      <a href="index.html" className="nav-item nav-link active">
                        Ulo
                      </a>
                      <a href="about.html" className="nav-item nav-link">
                        Maka anyi
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
                        Ikwere anyi
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

        {/* Carousel Start */}
        <div className="header-carousel owl-carousel overflow-hidden bg-dark">
          <div className="header-carousel-item hero-section">
            <div className="hero-bg-half-1" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-7 animated fadeInLeft">
                    <div className="text-sm-center text-md-start">
                      <h4 className="text-primary text-uppercase fw-bold mb-4">
                        Wellcome to our fitness Center
                      </h4>
                      <h1 className="display-1 text-white mb-4">
                        The best gym center is now in your city
                      </h1>
                      <p className="mb-5 fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy...
                      </p>
                      <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                        <a
                          className="btn btn-dark py-3 px-4 px-md-5 me-2"
                          href="#"
                        >
                          <i className="fas fa-play-circle me-2" />{" "}
                          <span>Watch Video</span>
                        </a>
                        <a
                          className="btn btn-primary py-3 px-4 px-md-5 ms-2"
                          href="#"
                        >
                          <span>Learn More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-carousel-item hero-section">
            <div className="hero-bg-half-2" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-7 animated fadeInLeft">
                    <div className="text-sm-center text-md-start">
                      <h4 className="text-primary text-uppercase fw-bold mb-4">
                        Wellcome to our fitness Center
                      </h4>
                      <h1 className="display-2 text-white mb-4">
                        Stay healthy by exercising at the best gym center
                      </h1>
                      <p className="mb-5 fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy...
                      </p>
                      <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                        <a
                          className="btn btn-dark py-3 px-4 px-md-5 me-2"
                          href="#"
                        >
                          <i className="fas fa-play-circle me-2" />{" "}
                          <span>Watch Video</span>
                        </a>
                        <a
                          className="btn btn-primary py-3 px-4 px-md-5 ms-2"
                          href="#"
                        >
                          <span>Learn More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel End */}
      </div>
    </>
  );
};

export default Navbar;
