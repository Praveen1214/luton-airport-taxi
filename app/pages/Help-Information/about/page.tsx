import Hero from "@/components/about/Hero";
import Section1 from "@/components/about/section1";
import Section2 from "@/components/about/section2";
import Section3 from "@/components/about/section3";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="w-full bg-gradient-to-l from-blue-50 to-transparent">
        <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
          <Hero />
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
      </div>
    </div>
  );
};

export default Page;
