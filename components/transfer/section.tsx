import React from "react";
import { TR1 } from "../../assets";
import Image from "next/image";

const Section = ({ t1, t2, t3, st1, st2, st3, d1, d2, d3, image }) => {
  return (
    <div className="max-w-6xl px-4 py-12 mx-auto">
      <div className="flex flex-col gap-8 mb-12 lg:flex-row">
        {/* Left Column - Business Travel */}
        <div className="lg:w-1/2">
          <h2 className="mb-2 text-3xl font-bold text-gray-800"> {t1} </h2>
          <p className="mb-4 font-medium text-blue-600"> {st1} </p>

          <p className="text-justify text-gray-600">{d1}</p>
        </div>

        {/* Right Column - Image and Labels */}
        <div className="lg:w-1/2">
          <div className="relative">
            <Image
              src={image}
              alt="Business travelers with luxury car"
              className=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        {/* Left Column - Executive Business Travel */}
        <div className="lg:w-1/2">
          <h3 className="mb-2 text-2xl font-bold text-gray-800"> {t2} </h3>
          <p className="mb-4 font-medium text-blue-600"> {st2} </p>

          <p className="text-justify text-gray-600">{d2}</p>
        </div>

        {/* Right Column - Business Account */}
        <div className="lg:w-1/2">
          <h3 className="mb-2 text-2xl font-bold text-gray-800"> {t3} </h3>
          <p className="mb-4 font-medium text-blue-600"> {st3} </p>

          <p className="text-justify text-gray-600">{d3}</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
