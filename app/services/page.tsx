"use client";

import FeedBack from "@/components/landing/Feedback";
import AboutUs from "@/components/services/AboutUs";
import Hero from "@/components/services/Hero";
import Our from "@/components/services/Our";
import OurServices from "@/components/services/OurServices";
import React from "react";
import InstantQuoteGlobal from "../InstantQuoteGlobal";

const Page = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="w-full bg-gradient from-blue-50 to-transparent">
        <div className="container px-4 py-8 mx-full md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between md:flex-row">
            <div className="w-full md:mr-12">
              <Hero />
            </div>
            <div className="w-full mt-8 md:mt-0">
              <InstantQuoteGlobal />
            </div>
          </div>
          <div className="mt-32">
            <AboutUs />
          </div>
          <div className="mt-20">
            <OurServices />
          </div>
          <div className="mt-20">
            <Our />
          </div>
          <div className="mt-20">
            <FeedBack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
