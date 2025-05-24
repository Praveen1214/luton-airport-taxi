"use client";

import React, { useState } from "react";
import Hero from "@/components/services/Hero";
import AboutUs from "@/components/services/AboutUs";
import OurServices from "@/components/services/OurServices";
import Our from "@/components/services/Our";
import FeedBack from "@/components/landing/Feedback";
import InstantQuoteGlobal from "../InstantQuoteGlobal"; // adjust path if needed

const Page: React.FC = () => {
  const [quoteStep, setQuoteStep] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-gradient from-blue-50 to-transparent">
        <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
          {/* ───── Header / Hero + Quote ───── */}
          <div className="flex flex-col items-start justify-between md:flex-row">
            {/* Hero appears only while on step 1 */}
            {quoteStep === 1 && (
              <div className="w-full md:mr-12">
                <Hero />
              </div>
            )}

            {/* InstantQuoteGlobal is always visible */}
            <div className={`w-full ${quoteStep === 1 ? "mt-8 md:mt-0" : ""}`}>
              <InstantQuoteGlobal onStepChange={setQuoteStep} />
            </div>
          </div>

          {/* ───── Additional Sections (only step 1) ───── */}
          {quoteStep === 1 && (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
