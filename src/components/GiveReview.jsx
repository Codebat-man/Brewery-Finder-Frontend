import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import config from "../config/config";
import toast, { Toaster } from "react-hot-toast";

const GiveReview = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      name,
      email,
      rating,
      message
    };

    try {
      const response = await fetch(`${config.baseUrl}/api/review/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });
      console.log(response);

      if (response.ok) {
        toast.success("Review saved successfully!");

        window.scrollTo(0, 0);

        // Clear form data
        setName("");
        setEmail("");
        setRating(0);
        setMessage("");
      } else {
        toast.error("Failed to save the review.");
      }
    } catch (error) {
      toast.error("Error while saving the review");
    }
  };

  return (
    <div>
      <Toaster />
      <div className="p-6 border border-yellow-400 bg-white rounded-md">
        <h2 className="px-2 mb-6 text-2xl font-semibold text-left text-yellow-900">
          Leave a comment
        </h2>
        <form onSubmit={handleSubmit} className="">
          <div className="px-2 mb-6">
            <label
              htmlFor="review"
              className="block mb-2 font-medium text-gray-700"
            >
              Your review *
            </label>
            <textarea
              id="review"
              placeholder="Write a review"
              required
              className="block w-full px-4 leading-tight text-gray-700 border rounded bg-gray-50 py-7"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="px-2 mb-6">
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-700"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              required
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded bg-gray-50 lg:mb-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="px-2 mb-6">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              placeholder="abc@gmail.com"
              required
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded bg-gray-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pb-8">
            <h2>Rating</h2>
            <ReactStars
              count={5}
              size={24}
              value={rating}
              onChange={ratingChanged}
              activeColor="#ffd700"
            />
          </div>
          <div className="px-2">
            <button
              type="submit"
              className="px-4 py-2 font-medium text-gray-100 bg-yellow-800 rounded shadow hover:bg-yellow-700"
            >
              Submit Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiveReview;
