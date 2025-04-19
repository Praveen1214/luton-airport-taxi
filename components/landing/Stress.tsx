import React from "react";
import Image from "next/image";
import { LandingStress } from "../../assets";

const Stress = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div>
          <span className="font-semibold tracking-wide text-primary">
            {" "}
            STRESS - FREE JOURNEY{" "}
          </span>

          <h1 className="mt-4 mb-6 text-3xl font-bold md:text-3xl">
            Luton Airport Taxi Transfer
          </h1>

          <p className="leading-relaxed text-justify text-gray-700 mb-4">
            Do you need an affordable airport taxi service from/to Luton
            Airport?
          </p>

          <p className="leading-relaxed text-justify text-gray-700 mb-4">
            Then you are in luck! With over 20 years of experience, Luton
            Airport Taxi is the way to go. We are a reputable service just 2
            miles from the London Luton Airport.
          </p>
          <p className="leading-relaxed text-justify text-gray-700 mb-4">
            Moreover, we are not just your regular Taxi service. We have
            excellent, experienced drivers, we track all flights and drivers to
            ensure to get you to your destination on time.
          </p>
          <p className="leading-relaxed text-justify text-gray-700 mb-4">
            Regarding price, we are transparent with no hidden fees.
            Additionally, you can book online to receive an instant quote.
          </p>

          <p className="leading-relaxed text-justify text-gray-700">
            Choose Luton Taxi Airport for fast, affordable airport transfers by
            local taxi drivers.
          </p>
        </div>

        {/* Right Column - Image with Features */}
        <div className="relative">
          {/* Dots pattern in the background */}
          <div className="absolute top-0 right-0 grid w-40 h-40 grid-cols-10 gap-1">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-200 rounded-full">
                {" "}
              </div>
            ))}
          </div>

          {/* Main image */}
          <div className="relative w-full rounded-lg h-96">
            {/* Car image */}
            <Image
              src={LandingStress}
              alt="Luxury airport taxi"
              layout="fill"
              objectFit="contain"
              className="p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stress;
