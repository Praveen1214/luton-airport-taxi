"use client";
import Head from "next/head";
import Hero from "@/components/taxi-from-luton/Hero";
import React, { useState } from "react";
import { TR4 } from "../../../../assets";
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
       {/* SEO Meta Tags */}
      <Head>
        <title>Baby Seat Services</title>
        <meta
          name="description"
          content="Baby Seat Services Accessible transfers to and from Luton Airport, 24/7."
        />
      </Head>
      <div className="w-full bg-gradient from-blue-50 to-transparent">
        <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between md:flex-row">
            {quoteStep === 1 && (
              <div className="w-full md:mr-12">
                <Hero
                  name="Baby Seat"
                  description1="Save Up to 40% By Pre‑Booking Your Luton"
                  description2="Airport Transfer With Us"
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
                t1="Baby Seat Services"
                t2="Travliing With a Child To the Airport"
                t3="Travelling as a family"
                st1="Ensuring the Safety and Comfort of Your Child during Your Journey"
                st2="Stress-Free Airport Transfers for Families"
                st3="Seamless Airport Transfers"
                d1="At our airport transfer services, we understand the importance of ensuring the safety and comfort of all passengers, including young children. That's why we offer baby seats as an optional feature for our airport transfers. Our baby seats are designed to meet the highest safety standards and are suitable for infants and toddlers."
                d2="When booking your airport transfer, simply let us know that you require a baby seat, and we will ensure that the appropriate seat is installed in the vehicle prior to your arrival. Our drivers are trained to install and adjust the seats to ensure that your child is secure and comfortable throughout the journey."
                d3="We understand that traveling with children can be stressful, which is why we aim to provide a hassle-free and enjoyable experience for families. With our baby seat feature, you can rest assured that your child is safe and secure during your airport transfer, allowing you to relax and enjoy the journey."
                image={TR4}
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
