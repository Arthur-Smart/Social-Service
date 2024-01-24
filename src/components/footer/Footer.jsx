import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";

function Footer() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (title === "") {
      alert("Please fill the search field");
    } else {
      navigate(`engagements?search=${title}`);
    }
  };

  return (
    <div className="footer flex flex-col items-center justify-center py-10">
      <div className="line"></div>
      <div className="container footer-wrapper-m flex flex-col items-center justify-center">
        <img
          className="flag"
          src={require("../../assets/flag.png")}
          alt="skill hub"
        />
        <p className="text-zinc-500 mb-2 text-lg">A solution for kenyans</p>
        <div className="footer-search-button items-center  flex">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="location-s-input border-[1px] mb-25 px-2 py-3 outline-0 "
            type="Type Location"
            placeholder="Search"
          />
          <button
            onClick={() => handleSearch()}
            className="text-white  border-[1px]  bg-red-500 py-3 px-10  "
          >
            Search
          </button>
        </div>
      </div>
      <div className="container footer-b-wrapper flex items-center justify-between mt-3">
        <div className="footer-left flex items-center">
          <p className="text-zinc-400 text-3xl font-bold">SkillsHub</p>
          <p className="ml-3 text-zinc-400">
            Developed with love by Arthur &copy;2023
          </p>
        </div>
        <div className="foooter-right flex items-center">
          <a
            href="https://web.facebook.com/profile.php?id=100064319250841"
            target="_blank"
          >
            <p className="text-zinc-400 text-2xl">
              <i class="fa-brands fa-square-facebook"></i>
            </p>
          </a>
          <a
            href="https://www.instagram.com/exquitech.co/"
            target="_blank"
          >
            {" "}
            <p className="text-zinc-400 text-2xl ml-2">
              <i class="fa-brands fa-square-instagram"></i>
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/arthur-mwangi-7a80761bb/"
            target="_blank"
          >
            <p className="text-zinc-400 text-2xl ml-2">
              <i class="fa-brands fa-linkedin"></i>
            </p>
          </a>
          <p className="text-zinc-400 text-2xl ml-2">
            <i class="fa-brands fa-square-whatsapp"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
