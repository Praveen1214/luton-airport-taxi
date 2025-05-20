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
            SAVE UP TO 40 % BY PRE BOOKING
          </span>

          <h1 className="mt-4 mb-6 text-3xl font-bold md:text-3xl">
            Taxi From Luton Airport
          </h1>

          <p className="mb-4 leading-relaxed text-justify text-gray-700">
            LutonAirportTaxi.co.uk is your direct local provider for reliable
            <strong> taxi services from Luton Airport. </strong>For travellers
            landing at Luton, we ensure immediate access to licensed,
            professional drivers.All flights are tracked in real time—your
            driver arrives when your plane does, with no delays or extra
            charges.
          </p>

          <p className="mb-4 leading-relaxed text-justify text-gray-700">
            We’re based less than 2 miles from the airport, meaning faster
            response times and more availability, day or night. Choose standard
            or executive vehicles, all cleaned and maintained daily. Need
            assistance inside the terminal? Our <strong>Meet & Greet</strong>{" "}
            service includes luggage help and terminal support.
          </p>

          <p className="mb-4 leading-relaxed text-justify text-gray-700">
            We offer fixed pricing with no hidden extras. You can book online in
            seconds, and receive full confirmation via email or SMS. Options
            like{" "}
            <a href="#" className="font-medium text-primary">
              Tchild seats, wheelchair-accessible vehicles,
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-primary">
              business accounts
            </a>{" "}
            are available. For more information, see our{" "}
            <a href="#" className="font-medium text-primary">
              Taxi from Luton Airport
            </a>{" "}
            page or check our{" "}
            <a href="#" className="font-medium text-primary">
              Luton Airport Guide.
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
