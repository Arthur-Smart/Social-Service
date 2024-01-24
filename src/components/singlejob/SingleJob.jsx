import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./singlejob.css";

function SingleJob({ job }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const getService = async () => {
      const res = await axios(
        `https://serviceapi.onrender.com/api/user/${job?.userId}`
      );
      setData(res.data);
    };
    getService();
  }, [job?.userId]);

  return (
    <div className="singlejob border-gray-200 single-j-border p-2 rounded-md">
      <div className="flex flex-col job-wrapper">
        <div className="flex">
          {data?.userImage ? (
            <img
              src={data?.userImage}
              alt="Skillshub"
            />
          ) : (
            <img
              src={require("../../assets/avatar.jpg")}
              alt="Skills hub"
            />
          )}
          <p className="ml-2 text-xl font-medium">{data?.name}</p>
        </div>
        <div className="mt-4">
          <p className="text-[16px] font-semibold">{job?.title}</p>
          <p className="text-zinc-900 text-[15px]">
            {job?.description.substring(0, 150)}...
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between location-button">
          <p className="text-amber-500 text-lg">
            <i class="fa-solid fa-location-dot text-[15px]"></i> {job?.location}
          </p>
          <Link to={`/job/${job?._id}`}>
            {" "}
            <button className="job-post-btn py-2 px-10 text-white rounded-full">
              More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleJob;
