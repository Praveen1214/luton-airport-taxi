import React from "react";
import { T1, T2, T3 } from "../../assets";
import Image from "next/image";

const Tips = () => {
  const tips = [
    {
      image: T1,
      title: "Taxi From Luton Airport",
      description: "Start Your Trip off Right with Luton Airport Taxi Service",
    },
    {
      image: T2,
      title: "Taxi To Luton Airport",
      description:
        "Luton Airport Taxi: The Ultimate Transfer Solution to the Airport",
    },
    {
      image: T3,
      title: "Booking a Taxi Guide",
      description:
        "Book Your Luton Airport Taxi in Advance: The Easy Way to Start Your Trip",
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="px-4 mx-auto ">
        <h2 className="mb-12 text-3xl font-bold text-center">
          {" "}
          Luton Airport Helpful Tips{" "}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`bg-blue-25 rounded-lg overflow-hidden shadow-lg ${
                index === 0 ? "border-2 border-blue-200" : ""
              }`}
            >
              <Image
                src={tip.image}
                alt={tip.title}
                className="object-cover w-full h-48 transition-opacity duration-300 hover:opacity-80"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold"> {tip.title} </h3>
                <p className="text-gray-600"> {tip.description} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
