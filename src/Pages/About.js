import React from "react";
import AboutSection from "../Components/AboutSection";
import Footer from "../Components/Footer";
import Head from "../Components/Head";
import Team from "../Components/Team";

const About = () => {
  return (
    <div>
      <Head></Head>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Maka Anyi
          </h4>
        </div>
      </div>
      <AboutSection></AboutSection>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};

export default About;
