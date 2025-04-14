"use client";

import Hero from "@/components/taxi-from-luton/Hero";
import Section1 from "@/components/taxi-from-luton/section1";
import Section2 from "@/components/taxi-from-luton/section2";
import Section3 from "@/components/taxi-from-luton/section3";
import Section4 from "@/components/taxi-from-luton/section4";
import FAQ from "@/components/landing/FAQ";
import FeedBack from "@/components/landing/Feedback";
import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { routes } from "@/components/PopularRoutes";

const Page = () => {
  const router = useRouter();
  const handleClick = (slug: string) => {
    router.push(`/routes/${slug}`);
  };
  return (
    <div className="min-h-screen bg-white ">
      <div className="w-full bg-gradient-to-l from-blue-50 to-transparent">
        <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
          <Hero
            name="Book a low-cost Taxi To  Luton Airport"
            description1="Save up to 40% by pre-booking your taxi to"
            description2="and from Luton airport transfer with us"
          />
        </div>
        <div className="mt-10">
          <Section1 />
        </div>
        <div className="mt-10">
          <Section2 />
        </div>
        <div className="mt-10">
          <Section3 />
        </div>
        <div className="mt-10">
          <Section4 />
        </div>

        {/* Table of Prices */}
        <section className="max-w-5xl px-4 py-8 mx-auto sm:py-12 md:py-16">
          <div className="mb-6 text-center sm:mb-8 md:mb-12">
            <h2 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
              How much will a Taxi cost to Luton Airport
            </h2>
            <p className="text-sm text-primary sm:text-base">
              Here is the list of our estimated prices for taxi to/from Luton
              Airport
            </p>
          </div>

          {/* Table with responsive design */}
          <div className="-mx-4 overflow-x-auto sm:mx-0">
            <div className="inline-block min-w-full px-4 align-middle sm:px-0">
              <table className="min-w-full overflow-hidden text-sm border-collapse rounded-lg table-auto">
                <thead className="text-left bg-white text-primary">
                  <tr>
                    <th className="px-3 py-3 text-xs font-semibold sm:px-6 md:px-20 sm:py-4 sm:text-sm md:text-base">
                      Airport Pick-up
                    </th>
                    <th className="px-3 py-3 text-xs font-semibold sm:px-6 md:px-20 sm:py-4 sm:text-sm md:text-base">
                      Journey Time
                    </th>
                    <th className="px-3 py-3 text-xs font-semibold sm:px-6 md:px-20 sm:py-4 sm:text-sm md:text-base">
                      Single Trip
                    </th>
                    <th className="px-3 py-3 text-xs font-semibold sm:px-6 md:px-20 sm:py-4 sm:text-sm md:text-base">
                      Return Trip
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs text-center text-gray-700 sm:text-sm">
                  {[
                    "Milton Keynes",
                    "Watford",
                    "London",
                    "St Albans",
                    "Stevenage",
                    "Aylesbury",
                    "Hitchin",
                    "Bedford",
                  ].map((location, idx) => (
                    <tr
                      key={location}
                      className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-3 py-3 text-left sm:px-6 sm:py-4">
                        {location}
                      </td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4">£130</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4">£130</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4">£130</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footnote */}
          <p className="max-w-6xl p-3 mx-auto mt-4 text-xs text-center rounded-md text-primary sm:mt-6 sm:text-sm bg-blue-50">
            * These prices are based at non peak times travelling in a standard
            vehicle with 3 passengers and 2 luggage
          </p>
        </section>

        <div className="justify-center max-w-6xl px-4 mx-auto mt-10">
          <FeedBack />
        </div>
        <div className="justify-center max-w-6xl px-4 mx-auto mt-10">
          <FAQ />
        </div>

        <section className="px-4 py-8 mx-auto max-w-7xl sm:py-12 md:py-16">
          <div className="mb-6 text-center sm:mb-8 md:mb-12">
            <p className="text-xs font-medium text-primary sm:text-sm">
              Explore Our Top-Rated Destinations
            </p>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
              Popular Routes
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
            {routes.map((route, i) => (
              <div
                key={i}
                onClick={() => handleClick(route.slug)}
                className="flex flex-col gap-2 px-3 py-4 transition bg-white border border-gray-200 shadow-sm cursor-pointer rounded-xl sm:px-4 sm:py-5 hover:shadow-md hover:border-blue-500"
              >
                <div className="flex items-center justify-between text-xs font-medium text-gray-900 sm:text-sm">
                  <span>{route.from}</span>
                  <span className="text-sm font-bold tracking-wider text-gray-400 sm:text-xl">
                    {">>>"}
                  </span>
                  <span>{route.to}</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-600 sm:gap-2 sm:text-sm">
                  <FaCarAlt className="text-primary" />
                  <span>{route.duration}</span>
                  <span className="text-gray-400">· {route.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
