import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleJob from "../singlejob/SingleJob";
import { Link } from "react-router-dom";
import Loader from "../../assets/loader.json";
import Lottie from "lottie-react";
import "./postedjobs.css";

function PostedJobs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios("https://serviceapi.onrender.com/api/jobs");
      setData(res.data);
    };
    getData();
  }, []);

  const randomData = data?.sort(() => Math.random() - 0.5).slice(0, 6);

  return (
    <div className="postedjobs flex flex-col items-center justify-between pt-7">
      <div className="container posted-jobs-wrapper items-start ">
        <p className=" text-2xl font-bold text-zinc-600">
          Are you <span className="text-indigo-800">skilled?</span> Someone is
          looking for you
        </p>
        <p className="text-zinc-500">Grab a job that you are good in</p>
      </div>
      <div className="container posted-jobs-wrapper flex flex-wrap gap-3 items-center justify-between mt-4">
        {randomData?.map((job) => (
          <SingleJob
            key={job?._id}
            job={job}
          />
        ))}
        {randomData && randomData.length === 0 && (
          <div className="container flex flex-col items-center justify-center py-2">
            <p className="-mb-[120px] font-semibold text-zinc-500">
              Please hold on a moment ...
            </p>
            <div style={{ width: "20%" }}>
              <Lottie
                loop={true}
                animationData={Loader}
              />
            </div>
          </div>
        )}
      </div>
      <div className="container p-b-wrapper items-start">
        <Link to="/jobs">
          <button className="border-[1px] border-indigo-800 hover:bg-indigo-800 hover:text-white py-3 px-10 rounded-full my-4">
            Explore more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostedJobs;
