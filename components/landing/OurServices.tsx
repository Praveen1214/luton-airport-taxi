"use client";
import React from "react";
import { C1, C2, C3, C4, C5, C6 } from "../../assets";
import Image from "next/image";

const ServiceCard = ({ title, imageSrc, description }) => (
  <div className="">
    <div className="bg-blue-50 p-4 rounded-lg shadow-sm flex justify-between items-center mb-3">
      <h3 className="text-lg md:text-2xl font-bold text-gray-800">{title}</h3>
      <div className="relative h-12 w-12 md:h-20 md:w-20">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
    </div>
    <div className="">
      <p
        className="text-xs md:text-sm text-gray-700"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  </div>
);

const AirportServices = () => {
  const services = [
    {
      title: "Flight Monitoring",
      imageSrc: C1,
      description:
        'We closely <a href="#" class="text-blue-600 hover:underline">monitor flight</a> arrivals and departures at <a href="#" class="text-blue-600 hover:underline">Luton Airport</a> for seamless service.',
    },
    {
      title: "Business Travel & Executive Vehicles",
      imageSrc: C2,
      description:
        'Our professional chauffeurs provide personalized <a href="#" class="text-blue-600 hover:underline">luxury transfers</a> from Luton.',
    },
    {
      title: "Assisted Travel",
      imageSrc: C3,
      description:
        'The wheelchair-accessible taxis provide safe, comfortable transportation from <a href="#" class="text-blue-600 hover:underline">Luton Airport</a>.',
    },
    {
      title: "Baby Seat & Assisted Travel Options",
      imageSrc: C4,
      description:
        'Our taxis offer secure <a href="#" class="text-blue-600 hover:underline">baby/child seats</a> for families arriving or departing Luton.',
    },
    {
      title: "Airport Transfers",
      imageSrc: C5,
      description:
        'Specialized focus on premium <a href="#" class="text-blue-600 hover:underline">airport transfer</a> services from Luton Airport.',
    },
    {
      title: "Meet & Greet Available",
      imageSrc: C6,
      description:
        'Our driver will wait to <a href="#" class="text-blue-600 hover:underline">meet & assist</a> you in the terminal.',
    },
  ];

  return (
    <div className="py-8 md:py-12">
      <div className="mb-8 md:mb-12 text-center px-4">
        <span className="font-semibold tracking-wide text-blue-600 text-sm">
          NOT JUST AIRPORT TRANSFERS
        </span>
        <h2 className="mt-2 text-2xl font-bold md:text-4xl text-gray-800">
          Tailored Service For Your Transfer
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageSrc={service.imageSrc}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirportServices;