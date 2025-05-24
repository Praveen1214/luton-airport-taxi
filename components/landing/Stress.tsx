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

          <p className="mb-4 leading-relaxed text-justify text-gray-700">
            We specialise in professional{" "}
            <strong>Luton Airport taxi transfers.</strong> Whether it’s a one -
            way journey or round - trip, we deliver consistent and punctual
            service.Every transfer is managed by our trained drivers who monitor
            live flight data and use efficient routes throughout the UK.
          </p>

          <p className="mb-4 leading-relaxed text-justify text-gray-700">
            Our fleet includes standard cars, executive saloons, and MPVs for
            group travel.Prices are confirmed at the time of booking.No surge
            pricing, no surprises.All services support options like{" "}
            <a href="#" className="font-medium text-primary">
              {" "}
              meet & greet, business travel,{" "}
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-primary">
              pre - paid accounts.
            </a>
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
