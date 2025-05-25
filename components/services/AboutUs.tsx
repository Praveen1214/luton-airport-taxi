import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-6xl px-4 mx-auto mt-5">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="mb-2 font-semibold text-primary">
            {" "}
            SEAMLESS TRANSPORT{" "}
          </div>
          <h1 className="mb-6 text-3xl font-bold md:text-4xl"> About us </h1>
        </div>
        <div className="w-full text-justify md:w-1/2">
          <p className="mb-4 text-gray-700">
            Ride Airport Transfers, we understand that every traveler has unique
            needs. With years of experience in the industry and millions of
            journeys under our belt, we have learned to adapt to the ever -
            changing needs of our clients.
          </p>
          <p className="text-gray-700">
            From our humble beginnings, we have grown to become a trusted and
            reliable airport transfer company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
