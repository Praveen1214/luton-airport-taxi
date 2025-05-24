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
              We provide <strong>taxi to Luton Airport</strong> services across{" "}
              <strong>
                Luton, Milton Keynes, Watford, St Albans, Stevenage, Aylesbury,
                Bedford,
              </strong>{" "}
              and
              <strong>London.</strong>Our drivers know the best and fastest
              routes to the airport, ensuring you arrive on time—every time.
            </p>
            <p>
              All bookings include real - time tracking, fixed pricing, and a
              choice of vehicles to match your needs.Our service is trusted by
              frequent flyers, families, and corporate clients.Add extras like
              <a href="#" className="font-medium text-primary">
                {" "}
                baby seats, assisted support,
              </a>{" "}
              or{" "}
              <a href="#" className="font-medium text-primary">
                {" "}
                executive transfers
              </a>{" "}
              at checkout.Drivers are punctual, professional, and available 24 /
              7.
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
