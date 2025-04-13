import React from "react";
import { OS1, OS2, OS3, OS4, OS5, OS6 } from "../../assets";
import Image from "next/image";

const ServiceItem = ({ icon, name }) => (
  <div className="flex items-center space-x-4">
    <div className="p-4 bg-white shadow-sm rounded-3xl">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-5">
        <Image src={icon} alt={name} className="w-12 h-12" priority />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold"> {name} </h3>
    </div>
  </div>
);

const OurServices = () => {
  const services = [
    {
      name: "Flight Monitoring",
      icon: OS1,
    },
    {
      name: "Business Travel",
      icon: OS2,
    },
    {
      name: "Assisted Travel",
      icon: OS3,
    },
    {
      name: "Baby Seat Services",
      icon: OS4,
    },
    {
      name: "Airport Transfers",
      icon: OS5,
    },
    {
      name: "Meet and Greet Services",
      icon: OS6,
    },
  ];

  return (
    <div className="relative w-full py-8 mt-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((item, index) => (
            <ServiceItem key={index} icon={item.icon} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
