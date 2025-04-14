import React from "react";
import { AB3 } from "../../assets";
import Image from "next/image";

const Section4 = () => {
  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <div className="flex flex-col gap-8 mb-8 lg:flex-row">
        {/* Left Column - Title */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Directions to Terminal Car
            </h2>
          </div>
          <h2 className="ml-8 text-3xl font-bold text-gray-800">Park 2</h2>
        </div>

        {/* Right Column - Intro Text */}
        <div className="lg:w-1/2">
          <p className="text-justify text-gray-600">
            Upon arrival at Luton Airport, there are several procedures to
            follow before you can leave the airport. The specific process may
            vary depending on your arrival terminal and flight details. Here is a
            general overview
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Left Column - Map and Description */}
        <div className="lg:w-1/2">
          <div className="p-4 mb-6 rounded-lg 0">
            <Image
              src={AB3}
              alt="Luton Airport Terminal Car Park 2 Map"
              className="w-full mb-2"
            />
          </div>

          <p className="text-justify text-gray-600">
            When you exit the terminal building, you can easily locate your taxi
            by going left and walking past the buses, taxis, and parking lifts
            for a few minutes. Your designated driver will be waiting at the
            designated spot to pick you up. If you have any concerns or
            questions, do not worry! Our team is here to assist you. We have a
            dedicated phone number for you to reach us anytime for help. We want
            to ensure your trip is smooth and enjoyable, and our drivers are
            always ready to assist. Simply give us a call, and we will be
            delighted to help you!
          </p>
        </div>

        {/* Right Column - Numbered Steps */}
        <div className="p-6 text-justify rounded-lg lg:w-1/2 bg-blue-50">
          <ol className="pl-5 space-y-4 text-gray-600 list-decimal">
            <li>
              Disembark from the plane and follow signs to the arrivals area.
            </li>
            <li>
              If you are arriving from outside the UK, proceed to immigration
              control where you will need to present your passport and travel
              documents for clearance.
            </li>
            <li>
              Collect your baggage from the baggage reclaim area after clearing
              immigration.
            </li>
            <li>
              If required, proceed to the customs control area to declare any
              goods or items you are bringing into the UK.
            </li>
            <li>
              Once you have cleared customs, follow the signs to the airport exit.
              Depending on the terminal, you may need to take a shuttle or walk
              to the exit.
            </li>
            <li>
              Upon exiting the terminal building, you will have various transport
              options like taxis, buses, or trains to continue your journey.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Section4;
