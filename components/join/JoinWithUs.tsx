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
      <h3 className="text-sm font-medium"> {name} </h3>
    </div>
  </div>
);

const OurServices = () => {
  const services = [
    {
          name: "Pick up on-demand jobs or plan your day with pre-booked rides",
      icon: OS1,
    },
    {
        name: "No joining fee get registered and start earning!",
      icon: OS2,
    },
    {
        name: "24/7 Customer support for drivers",
      icon: OS3,
    },
    {
        name: "Going home feature: matches you with jobs that are on your way home",
      icon: OS4,
    },
    {
        name: "Keep 100% of your tips because it is only fair",
      icon: OS5,
    },
    {
        name: "Get more perks like fuel discounts ",
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
