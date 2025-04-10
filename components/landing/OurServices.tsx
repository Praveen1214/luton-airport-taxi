import React from "react";
import { C1, C2, C3, C4, C5, C6 } from "../../assets";
import Image from "next/image";

const ServiceCard = ({ title, subtitle, imageSrc }) => (
  <div className="overflow-hidden rounded-lg bg-[#F5F7FB] shadow-lg transition-transform duration-300 hover:scale-105 relative h-64">
    <div className="flex flex-col h-full p-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-800"> {title} </h3>
        {subtitle && <p className="text-xl text-gray-800"> {subtitle} </p>}
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-3/4">
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
);

const OurServices = () => {
  const services = [
    {
      title: "Flight",
      subtitle: "Monitoring",
      imageSrc: C1,
    },
    {
      title: "Business",
      subtitle: "Travel",
      imageSrc: C2,
    },
    {
      title: "Assisted",
      subtitle: "Travel",
      imageSrc: C3,
    },
    {
      title: "Baby Seat",
      subtitle: "Service",
      imageSrc: C4,
    },
    {
      title: "Airport",
      subtitle: "Transfers",
      imageSrc: C5,
    },
    {
      title: "Meet and",
      subtitle: "Greet",
      imageSrc: C6,
    },
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="mb-12 text-center">
        <span className="font-semibold tracking-wide text-blue-600">
          NOT JUST AIRPORT TRANSFERS
        </span>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Tailored Service For Your Transfer
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
