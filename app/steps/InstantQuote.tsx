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
}) => {
  return (
    <div className="w-full mx-auto max-w-7xl bg-gray-50">
      <div className="flex flex-col w-full gap-8 px-4 py-6 sm:px-6 md:flex-row md:items-start lg:px-8">
        {/* Hero section - hide on mobile */}
        <div className="hidden md:flex md:flex-col md:w-1/2 lg:w-3/5">
          <HeroSection />
        </div>

        {/* Mobile-only Hero */}
        <div className="block w-full mb-6 md:hidden">
          <HeroSection />
        </div>

        {/* Instant Quote Component */}
        <div className="w-full md:w-1/2 lg:w-2/5">
          <InstantQuote
            bookingData={bookingData}
            updateBookingData={updateBookingData}
            zones={zones}
            goToNextStep={goToNextStep}
            showAlert={showAlert}
          />
        </div>
      </div>
    </div>
  );
};

export default AirportTransferPage;
