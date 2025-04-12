import React from "react";
import { CY1, CY2, CY3, CY4, CY5, CY6, CY7, CY8, CY9, CY10 } from "../../assets";
import Image from "next/image";

const Companies = () => {
  // Top row companies
  const topRowCompanies = [
    { name: "easyJet", image: CY1 },
    { name: "TUI", image: CY2 },
    { name: "Wizz Air", image: CY3 },
    { name: "AVIS", image: CY4 },
    { name: "Booking.com", image: CY5 },
  ];

  // Bottom row companies
  const bottomRowCompanies = [
    { name: "RAMADA", image: CY6 },
    { name: "London Luton Airport", image: CY7 },
    { name: "Holiday Inn", image: CY8 },
    { name: "Hampton", image: CY9 },
    { name: "Premier Inn", image: CY10 },
  ];

  return (
    <div className="w-full py-16">
      <div className="px-4 mx-auto ">
        <h2 className="mb-12 text-3xl font-bold text-center">
          {" "}
          Companies We Work With{" "}
        </h2>

        {/* Top row of logos */}
        <div className="grid grid-cols-2 gap-8 mb-12 md:grid-cols-5">
          {topRowCompanies.map((company, index) => (
            <div
              key={`top-${index}`}
              className="flex items-center justify-center"
            >
              <Image
                src={company.image}
                alt={company.name}
                className="object-contain h-12 transition-opacity duration-300 hover:opacity-60"
              />
            </div>
          ))}
        </div>

        {/* Bottom row of logos */}
        <div className="grid grid-cols-2 md:grid-cols-5">
          {bottomRowCompanies.map((company, index) => (
            <div
              key={`bottom-${index}`}
              className="flex items-center justify-center"
            >
              <Image
                src={company.image}
                alt={company.name}
                className="object-contain h-12 transition-opacity duration-300 hover:opacity-60"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
