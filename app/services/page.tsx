import AboutUs from "@/components/services/AboutUs";
import Hero from "@/components/services/Hero";
import Our from "@/components/services/Our";
import OurServices from "@/components/services/OurServices";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="w-full bg-gradient-to-l from-blue-50 to-transparent">
        <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
          <Hero />
          <div className="mt-10">
            <AboutUs />
          </div>
          <div className="mt-20">
            <OurServices />
          </div>
          <div className="mt-20">
            <Our />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
