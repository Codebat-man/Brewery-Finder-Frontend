import React, { useState, useEffect } from "react";
import config from "../../config/config";
import { RxAvatar } from "react-icons/rx";
const Review = ({ review }) => {
  const { name, createdOn, rating, message } = review;

  return (
    <div className="p-6 mb-6 bg-yellow-50 border border-yellow-300 rounded-md lg:p-6">
      <div className="items-center justify-between block mb-4 lg:flex">
        <div className="flex flex-wrap items-center mb-4 lg:mb-0">
          <img
            src="../avatar.png"
            className="object-cover mb-1 mr-2 rounded-full shadow w-14 h-14 lg:mb-0"
            alt="Avatar"
          />
          <div>
            <h2 className="mr-2 text-lg font-medium text-yellow-800">{name}</h2>
          </div>
        </div>

        <div>
          <ul className="flex mb-1">
            {[...Array(rating)].map((_, i) => (
              <li key={i}>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 mr-1 text-yellow-400 bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mb-4 text-sm text-gray-600">{message}</p>
    </div>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${config.baseUrl}/api/review/read`) // Replace with the actual endpoint
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
<div className="grid grid-cols-3 px-8 py-24 space-x-8">
        {reviews.map((review, index) => (
          
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
