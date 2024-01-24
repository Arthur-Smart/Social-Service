import React from "react";
import "./about.css";

function About() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#3e4396"
          fill-opacity="1"
          d="M0,224L720,288L1440,288L1440,320L720,320L0,320Z"
        ></path>
      </svg>
      <div className="about flex items-center justify-center pb-10 pt-10">
        <div className="container about-wrapper flex items-center justify-between">
          <div className="about-left">
            <p className="text-3xl font-bold text-amber-500 mb-5">
              Why SkillsHub
            </p>
            <p className="mb-10 text-white">
              Efficiently connecting Kenyans with skilled services, simplifying
              skill search and promoting trust. Skill diversity welcomed - hire
              based on abilities. We are not limited to academic certifications
            </p>
            <div className="mt-7">
              <div className="flex items-center">
                <p className="number font-bold text-zinc-600">1</p>
                <p className="text-white text-xl font-bold ml-2 a-t-heading">
                  Simplifies the job search
                </p>
              </div>
              <p className="text-white">
                Users can easily find people with the right skills for the job
                they need to be done in Kenya. This saves them time and effort
                in searching for the right person.
              </p>
            </div>

            <div className="mt-7">
              <div className="flex items-center">
                <p className="number font-bold text-zinc-600">2</p>
                <p className="text-white text-xl font-bold ml-2 a-t-heading">
                  Location-Based Services
                </p>
              </div>
              <p className="text-white">
                The web application focuses on connecting people in Kenya,
                making it easier for users to find someone close to them who can
                help them with their job.
              </p>
            </div>

            <div className="mt-7">
              <div className="flex items-center">
                <p className="number font-bold text-zinc-600">3</p>
                <p className="text-white text-xl font-bold ml-2 a-t-heading">
                  Provides a Trustworthy Platform
                </p>
              </div>
              <p className="text-white">
                Users can rate and review each other based on their work,
                building trust between users and ensuring that the right person
                is hired for the job.
              </p>
            </div>

            <div className="mt-7">
              <div className="flex items-center">
                <p className="number font-bold text-zinc-600">4</p>
                <p className="text-white text-xl font-bold ml-2 a-t-heading">
                  Enhanced Communication
                </p>
              </div>
              <p className="text-white">
                {" "}
                The messaging system in the web application enables users to
                communicate with each other about jobs and skill requirements,
                making it easier to find the right person for the job.
              </p>
            </div>
          </div>
          <div className="about-right flex items-end justify-end">
            <img
              className="why-image"
              src={require("../../assets/business-deal.png")}
              alt="skills hub"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
