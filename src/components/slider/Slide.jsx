import React, { useState, useRef, useEffect } from "react";
import { skillsData } from "../../data";
import SkillCard from "../skillcard/SkillCard";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import "./slide.css";

function Slide() {
  const data = skillsData;
  const items = data.map((item) => (
    <SkillCard
      key={item.id}
      item={item}
    />
  ));

  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 2,
    },
    880: {
      items: 3,
    },
    1020: {
      items: 4,
    },
    1120: {
      items: 5,
    },
  };
  return (
    <div className="slide flex flex-col items-center justify-center py-10">
      <div className="container slider-wrapper">
        <p className="text-2xl font-bold text-zinc-600">
          Local skills to solve your need
        </p>
        <p className="text-zinc-500">
          From capentry | Barber | Salonist | Stone builder and more. Check you
          choise search
        </p>
      </div>
      <div className="container caurosel-div flex items-center mt-3  flex-col">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls={false}
          disableButtonsControls
          responsive={responsive}
          items={items}
        />
      </div>
    </div>
  );
}

export default Slide;
