import React from "react";
import { Logo, StarCar } from "../../assets";
import Image from "next/image";

const Specialist = () => {
  return (
    <div className="flex items-center justify-between mt-10 bg-gray-100 rounded-2xl">
      <div className="flex flex-col gap-2">
        <div className="px-10 mb-4">
          <Image
            src={Logo}
            alt="Luton Airport Taxi"
            objectFit="contain"
            className="w-auto h-8"
          />
        </div>
        <div className="px-10 mb-4 space-y-1">
          <h2 className="text-4xl font-bold text-gray-700">
            Elevate Your Luton Airport
          </h2>
          <h2 className="text-4xl font-bold text-gray-700">Experience with Our Luxury</h2>
          <h2 className="text-4xl font-bold text-gray-700">Chauffeur Service</h2>
        </div>
      </div>

      <div
        className="relative w-1/2 h-72"
        style={{
          backgroundImage: `url(${StarCar.src})`,
          backgroundSize: "contain",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default Specialist;
