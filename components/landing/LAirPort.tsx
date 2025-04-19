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
              Are you planning a trip and need a reliable taxi service to Luton
              Airport? Well. we’re here to help!
            </p>
            <p>
              Regardless of whether you’re taking off early in the morning or
              late in the night, we’ve got you covered. We offer fast and
              efficient transfer anywhere in Luton and ensure you arrive on time
              and stress free.
            </p>
            <p>
              Staying at a hotel near Luton? Our local taxi drivers will pick
              you up and ensure you to get the airport on time. We use the
              quickest routes, therefore minimising travel time and allowing for
              no delays!
            </p>

            <p>
              Additionally, you can book your trip online and get an instant
              quote on how much it will cost. Our services don’t have any hidden
              fees, so the price you get online is the exact price you’ll pay!
            </p>

            <p>
              Safety is the number one priority of our service. That’s why we
              offer transport with child seats for your family or wheelchair
              taxis for assisted transfers.
            </p>

            <p>
              Finally, we want to help take some of the pressure off of your
              trip to the airport. How do we help? We suggest a perfect pick-up
              time according to your airline. If you’re feeling unsure, you can
              visit our Luton Airport Guide or check the official Luton Airport
              Departure page.
            </p>

            <p>
              So, what are you waiting for? Book your taxi to Luton Airport with
              us today and travel with peace of mind!
            </p>
          </div>
        </div>

        {/* Image - show second on mobile */}
        <div className="relative order-2 md:order-1">
          <div className="rounded-lg p-6 relative h-[450px]">
            <div className="flex items-center justify-center h-full">
              <Image src={LA} alt="Luggage" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LAirPort;
