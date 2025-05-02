"use client";

import Hero from "@/components/taxi-from-luton/Hero";
import Section from "@/components/transfer/section";
import Trasnfers from "@/components/transfer/trasnfers";
import React from "react";
import { TR3 } from "../../../../assets";
import FeedBack from "@/components/landing/Feedback";
import FAQ from "@/components/landing/FAQ";
import Tips from "@/components/landing/Tips";
import InstantQuoteGlobal from "@/app/InstantQuoteGlobal";

const Page = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="w-full bg-gradient from-blue-50 to-transparent">
        <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
          <InstantQuoteGlobal />
          <Hero
            name="Flight Monitoring"
            description1="Save Up to 40% By Pre Booking You Luton"
            description2="Airport Transfer With Us"
          />
        </div>
        <div className="mt-10">
          <Trasnfers />
        </div>
        <div className="mt-10">
          <Section
            t1="Flight Monitoring Services"
            t2="Getting to Luton Airport"
            t3="Flight Delay Cover"
            st1="Real-time Flight Monitoring for Seamless Airport Transfers"
            st2="Stay Ahead of the Game with Our Flight Monitoring"
            st3="Seamless Airport Transfers"
            d1="Our flight monitoring system tracks your flight in real-time, providing our drivers with up-to-date information on any delays or cancellations. This means that we can adjust our schedule accordingly and ensure that we are always on time to pick you up, no matter what happens with your flight"
            d2="In addition to real-time flight tracking, we also offer a range of other features to make your airport transfer experience as smooth and stress-free as possible. We provide a personalized service that ensures your driver is waiting for you when you arrive, with a friendly smile and a willingness to help you with your luggage or any other needs you may have."
            d3="We also offer a range of vehicles to choose from, including luxury sedans, SUVs, and vans, to accommodate groups of all sizes. All of our vehicles are well-maintained and equipped with modern amenities to ensure your comfort during your journey."
            image={TR3}
          />
        </div>
        <div className="justify-center max-w-6xl px-4 mx-auto mt-10">
          <FeedBack />
        </div>
        <div className="justify-center max-w-6xl px-4 mx-auto mt-10">
          <FAQ />
        </div>
        <div className="justify-center max-w-6xl px-4 mx-auto mt-10">
          <Tips />
        </div>
      </div>
    </div>
  );
};

export default Page;
