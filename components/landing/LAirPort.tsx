import React from "react";
import Image from "next/image";
import { LA } from "../../assets"; // Adjust the import path as necessary

const LAirPort = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">

        {/* Text Content - show first on mobile */}
        <div className="order-1 md:order-2">
          <h2 className="mb-6 text-3xl font-bold">Taxi To Luton Airport</h2>
          <div className="space-y-4 text-justify text-gray-700">
            <p>
              Your journey matters, from start to finish. Our taxi to Luton
              Airport ensures punctuality and comfort, while our taxis to Luton
              Airport meet the highest timeliness standards. Returning? Our taxi
              from Luton Airport awaits. Whether it is an early flight or a
              peak-hour dash, our Luton airport taxis and Luton Airport taxi
              service prioritize your needs. Additionally, our comprehensive
              airport taxi service and Luton Airport transfer service handle all
              your travel logistics. Need a Luton airport pickup or a taxi for
              Luton Airport? We have got it covered. Remember, with our airport
              taxi Luton offerings, every journey becomes a memorable experience
              be it the journey from your hotel to a restaurant for a fancy
              dinner or an emergency rush to the hospital, we are always
              available at your service.
            </p>
          </div>
        </div>

        {/* Image - show second on mobile */}
        <div className="relative order-2 md:order-1">
          <div className="rounded-lg p-6 relative h-[450px]">
            <div className="flex items-center justify-center h-full">
              <Image
                src={LA}
                alt="Luggage"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LAirPort;
