import React from "react";
import Head from "../Components/Head";
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
        <Head></Head>
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
                        Ekeremgba Akpauche
                      </h4>
                      <h1 className="display-1 text-white mb-4">
                        Nkwalite omenaala na asusu igbo
                      </h1>
                      <p className="mb-5 fs-5">
                        Asompi nke umu akwukwo sekondiri niile no na aba diocese
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
                        Ekeremgba Akpauche
                      </h4>
                      <h1 className="display-2 text-white mb-4">
                        Igbasa ozi uru omenaala na asusu igbo bara
                      </h1>
                      <p className="mb-5 fs-5">Ihe omume nke ndi Aba Diocese</p>
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
