import React from "react";
import "./about.css";

function About() {
  return (
    <section className="about flex items-center justify-center py-10">
      <div className="container info-wrapper rounded-md py-4 px-2">
        <h1 className="font-bold text-2xl text-amber-500">Why skillsHub</h1>
        <p className="text-white">
          Efficiently connecting Kenyans with skilled services, simplifying
          skill search and promoting trust. Skill diversity welcomed - hire
          based on abilities. We are not limited to academic certifications.
        </p>
        <div className="about-cards__wrapper mt-4">
          <div className="about-card px-4 py-7  rounded-md">
            <h2 className="text-white text-[16px] md:text-lg font-semibold">
              Simplifies Job Search <i class="fa-solid fa-magnifying-glass"></i>
            </h2>
            <p className="text-white text-[15px] mt-3">
              Users can easily find people with the right skills for the job
              they need to be done in Kenya. This saves them time and effort in
              searching for the right person.
            </p>
          </div>
          <div className="about-card px-4 py-7  rounded-md">
            <h2 className="text-white text-[16px] md:text-lg font-semibold">
              Location-Based Services <i class="fa-solid fa-flag"></i>
            </h2>
            <p className="text-white text-[15px] mt-3">
              The web application focuses on connecting people in Kenya, making
              it easier for users to find someone close to them who can help
              them with their job.
            </p>
          </div>
          <div className="about-card px-4 py-7 rounded-md">
            <h2 className="text-white text-[16px] md:text-lg font-semibold">
              Provides a Trustworthy Platform <i class="fa-solid fa-lock"></i>
            </h2>
            <p className="text-white text-[15px] mt-3">
              Users can rate and review each other based on their work, building
              trust between users and ensuring that the right person is hired
              for the job.
            </p>
          </div>
          <div className="about-card px-4 py-7  rounded-md">
            <h2 className="text-white text-[16px] md:text-lg font-semibold">
              Enhanced Communication <i class="fa-solid fa-message"></i>
            </h2>
            <p className="text-white text-[15px] mt-3">
              The messaging system in the web application enables users to
              communicate with each other about jobs and skill requirements,
              making it easier to find the right person for the job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
