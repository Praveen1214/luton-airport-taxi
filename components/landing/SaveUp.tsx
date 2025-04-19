import React from "react";
import Image from "next/image";
import { Bag } from "../../assets"; // Adjust the import path as necessary

const SaveUp = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        {/* Text Content - shown first on mobile */}
        <div className="order-1 md:order-2">
          <div className="mb-3 font-semibold text-primary text-right md:text-left">
            SAVE UP TO 40 % BY PRE BOOKING
          </div>
          <h2 className="mb-6 text-3xl font-bold">Taxi Near Me</h2>
          <div className="space-y-4 text-justify text-gray-700">
            <p>
              If you are looking for a taxi near Luton, you have come to the
              right place! We offer the best airport taxi service in the
              country, and we want to help you get where you need to be.
            </p>
            <p>
              Do not waste time looking for an airport taxi near me; choose
              Luton Airport Taxi!
            </p>
            <p>
              With an average pick-up time of 12 minutes from booking, we are
              the closest and cheapest option around.
            </p>
            <p>
              Our local taxi drivers know how to get around and are always a few
              minutes away as soon as you book online.
            </p>
            <p>
              If you prefer to book a taxi by phone, we have local taxi numbers
              you can call to organise your trip.
            </p>
            <p>
              Our location is on Kimpton Rd, Luton LU2 0FP, which is less than 1
              mile from the airport. So, why wait? Book now and get the best and
              fastest taxi near airport service available!
            </p>
          </div>
        </div>

        {/* Image - shown second on mobile */}
        <div className="relative order-2 md:order-1">
          <div className="rounded-lg p-6 relative h-[450px]">
            <div className="flex items-center justify-center h-full">
              <Image
                src={Bag}
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

export default SaveUp;
