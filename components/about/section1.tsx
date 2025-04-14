import React from "react";
import { AB1 } from "../../assets";
import Image from "next/image";

const LutonAirportTaxi = () => {
  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Left content section */}
        <div className="lg:w-3/5">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">
            Book a Taxi To Luton airport
          </h1>
          <p className="mb-6 text-lg font-medium text-primary">
            Affordable taxi service to Luton airport to any destination
          </p>

          <p className="mb-6 text-gray-600">
            Welcome to our taxi service from and to Luton Airport, where we
            provide a reliable, efficient, and stress-free transportation
            service. It is important to us that your travel experience is as
            smooth and comfortable as possible, which is why we go to great
            lengths to make the trip as smooth and comfortable as possible. Our
            drivers are very experienced and our vehicles are well taken care
            of, so you'll have a comfortable ride to and from Luton airport to
            wherever you're going.
          </p>

          <p className="mb-6 text-gray-600">
            Plus, our prices are low-cost. The most cost-effective and time-
            saving way to book a cab is to book in advance on our website.
            However, if you haven't pre-booked a taxi, you can still book with
            us on the spot, and our average pick-up time is just 11 minutes.
          </p>

          <p className="text-gray-600">
            Whether you're looking to book a cab to and from Luton airport or
            any other destination, our taxis from and to Luton airport are
            available at your service. In the Luton area, we are recognized as
            one of the best taxi and cab services due to our customer-centric
            approach. We ensure that you have a safe, reliable, and enjoyable
            journey because we care about your comfort.
          </p>
        </div>

        {/* Right content section */}
        <div className="lg:w-2/5">
          <div className="overflow-hidden">
            <div className="relative">
              <Image
                src={AB1}
                alt="Luton Airport Departures"
                className="object-contain w-full h-96"
              />
            </div>

            <div className="p-6">
              <p className="text-gray-600">
                We guarantee a smooth taxi ride to Luton Airport when you book
                with us. We are the best at providing taxis and transfers to
                Luton Airport. When your flight arrives at Luton Airport, your
                taxi will be waiting right outside to take you to where you want
                to go without any delays, so you can have a smooth and easy trip
                without any worries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LutonAirportTaxi;
