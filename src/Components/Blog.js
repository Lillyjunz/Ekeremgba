import React from "react";

const Blog = () => {
  return (
    <>
      <div>
        {/* Blog Start */}
        <div className="container-fluid blog py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary"> Eserese</h4>
              <h1 className="display-4 mb-4">
                {" "}
                Ekeremgba akpauche ndi gara aga
              </h1>
              <p className="mb-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur adipisci facilis cupiditate recusandae aperiam
                temporibus corporis itaque quis facere, numquam, ad culpa
                deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
              </p>
            </div>
            <div className="blog-carousel owl-carousel">
              <div className="blog-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-img p-4 pb-0">
                  <a href="#">
                    <img src="img/oja3.jpg" className="img-fluid w-100" alt />
                  </a>
                </div>
                <div className="blog-content p-4">
                  <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                    <div className="small">
                      <span className="fa fa-user text-primary me-2" /> Martin.C
                    </div>
                    <div className="small">
                      <span className="fa fa-calendar text-primary me-2" /> 30
                      Dec 2025
                    </div>
                  </div>
                  <a href="#" className="h4 d-inline-block mb-3">
                    Full Body Home Workout
                  </a>
                  <p className="mb-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eius libero soluta impedit eligendi? Quibusdam, laudantium.
                  </p>
                  <a href="#" className="btn btn-dark py-2 px-4 ms-2">
                    {" "}
                    <span className="me-2">Read More</span>{" "}
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="blog-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="blog-img p-4 pb-0">
                  <a href="#">
                    <img src="img/oja2.jpg" className="img-fluid w-100" alt />
                  </a>
                </div>
                <div className="blog-content p-4">
                  <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                    <div className="small">
                      <span className="fa fa-user text-primary me-2" /> Martin.C
                    </div>
                    <div className="small">
                      <span className="fa fa-calendar text-primary me-2" /> 30
                      Dec 2025
                    </div>
                  </div>
                  <a href="#" className="h4 d-inline-block mb-3">
                    31-Day Fitness Calendar
                  </a>
                  <p className="mb-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eius libero soluta impedit eligendi? Quibusdam, laudantium.
                  </p>
                  <a href="#" className="btn btn-dark py-2 px-4 ms-2">
                    {" "}
                    <span className="me-2">Read More</span>{" "}
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="blog-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="blog-img p-4 pb-0">
                  <a href="#">
                    <img src="img/stud2.jpg" className="img-fluid w-100" alt />
                  </a>
                </div>
                <div className="blog-content p-4">
                  <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                    <div className="small">
                      <span className="fa fa-user text-primary me-2" /> Martin.C
                    </div>
                    <div className="small">
                      <span className="fa fa-calendar text-primary me-2" /> 30
                      Dec 2025
                    </div>
                  </div>
                  <a href="#" className="h4 d-inline-block mb-3">
                    At Home Ab Workout
                  </a>
                  <p className="mb-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eius libero soluta impedit eligendi? Quibusdam, laudantium.
                  </p>
                  <a href="#" className="btn btn-dark py-2 px-4 ms-2">
                    {" "}
                    <span className="me-2">Read More</span>{" "}
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="blog-item">
                <div className="blog-img p-4 pb-0">
                  <a href="#">
                    <img src="img/oja4.jpg" className="img-fluid w-100" alt />
                  </a>
                </div>
                <div className="blog-content p-4">
                  <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                    <div className="small">
                      <span className="fa fa-user text-primary me-2" /> Martin.C
                    </div>
                    <div className="small">
                      <span className="fa fa-calendar text-primary me-2" /> 30
                      Dec 2025
                    </div>
                  </div>
                  <a href="#" className="h4 d-inline-block mb-3">
                    Full Body Home Workout
                  </a>
                  <p className="mb-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eius libero soluta impedit eligendi? Quibusdam, laudantium.
                  </p>
                  <a href="#" className="btn btn-dark py-2 px-4 ms-2">
                    {" "}
                    <span className="me-2">Read More</span>{" "}
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
        {/* Explore Fitness Start */}
        <div
          className="container-fluid explore py-5 wow zoomIn"
          data-wow-delay="0.2s"
        >
          <div className="container py-5 text-center">
            <h4 className="display-4 text-white mb-0">
              {" "}
              Ihe nkiri Ekeremgba akpauche nke gara aga
            </h4>
            <a
              className="btn btn-primary py-3 px-4 px-md-5 me-2"
              href="https://www.youtube.com/embed/DWRcNpR6Kdc"
            >
              <i className="fas fa-play-circle me-2" /> <span>Watch Video</span>
            </a>
          </div>
        </div>
        {/* Explore Fitness End */}
      </div>
    </>
  );
};

export default Blog;
