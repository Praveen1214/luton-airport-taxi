"use client";

import React from "react";
import { HeroPlane, ThreeLines } from "../../assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:pr-8 lg:pr-16">
      {/* This will be shown only on mobile */}
<h1 className="block md:hidden text-center text-4xl font-semibold mb-4">
  <span className="text-transparent bg-gradient-to-r from-btn-hover to-primary bg-clip-text">
    Airport Transfers
  </span>{" "}
  to and from Luton Airport
</h1>

{/* Original heading for larger screens only */}
<h2 className="hidden md:block mb-4 text-5xl font-semibold">
  <div className="flex items-center gap-2">
    <div>
      <span className="text-transparent bg-gradient-to-r from-btn-hover to-primary bg-clip-text">
        Airport Transfers
      </span>{" "}
      to and
    </div>
    <div className="hidden md:block">
      <Image
        src={ThreeLines}
        alt="Hero Plane"
        className="w-8 h-8"
        priority
      />
    </div>
  </div>
  <span>from Luton Airport</span>
</h2>

<p className="mt-2 mb-2 text-gray-600 text-center md:text-left mb-8">
  Hassle free Luton Airport Transfer Service. Simple Online booking with
  and instant quote for your taxi to or from Luton Airport
</p>
      <div className="flex ">
        <div className="flex flex-col items-start justify-center mr-4">
          <div className="text-3xl font-semibold hidden md:block text-black-2"> 2.5K </div>
          <div className="text-sm text-gray-1 hidden md:block"> Happy Customer </div>
          <div className="w-full h-px mt-4 bg-gray-4 hidden md:block"></div>
        </div>
        <div className="mt-6 hidden md:block">
          <Image
            src={HeroPlane}
            alt="Hero Plane"
            className="h-46 w-46"
            priority
          />
        </div>
      </div>
      <div className="flex items-center -mt-20">
        {[1, 2, 3, 4, 5].map((star, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < 4.7 ? "text-yellow-400 hidden md:block" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm font-semibold hidden md:block"> 4.7 </span>
        <span className="ml-1 text-xs text-gray-500 hidden md:block"> out of 5 </span>
      </div>
    </div>
  );
};

export default HeroSection;
