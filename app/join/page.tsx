"use client";

import React from "react";
import Hero from "../../components/join/hero";
import JoinWithUs from "@/components/join/JoinWithUs";
import Dedicate from "@/components/join/dedicate";
import Benefit from "@/components/join/benifit";
import JoinTeam from "@/components/join/joinTeam";
import Now from "@/components/join/now";

const Page = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="w-full bg-gradient-to-l from-blue-50 to-transparent">
        <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
          <Hero />
        </div>
        <div className="mt-10">
          <JoinWithUs />
        </div>
        <div className="mt-10">
          <Dedicate />
        </div>
        <div className="mt-10">
          <Benefit />
        </div>
        <div className="mt-10">
          <JoinTeam />
        </div>
        <div className="mt-10">
          <Now />
        </div>
      </div>
    </div>
  );
};

export default Page;
