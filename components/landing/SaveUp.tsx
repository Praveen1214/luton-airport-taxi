import React from "react";
import Image from "next/image";
import { Bag } from "../../assets"; // Adjust the import path as necessary

const SaveUp = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative">
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
        {/* Right Column - Text Content */}
        <div>
          <div className="mb-3 font-semibold text-right text-primary">
            SAVE UP TO 40 % BY PRE BOOKING
          </div>
          <h2 className="mb-6 text-3xl font-bold">
            Pre Book Your Luton Airport Trasnfer
          </h2>
          <div className="space-y-4 text-justify text-gray-700">
            <p>
              Secure a stress - free start to your journey by choosing our pre -
              booking airport taxi service.When traveling to or from Luton, rely
              on our taxi to Luton Airport and taxi from Luton Airport services
              that promise punctuality and efficiency.
            </p>
            <p>
              With our advanced booking system, your Luton Airport transfer is
              guaranteed, eliminating last - minute rushes or concerns over
              availability.This ensures that whether you're looking for taxis to
              Luton Airport or a Luton airport pickup, everything is set for
              your convenience.
            </p>
            <p>
              Booking in advance with our Luton airport taxis isn't just smart;
              it transforms your travel experience.Our Luton Airport taxi
              service not only provides cost savings but also sidesteps long
              queues and last - minute hassles.
            </p>
            <p>
              Benefit from pre - selected pickup spots and other enhanced
              services when you book ahead.So, when you land, your taxi Luton
              Airport service awaits, letting you go on a comfortable journey
              right away.And for any inquiries, our luton airport taxi service
              helplines are always at your service, ensuring that every detail,
              even a taxi for Luton Airport, is addressed.In order to avoid any
              sort of inconvenience it is always
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveUp;
