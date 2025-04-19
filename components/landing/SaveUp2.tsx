import React from "react";
import Image from "next/image";
import { LLA } from "../../assets";

const SaveUp2 = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div>
          <span className="font-semibold tracking-wide text-primary">
            {" "}
            SAVE UP TO 40% BY PRE BOOKING{" "}
          </span>

          <h1 className="mt-4 mb-6 text-3xl font-bold md:text-3xl">
            Taxi From Luton Airport
          </h1>

          <p className="leading-relaxed text-justify text-gray-700 mb-4">
            If you are searching for a taxi transfer from Luton Airport to
            anywhere in the country, we are surely the service for you.
          </p>

          <p className="leading-relaxed text-justify text-gray-700 mb-4">
            We offer something others can’t. Our dedication and honesty with
            customers is unmatched. Besides, we are cheaper than anyone else and
            upfront about fees and costs. Whether you need immediate Luton
            Airport pickup after landing or to schedule a driver, we’ve got you
            covered.
          </p>

          <p className="leading-relaxed text-justify text-gray-700 mb-4">
            Moreover, if you need our driver to find you at the airport, we
            offer an excellent meet & greet service. Our driver will go into the
            terminal and meet you directly to help you with your luggage,
            instead of carrying it yourself.{" "}
          </p>

          <p className="leading-relaxed text-justify text-gray-700 mb-4">
            If it’s your first time in Luton, you can check out our Luton
            Airport Guide or for a more detailed version, visit the official
            Luton Airport Arrivals section.
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
              src={LLA}
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

export default SaveUp2;
