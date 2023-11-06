import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <section className="h-screen bg-center bg-no-repeat bg-cover bg-gradient-to-r from-yellow-700 to-yellow-100 ">
      <div className="flex items-center h-full lg:h-screen">
        <div className="justify-center max-w-6xl px-2 mx-auto text-center ">
          <div className="w-full p-4 bg-white lg:p-16 ">
            <h1 className="inline-block mb-8 font-bold text-gray-700 text-7xl lg:text-9xl ">
              {" "}
              404
            </h1>
            <h2 className="mb-6 text-2xl font-semibold text-gray-600 lg:text-4xl ">
              Oops! Page not found
            </h2>
            <p className="mb-8 text-xs text-gray-600 lg:text-xl ">
              Sorry! The requested page not found.
            </p>

            <div className="flex flex-wrap items-center justify-center">
              <NavLink
                to="/"
                className="px-8 py-4 text-xs font-medium text-gray-100 uppercase bg-yellow-700 rounded-full lg:text-base   hover:bg-yellow-800 md:w-auto "
              >
                Back to home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
