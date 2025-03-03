import React from "react";
import Footer from "../Components/Footer";
import Head from "../Components/Head";

const Contact = () => {
  return (
    <div>
      <Head></Head>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Ikwere Anyi
          </h4>
        </div>
      </div>
      {/* Contact Start */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="mb-4">
                <h4 className="text-primary">Kweere Anyi</h4>
                <h1 className="display-4 mb-4">
                  Maka Ajuju, kweere ndi otu ekeremgba akpauche
                </h1>
                {/* <p className="mb-4">
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax &amp; PHP in a few minutes.
                  Just copy and paste the files, add a little code and you're
                  done.{" "}
                  <a
                    className="text-primary fw-bold"
                    href="https://htmlcodex.com/contact-form"
                  >
                    Download Now
                  </a>
                  .
                </p> */}
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="bg-white d-flex">
                      <i className="fas fa-map-marker-alt fa-2x text-primary me-2" />
                      <div>
                        <h4>Address</h4>
                        <p className="mb-0">CKC Aba, Abia state</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="bg-white d-flex">
                      <i className="fas fa-envelope fa-2x text-primary me-2" />
                      <div>
                        <h4>Mail Us</h4>
                        <p className="mb-0">ekeremgbaakpauche@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="bg-white d-flex">
                      <i className="fa fa-phone-alt fa-2x text-primary me-2" />
                      <div>
                        <h4>Telephone</h4>
                        <p className="mb-0">+234 913 413 7003</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="bg-white d-flex">
                      <i className="fab fa-firefox-browser fa-2x text-primary me-2" />
                      <div>
                        <h4>Yoursite@ex.com</h4>
                        <p className="mb-0">(+012) 3456 7890</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex ms-2 mb-5">
                <a className="btn btn-dark py-2 px-3 px-sm-4 me-2" href="#">
                  {" "}
                  <span>facebook</span>{" "}
                  <i className="fas fa-chevron-circle-right" />
                </a>
                <a className="btn btn-dark py-2 px-3 px-sm-4 mx-2" href="#">
                  {" "}
                  <span>twitter</span>{" "}
                  <i className="fas fa-chevron-circle-right" />
                </a>
                <a className="btn btn-dark py-2 px-3 px-sm-4 ms-2" href="#">
                  {" "}
                  <span>instagram</span>{" "}
                  <i className="fas fa-chevron-circle-right" />
                </a>
              </div>
              <div className="contact-banner">
                <div className="row g-0">
                  <div className="col-9">
                    <div className="p-4 pe-0">
                      <h4 className="display-5 mb-0">
                        Maka Enyemaka n'ikwado ekeremgbaakpauche
                      </h4>
                      <div className="d-flex align-items-center">
                        <h4 className="h5 mb-0 me-3">Bank Name</h4>
                      </div>
                      <div className="d-flex align-items-center">
                        <h4 className="h5 mb-0 me-3">Acc No</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
              <div className="form-section bg-dark p-5 h-100">
                <h1 className="display-4 text-white mb-4">Deere Anyi</h1>
                <form>
                  <div className="row g-4">
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating form-section-col">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Aha gi</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating form-section-col">
                        <input
                          type="email"
                          className="form-control border-0"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email"> Email gi</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating form-section-col">
                        <input
                          type="phone"
                          className="form-control border-0"
                          id="phone"
                          placeholder="Phone"
                        />
                        <label htmlFor="phone">Akara Ekwenti gi</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating form-section-col">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="project"
                          placeholder="Project"
                        />
                        <label htmlFor="project">Your Project</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating form-section-col">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Isi Okwu</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 160 }}
                          defaultValue={""}
                        />
                        <label htmlFor="message">Ozi gi</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue="#"
                          id="flexCheck"
                        />
                        <label className="form-check-label" htmlFor="flexCheck">
                          I agree with the site privacy policy
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-section-col">
                        <button className="btn-primary w-100 py-3 px-5">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
