import React from "react";
import Image from "next/image";
import { PlusCircle, Plane } from "lucide-react";

const Stress = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div>
          <span className="font-semibold tracking-wide text-blue-600">
            {" "}
            STRESS - FREE JOURNEY{" "}
          </span>

          <h1 className="mt-4 mb-6 text-3xl font-bold md:text-4xl">
            Reliable Luton Airport Taxi Transfer Service
          </h1>

          <p className="leading-relaxed text-gray-700">
            Introducing our unparalleled Luton Airport Taxi Transfer Service! If
            you're seeking a reliable taxi from Luton Airport or a prompt taxi
            to Luton Airport, we're your go-to solution.Specializing in Luton
            Airport transfers, our expansive airport taxi service has been
            curated to cater to every traveler's unique needs. Be it for the
            holiday-goers looking for the perfect start to their trip, business
            professionals requiring punctual Luton Airport pickups, solo
            adventurers ready to embark on a new journey, or large groups
            needing spacious Luton Airport taxis, we've ensured that our
            offerings are comprehensive and tailored.With a strong emphasis on
            convenience, we provide swift access to taxis for Luton Airport,
            ensuring that your transition is as smooth as possible.Our Luton
            Airport Taxi Service prioritizes your satisfaction and guarantees a
            hassle - free experience from the moment you book with us.So,
            whether it's a taxi Luton Airport transfer you need, taxis to Luton
            Airport for a group, or a return journey, remember that with our
            Airport Taxi Service at Luton, every detail is accounted for,
            ensuring you have one less thing to worry about.Explore your travels
            with confidence, knowing that our Luton Airport transfer service is
            reliably by your side
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
          <div className="relative w-full bg-gray-100 rounded-lg h-96">
            {/* Logo overlay top right */}
            <div className="absolute p-3 bg-white rounded-lg shadow-sm top-4 right-4">
              <div className="flex items-center">
                <span className="mr-1 font-bold text-black"> LAT </span>
                <span className="text-xs leading-tight text-gray-500">
                  LUTON <br /> AIRPORT TAXI
                </span>
              </div>
            </div>

            {/* Car image */}
            <Image
              src="/images/luxury-car.png"
              alt="Luxury airport taxi"
              layout="fill"
              objectFit="contain"
              className="p-4"
            />

            {/* Feature badges */}
            <div className="absolute flex items-center px-4 py-2 bg-white rounded-full shadow-md -left-4 top-1/4">
              <PlusCircle className="w-5 h-5 mr-2 text-blue-600" />
              <span className="font-medium"> Licensed Drivers </span>
            </div>

            <div className="absolute flex items-center px-4 py-2 bg-white rounded-full shadow-md -left-4 bottom-1/4">
              <Plane className="w-5 h-5 mr-2 text-blue-600" />
              <span className="font-medium"> Flight Monitoring </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stress;
