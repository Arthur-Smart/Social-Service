import React from "react";
import { Link } from "react-router-dom";
import "./recommend.css";

function Recommend() {
  return (
    <div className="recommend flex  items-center justify-center">
      <div className="container recommend-wrapper flex-col flex items-center justify-center">
        <p className="text-white text-xl md:text-2xl text-center">
          <span className="recommend-title text-amber-500 font-bold text-6xl">
            SkillHub
          </span>
          <br /> The Leading Skill Search for Your Business in Kenya.
        </p>
        <div className="container mt-4 engament-btns flex flex-col md:flex-row flex-wrap items-center justify-center">
          <Link
            to="/engagements"
            className="recommend-link"
          >
            <button className="border-[1px] py-2 px-5  border-amber-500 rounded-full recommend-btn-1 text-white">
              Hire a skill
            </button>
          </Link>
          <Link
            to="/engagements"
            className="recommend-link"
          >
            <button className="border-[1px] py-2 px-5 rounded-full recomment-btn-2 ml-2 text-white">
              Give reviews
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recommend;
