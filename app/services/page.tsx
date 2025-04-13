import Hero from "@/components/services/Hero";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="relative min-h-screen bg-white">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-blue-50 to-transparent">
          <div className="container relative w-full h-full px-4 mx-auto md:px-6 lg:px-8">
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
