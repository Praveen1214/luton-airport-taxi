import React from "react";
import { DriverJoin } from "../../assets";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-6xl px-4 py-0 mx-auto">
      <div className="flex flex-col items-center lg:flex-row">
        {/* Left Content */}
        <div className="w-full mb-8 lg:w-1/2 lg:mb-0">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Join as a<span className="text-primary"> Driver </span> with
            <br />
            Luton Airport Taxi
          </h1>
          <p className="max-w-md mb-8 text-gray-700">
            Join our team of elite drivers and experience the perks of being
            part of a thriving Airport Transfers
          </p>
          <button className="px-8 py-3 font-medium text-white duration-300 rounded-lg tr-ansition bg-primary rounded-ryfull bg-prima hover:bg-btn-hover">
            Join Now
          </button>
        </div>

        {/* Right Content - Phone Images */}
        <div className="relative w-full lg:w-1/2">
          {/* Back Phone */}
          <div className="relative z-0 max-w-xl ml-auto mr-0 lg:mr-8">
            <Image
              src={DriverJoin}
              alt="Phone showing app interface"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
