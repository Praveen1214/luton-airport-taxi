import React from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { L1, L2, L3, L4, L5, L6, L7, L8 } from "../../assets";

const PopularRoutes = () => {
  const routes = [
    {
      name: "Milton Keynes",
      rating: 4.8,
      image: L1,
      path: "/pages/Popular-Routes/milton-keynes",
    },
    {
      name: "Watford",
      rating: 4.8,
      image: L2,
      path: "/pages/Popular-Routes/Watford",
    },
    {
      name: "St Albans",
      rating: 4.8,
      image: L3,
      path: "/pages/Popular-Routes/st-albans",
    },
    {
      name: "Stevenage",
      rating: 4.8,
      image: L4,
      path: "/pages/Popular-Routes/stevenage",
    },
    {
      name: "London",
      rating: 4.8,
      image: L5,
      path: "/pages/Popular-Routes/london",
    },
    {
      name: "Aylesbury",
      rating: 4.8,
      image: L6,
      path: "/pages/Popular-Routes/aylesbury",
    },
    {
      name: "Hitchin",
      rating: 4.8,
      image: L7,
      path: "/pages/Popular-Routes/hitchin",
    },
    {
      name: "Bedford",
      rating: 4.8,
      image: L8,
      path: "/pages/Popular-Routes/bedford",
    },
  ];

  return (
    <div className="w-full px-4 py-8 mx-auto mt-10">
      <div className="mb-2 text-center">
        <p className="text-lg font-semibold tracking-wider uppercase text-primary">
          EXPLORE OUR TOP - RATED DESTINATIONS
        </p>
      </div>

      <h2 className="mb-8 text-3xl font-bold text-center">Popular Routes</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {routes.map((route, index) => (
          <Link key={index} href={route.path}>
            <div className="relative overflow-hidden shadow-md rounded-2xl h-52 group cursor-pointer">
              {/* Background Image */}
              <Image
                src={route.image}
                alt={route.name}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />

              {/* Rating badge */}
              <div className="absolute flex items-center px-2 py-1 text-xs rounded-full bg-black/20 top-2 right-2">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 font-medium text-white">
                  {route.rating}
                </span>
              </div>

              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"></div>

              {/* Location text */}
              <div className="absolute flex items-center font-semibold text-white bottom-4 left-4">
                <MapPin size={16} className="mr-1" />
                <span>{route.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;
