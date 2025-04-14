import React from "react";
import { OS1, OS2, OS3, OS4, OS5, OS6 } from "../../assets";
import Image from "next/image";
import Link from "next/link";

const ServiceItem = ({ icon, name, path }) => (
  <Link href={path} passHref>
    <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-2 rounded-xl transition">
      <div className="p-4 bg-white shadow-sm rounded-3xl">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-5">
          <Image src={icon} alt={name} className="w-12 h-12" priority />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold"> {name} </h3>
      </div>
    </div>
  </Link>
);

const OurServices = () => {
  const services = [
    {
      name: "Flight Monitoring",
      icon: OS1,
      path: "/pages/Airport-Transfer/Flight-Monitoring",
    },
    {
      name: "Business Travel",
      icon: OS2,
      path: "/pages/Airport-Transfer/Business-Travel",
    },
    {
      name: "Assisted Travel",
      icon: OS3,
      path: "/pages/Airport-Transfer/Assisted-Travel",
    },
    {
      name: "Baby Seat Services",
      icon: OS4,
      path: "/pages/Airport-Transfer/Baby-Seat",
    },
    {
      name: "Airport Transfers",
      icon: OS5,
      path: "/pages/Airport-Transfer/Airport",
    },
    {
      name: "Meet and Greet Services",
      icon: OS6,
      path: "/pages/Airport-Transfer/MeetGreet",
    },
  ];

  return (
    <div className="relative w-full py-8 mt-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((item, index) => (
            <ServiceItem
              key={index}
              icon={item.icon}
              name={item.name}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
