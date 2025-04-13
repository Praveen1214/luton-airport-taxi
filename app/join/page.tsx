import React from "react";
import Hero from "../../components/join/hero";

const Page = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="w-full bg-gradient-to-l from-blue-50 to-transparent">
        <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Page;
