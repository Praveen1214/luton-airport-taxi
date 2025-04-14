import React from "react";

const Hero = ({ name, description1, description2 }) => {
  return (
    <div className="w-full px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
          {name}
        </h1>
        <p className="mb-2 text-sm text-gray-600 md:text-base">
          {description1}
        </p>
        <p className="mb-8 text-sm text-gray-600 md:text-base">
          {description2}
        </p>
        <button className="px-6 py-2 font-medium text-white transition duration-300 rounded bg-primary hover:bg-btn-hover">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
