import React from "react";
import AboutSection from "../Components/AboutSection";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Team from "../Components/Team";
import Testimonial from "../Components/Testimonial";
import VideoGallery from "../Components/VideoGallery";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AboutSection></AboutSection>
      <Blog></Blog>
      <Team></Team>
      <Testimonial></Testimonial>
      <VideoGallery></VideoGallery>
      <Footer></Footer>
    </div>
  );
};

export default Home;
