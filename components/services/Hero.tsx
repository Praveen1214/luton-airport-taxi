import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full px-4 py-16 md:py-24">
      <title>
        Luton Airport Taxi Services | Airport Transfers, Chauffeurs, Minibus
        Hire & More
      </title>

      <meta content="Luton Airport taxi services including airport transfers, chauffeur service, wheelchair accessible taxis, minibus hire with driver, and meet & greet."></meta>
      <div className="max-w-6xl mx-auto text-start">
        <h1 className="mb-4 text-2xl font-bold text-gray-800 md:text-4xl">
          Our Services
        </h1>
        <p className="mb-2 text-sm text-gray-600 md:text-base">
          Save Up to 40% By Pre Booking Your Luton
        </p>
        <p className="mb-8 text-sm text-gray-600 md:text-base">
          Airport Transfer With Us
        </p>
        <Link href="/">
          <button className="px-6 py-2 font-medium text-white transition duration-300 rounded bg-primary hover:bg-btn-hover">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
