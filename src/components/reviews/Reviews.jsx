import React, { useState } from "react";
import Review from "../review/Review";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function Reviews({ serviceId }) {
  //const [changeText, setChangeText] = useState(false)
  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const userId = JSON.parse(localStorage.getItem("currentUser"))?._id;

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      axios(`https://serviceapi.onrender.com/api/reviews/${serviceId}`).then(
        (res) => {
          return res.data;
        }
      ),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return axios.post("https://serviceapi.onrender.com/api/reviews", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
  });

  //const userId = JSON.parse(localStorage.getItem("currentUser"))?._id;

  const handleSubmit = async () => {
    mutation.mutate({ serviceId, description, userId });
    setDescription("");
  };

  //({userId, serviceId, userReview})
  return (
    <div className="reviews w-full mt-3">
      <div className="top-bottom-review">
        <p className="text-zinc-500 text-[18px] font-bold">Reviews</p>
        {!user && (
          <p className="text-amber-300 font-semibold">
            Only Logged in users can comment{" "}
            <i class="fa-solid fa-circle-info"></i>
          </p>
        )}
        {user && (
          <div className="flex flex-col items-center justify-between my-2">
            <input
              onChange={(e) => setDescription(e.target.value)}
              className="review-input outline-0"
              type="text"
              placeholder="Write a review..."
            />
          </div>
        )}

        {user && (
          <div className="flex flex-wrap items-center justify-between my-2 ">
            <button
              onClick={() => handleSubmit()}
              className=" border-2 py-3 px-6 rounded-full hover:bg-amber-600 hover:border-amber-600 hover:text-white"
            >
              Send review
            </button>
          </div>
        )}
      </div>

      <div className="w-full">
        {data?.map((review) => (
          <Review
            key={review?._id}
            review={review}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
