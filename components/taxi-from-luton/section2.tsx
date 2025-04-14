import React from "react";

const Section2 = () => {
  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <div className="flex flex-col gap-10 md:flex-row">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Airport Procedure for Getting <br />a Taxi from Luton Airport
          </h2>

          <p className="text-justify text-gray-600">
            When arriving at Luton Airport, the first thing on your mind may be
            finding a reliable and efficient taxi service to take you to your
            destination.We made our taxi service from Luton Airport to be very
            easy.When you use our taxi service, you can expect things to go
            smoothly
          </p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2">
          <div className="mb-8">
            <h3 className="mb-3 text-xl font-bold text-gray-800">
              Taxi Pickup Location
            </h3>
            <p className="text-justify text-gray-600">
              Our taxi pick - up is conveniently located outside the airport
              terminal building(which is located on the ground floor of terminal
              car park 2), making it easy to find and access.You will be directed
              to our pick up by airport staff and can expect a short walk(around
              3 minutes) to our taxis.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-bold text-gray-800">
              Meet & Greet Booking
            </h3>
            <p className="text-justify text-gray-600">
              When you book our meet and greet service, our friendly driver will
              be ready to welcome you at the arrivals hall with a personalized
              name board.You can expect a seamless experience as our driver
              guides you to your vehicle, ensuring a hassle - free start to your
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
