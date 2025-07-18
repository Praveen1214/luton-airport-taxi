"use client";

import React from "react";
import HeroSection from "../../components/landing/HeroSection";
import InstantQuote from "../../components/landing/InstantQuote";

const AirportTransferPage = ({
  bookingData,
  updateBookingData,
  zones,
  goToNextStep,
  showAlert,
  page,
}) => {
  return (
    <div className="w-full mx-auto max-w-7xl">
      <div className="flex flex-col w-full gap-8 px-4 py-6 sm:px-6 md:flex-row md:items-start lg:px-8">
        {/* Hero section - hide on mobile */}
        {page === "home" && (
          <div className="hidden md:flex md:flex-col md:w-1/2 lg:w-3/5 bg-blue">
            <HeroSection />
          </div>
        )}
        {/* Mobile-only Hero */}
        {page === "home" && (
          <div className="block w-full mb-6 md:hidden">
            <HeroSection />
          </div>
        )}

        {/* Instant Quote Component */}
        {page === "home" && (
          <div className="w-full md:w-1/2 lg:w-2/5 ">
            <InstantQuote
              bookingData={bookingData}
              updateBookingData={updateBookingData}
              zones={zones}
              goToNextStep={goToNextStep}
              showAlert={showAlert}
            />
          </div>
        )}
        {page === "" && (
          <div className="w-full md:w-1/2 lg:w-full ">
            <InstantQuote
              bookingData={bookingData}
              updateBookingData={updateBookingData}
              zones={zones}
              goToNextStep={goToNextStep}
              showAlert={showAlert}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AirportTransferPage;
