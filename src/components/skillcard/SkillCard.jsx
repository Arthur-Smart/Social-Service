import React from "react";
import "./skillcard.css";
import { Link } from "react-router-dom";

function SkillCard({ item }) {
  return (
    <Link to={`/engagements?category=${item?.category}`}>
      <div className="skillcard">
        <img
          src={item?.img}
          alt="Skills hub"
        />

        <span className="title">{item?.heading}</span>
        <span className="desc">{item?.subHeading}</span>
        {/* <div className="h-[2px] w-3/4 bg-white stroke"></div> */}
      </div>
    </Link>
  );
}

export default SkillCard;
