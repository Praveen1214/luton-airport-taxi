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

          <p className="leading-relaxed text-justify text-gray-700">
            Land and leave in luxury with our Luton Airport Taxi Service. As you
            touch down at Luton, our taxi from Luton Airport service is at your
            beck and call. Our professional drivers, paired with our fleet of
            comfortable Luton Airport taxis, ensure your onward journey is
            relaxing and efficient. For travelers headed back, our taxi to Luton
            Airport service provides the same level of comfort and reliability.
            Experience Luton Airport pickups like never before: no long queues,
            no uncertainty, just swift and reliable taxi Luton Airport transfers
            that cater to your schedule. Whether you sre looking for a taxi for
            Luton Airport or a pickup, we have got you covered. Our commitment is
            to offer top-tier taxis from Luton Airport and taxis to Luton
            Airport every single time, thanks to our expansive airport taxi
            service. Specifically designed to cater to a wide range of
            travelers, our Luton Airport transfer service makes your transition
            from the airport smooth as we. We offer a swift pick up, our drivers
            are knowledgeable, we offer a meet and greet service where our
            driver will be waiting at the terminal with your name card to get
            you a taxi making your travel safe and hassle free. When it comes to
            Airport Taxi Luton, we are the name you can trust for punctuality,
            luxury, and complete peace of mind.
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
