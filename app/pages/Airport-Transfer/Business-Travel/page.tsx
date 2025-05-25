"use client";

import Hero from "@/components/taxi-from-luton/Hero";
import React, { useState } from "react";
import { TR1 } from "../../../../assets";
import Trasnfers from "@/components/transfer/trasnfers";
import Section from "@/components/transfer/section";
import FeedBack from "@/components/landing/Feedback";
import FAQ from "@/components/landing/FAQ";
import Tips from "@/components/landing/Tips";
import InstantQuoteGlobal from "@/app/InstantQuoteGlobal";

const Page = () => {
  const [quoteStep, setQuoteStep] = useState(1);
  return (
    <div className="min-h-screen bg-white ">
      <div className="w-full bg-gradient from-blue-50 to-transparent">
        <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between md:flex-row">
            {quoteStep === 1 && (
              <div className="w-full md:mr-12">
                <Hero
                  name="Business travel"
                  description1="Save Up to 40% By Pre‑Booking Your Luton"
                  description2="Business travel With Us"
                />
              </div>
            )}
            <div className={`w-full ${quoteStep === 1 ? "mt-8 md:mt-0" : ""}`}>
              <InstantQuoteGlobal onStepChange={setQuoteStep} />
            </div>
          </div>
        </div>
        {quoteStep === 1 && (
          <>
            <div className="mt-32">
              <Trasnfers />
            </div>
            <div className="mt-10">
              <Section
                t1="Business Travel"
                t2="Executive Business Travel"
                t3="Business Account"
                st1="Drive your way to the airport: Self-drive hire made easy"
                st2="Business Travel Made Easy with our Services"
                st3="Let Us Handle Your Airport Transfers"
                d1="We understand that time is of the essence when it comes to business travel, which is why we offer reliable and efficient airport transfer services. Our team of professional drivers will ensure that you arrive at your destination on time and in style. With a range of luxurious vehicles at our disposal, we can cater to any business travel needs, whether you're traveling alone or with a group."
                d2="We understand that every business traveler has unique travel needs. That's why our business travel services offer customizable travel solutions. We work with you to create a personalized travel plan that meets your specific requirements. Our team of travel experts will ensure that your trip runs smoothly and efficiently, allowing you to focus on your business."
                d3="We take care of all the details, from monitoring your flight schedule to handling your luggage, so you can focus on your business. Our airport transfer services are available 24/7, so you can book with confidence knowing that we will be there to pick you up whenever you need us."
                image={TR1}
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
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
