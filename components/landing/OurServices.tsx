import React from "react";
import Image from "next/image";

const ServiceCard = ({ title, subtitle, imageSrc }) => (
  <div className="overflow-hidden rounded-lg bg-gray-50">
    <div className="flex flex-col h-full p-6">
      <div className="mb-auto">
        <h3 className="text-xl font-semibold text-gray-800"> {title} </h3>
        {subtitle && <p className="text-xl text-gray-800"> {subtitle} </p>}
      </div>
      <div className="flex justify-end mt-4">
        <div className="relative h-40 w-full max-w-[200px]">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="contain"
            objectPosition="right bottom"
          />
        </div>
      </div>
    </div>
  </div>
);

const OurServices = () => {
  const services = [
    {
      title: "Flight",
      subtitle: "Monitoring",
      imageSrc: "/images/flight-monitoring.jpg",
    },
    {
      title: "Business",
      subtitle: "Travel",
      imageSrc: "/images/business-travel.jpg",
    },
    {
      title: "Assisted",
      subtitle: "Travel",
      imageSrc: "/images/assisted-travel.jpg",
    },
    {
      title: "Baby Seat",
      subtitle: "Service",
      imageSrc: "/images/baby-seat.jpg",
    },
    {
      title: "Airport",
      subtitle: "Transfers",
      imageSrc: "/images/airport-transfers.jpg",
    },
    {
      title: "Meet and",
      subtitle: "Greet",
      imageSrc: "/images/meet-and-greet.jpg",
    },
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="mb-12 text-center">
        <span className="font-semibold tracking-wide text-blue-600">
          {" "}
          NOT JUST AIRPORT TRANSFERS{" "}
        </span>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          {" "}
          Tailored Service For Your Transfer{" "}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
