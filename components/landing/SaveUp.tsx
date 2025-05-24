import React from "react";
import Image from "next/image";
import { Bag } from "../../assets"; // Adjust the import path as necessary

const SaveUp = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        {/* Text Content - shown first on mobile */}
        <div className="order-1 md:order-2">
          <div className="mb-3 font-semibold text-right text-primary md:text-left">
            SAVE UP TO 40 % BY PRE BOOKING
          </div>
          <h2 className="mb-6 text-3xl font-bold"> Taxi Near Luton Airport </h2>
          <div className="space-y-4 text-justify text-gray-700">
            <p>
              Our base on Kimpton Road puts us less than 5 minutes from Luton
              Airport.If you are searching for a{" "}
              <strong>taxi near Luton Airport,</strong> we’re the closest and
              fastest option. Vehicles are dispatched instantly, with real-time
              availability and full tracking.
            </p>
            <p>
              We offer low - cost and executive transport to or from nearby
              hotels, train stations, and local addresses.All services are
              handled by experienced drivers with full licensing and
              insurance.Book online or call directly for fast dispatch.
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
