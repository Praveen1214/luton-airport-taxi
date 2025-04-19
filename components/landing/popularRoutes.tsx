import React from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { L1, L2, L3, L4, L5, L6, L7, L8 } from "../../assets";

const PopularRoutes = () => {
  const routes = [
    { name: "Milton Keynes", image: L1, path: "/pages/Popular-Routes/milton-keynes" },
    { name: "Watford", image: L2, path: "/pages/Popular-Routes/Watford" },
    { name: "St Albans", image: L3, path: "/pages/Popular-Routes/st-albans" },
    { name: "Stevenage", image: L4, path: "/pages/Popular-Routes/stevenage" },
    { name: "London", image: L5, path: "/pages/Popular-Routes/london" },
    { name: "Luton", image: L6, path: "/pages/Popular-Routes/luton" },
    { name: "Hitchin", image: L7, path: "/pages/Popular-Routes/hitchin" },
    { name: "Bedford", image: L8, path: "/pages/Popular-Routes/bedford" },
  ];

  return (
    <div className="w-full px-4 py-8 my-5">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Top Location From Luton Airport
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
        {routes.map((route, index) => (
          <Link key={index} href={route.path}>
            <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow hover:shadow-md transition-all duration-300 group h-28 sm:h-32 md:h-40">
              <Image
                src={route.image}
                alt={route.name}
                className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute top-2 left-2 md:top-3 md:left-3 flex items-center bg-white bg-opacity-80 px-2 py-1 rounded-md shadow-sm">
                <MapPin size={14} className="text-gray-800" />
                <span className="ml-1 text-xs md:text-sm font-semibold text-gray-800">
                  {route.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;