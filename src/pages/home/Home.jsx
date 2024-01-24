import React from "react";
import About from "../../components/about/About";
import Recommend from "../../components/recommend/Recommend";
import ServicesCarousel from "../../components/carousel/ServicesCarousel";
import HomeHero from "../../components/homehero/HomeHero";
import PostedJobs from "../../components/postedjobs/PostedJobs";
import Slide from "../../components/slider/Slide";
import SliderTech from "../../components/slidertech/SliderTech";
import "./home.css";
import HowToEngage from "../../components/howtoengage/HowToEngage";

function Home() {
  return (
    <div className="home flex flex-col items-center justify-center">
      <HomeHero />
      <Slide />
      <SliderTech />
      <PostedJobs />
      <About />
      <ServicesCarousel />
      <Recommend />
      <HowToEngage />
    </div>
  );
}

export default Home;
