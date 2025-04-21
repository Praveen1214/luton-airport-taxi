"use client";

import React from "react";
import Image from "next/image";
import { Plane, Clock2, PoundSterling } from "lucide-react"; // Import lucide icons
import { ThreeLines } from "../../assets";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:pr-8 lg:pr-16 ">
      {/* Mobile Heading */}
      <h1 className="block md:hidden text-center text-4xl font-semibold">
        <span className="text-black bg-gradient-to-r from-btn-hover to-primary bg-clip-text">
          Travel Made Easy with
        </span>{" "}
        <span className="text-primary block mt-2">Luton Airport Taxi</span>
      </h1>

      {/* Desktop Heading */}
      <h2 className="hidden md:block mb-4 text-5xl font-semibold leading-tight">
        <div className="flex items-center gap-2">
          <span className="text-black bg-gradient-to-r from-btn-hover to-primary bg-clip-text">
            Travel Made Easy with
          </span>
          <Image
            src={ThreeLines}
            alt="Hero Plane"
            className="w-8 h-8"
            priority
          />
        </div>
        <span className="text-primary block mt-2">Luton Airport Taxi</span>
      </h2>

      {/* Description */}
      <p className="mt-2 text-gray-600 text-center md:text-left mb-8">
        Traveling to and from Luton Airport is simple and affordable with Luton
        Airport Taxi. As the UK s leading private taxi hire service, we provide
        reliable airport transfer at competitive prices.
      </p>

      {/* Features - Hidden on mobile, visible on md+ */}
      <div className="hidden md:flex flex-wrap gap-x-6 gap-y-3 justify-start mt-6">
        <div className="flex items-center gap-1.5">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100">
            <Plane className="w-4 h-4 text-blue-500" />
          </span>
          <span className="font-medium text-sm">Flight Delay Cover</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100">
            <Clock2 className="w-4 h-4 text-blue-500" />
          </span>
          <span className="font-medium text-sm">Customer Support</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100">
            <PoundSterling className="w-4 h-4 text-blue-500" />
          </span>
          <span className="font-medium text-sm">Transparent Pricing</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
