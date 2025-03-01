import React from "react";

const images = [
  "/img/stud.jpg",
  "/img/stud1.jpg",
  "/img/for.jpg",
  "/img/forr.jpg",
  "/img/f.jpg",
  "/img/eker.jpg",
];

const PhotoGallery = () => {
  return (
    <>
      <div className="container-fluid header-top">
        <div className="nav-shaps-2 " />
        <div className="container d-flex align-items-center ">
          <div className="d-flex align-items-center h-100 ">
            <a href="#" className="navbar-brand ">
              <img src="img/logooo.png" width={140} alt="Logo" />
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
            <div className="nav-bar px-0 py-lg-0" style={{ height: 85 }}>
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
                      Ebe ngosi
                    </a>
                    <a href="blog.html" className="nav-item nav-link">
                      Akuko
                    </a>
                    {/* <div className="nav-item dropdown">
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
                      </div> */}
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

      {/* navbar end */}

      <div
        style={{ height: "200px", backgroundColor: "#C80036", color: "white" }}
      >
        <h1
          className="d-flex justify-content-center align-items-center"
          style={{ color: "white" }}
        >
          Ihe Ngosi Foto
        </h1>
      </div>
      {/* <div className="gallery">
        {images.map((src, index) => (
          <div className="card" key={index}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div> */}

      <div className="gallery-container">
        <div className="gallery">
          {images.map((src, index) => (
            <div className="card" key={index}>
              <img src={src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
