import React from "react";
import { AB2 } from "../../assets";
import Image from "next/image";

const Section3 = () => {
  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Left Column */}
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
              {" "}
              Finding your driver{" "}
            </h2>
          </div>

          <p className="mb-8 text-justify text-gray-600">
            We understand that finding your driver can be a daunting task,
            especially in a busy and unfamiliar environment like an
            airport.Here's what you can expect when using our taxi service:
          </p>

          <div className="mb-8">
            <h3 className="mb-2 text-xl font-bold text-gray-700">
              {" "}
              Identifying Your Driver{" "}
            </h3>
            <p className="text-justify text-gray-600">
              Our drivers are easily identifiable by their distinctive uniforms
              and vehicles. They will be waiting at the arrival pick up with a
              sign displaying your name(if you booked a meet and greet service),
              making it easy to spot them.If you have not booked a meet - and -
              greet service, your driver will be waiting for you at the
              designated pickup and drop - off area located just a minute's walk
              from the terminal.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="mb-2 text-xl font-bold text-gray-700">
              {" "}
              Contacting Your Driver{" "}
            </h3>
            <p className="text-justify text-gray-600">
              We provide all customers with the contact details of their driver
              before their journey, giving you the peace of mind of knowing that
              you can easily get in touch with them if necessary.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="mb-2 text-xl font-bold text-gray-700">
              {" "}
              Boarding the Taxi{" "}
            </h3>
            <p className="text-justify text-gray-600">
              After reaching the designated Pickup Location, our dedicated
              driver will be there to greet you, assist with your luggage, and
              provide any necessary information for your journey.If you have pre
              - paid online, we kindly request your feedback on our service upon
              completion of your trip.For those who haven't pre-booked, we offer
              convenient payment options at the end of your journey, including
              cash, credit card, and American Express.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2">
          <div className="mb-8">
            <Image
              src={AB2}
              alt="Luton Airport Terminal"
              className="w-full mb-8 rounded-lg shadow-md"
            />

            <div className="mb-8">
              <h3 className="mb-2 text-xl font-bold text-gray-700">
                {" "}
                Confirming Your Destination{" "}
              </h3>
              <p className="text-justify text-gray-600">
                Before setting off, our driver will confirm your destination to
                ensure that you arrive at the correct location safely and
                efficiently.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-700">
                {" "}
                Making the Process Smoother{" "}
              </h3>
              <p className="text-justify text-gray-600">
                At our taxi service, we pride ourselves on making the journey as
                smooth as possible.We keep up - to - date with the latest
                traffic and road conditions to ensure that we take the most
                efficient route to your destination.Our drivers are experienced
                and knowledgeable, and will do everything they can to make your
                journey as comfortable and enjoyable as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
