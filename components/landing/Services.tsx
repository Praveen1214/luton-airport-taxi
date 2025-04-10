import React from "react";
import { Clock, AlertCircle, Tag } from "lucide-react";
import { AirPlane, Support, Note } from "../../assets";
import Image from "next/image";

const ServiceItem = ({ icon, title, description }) => (
  <div className="flex items-center space-x-4">
    <div className="p-4 bg-white shadow-sm rounded-3xl">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-5">
        <Image src={icon} alt={title} className="w-12 h-12" priority />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold"> {title} </h3>
      <p className="text-sm text-gray-600"> {description} </p>
    </div>
  </div>
);

const Services = () => {
  const serviceItems = [
    {
      icon: AirPlane,
      title: "Flight Delay Cover",
      description: "No unexpected fees with our flight delay cover",
    },
    {
      icon: Note,
      title: "Transparent Pricing",
      description: "Fixed pricing on all bookings",
    },
    {
      icon: Support,
      title: "Customer Support",
      description: "Customer Support available around the clock",
    },
  ];

  return (
    <div className="w-full py-8 bg-[#F5F7FB] mt-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {serviceItems.map((item, index) => (
            <ServiceItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
