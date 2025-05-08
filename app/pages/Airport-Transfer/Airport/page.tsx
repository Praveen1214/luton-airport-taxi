"use client";

import React, { useState } from "react";
import Hero from "@/components/taxi-from-luton/Hero";
import { TR5 } from "../../../../assets";
import Trasnfers from "@/components/transfer/trasnfers";
import Section from "@/components/transfer/section";
import FeedBack from "@/components/landing/Feedback";
import FAQ from "@/components/landing/FAQ";
import Tips from "@/components/landing/Tips";
import InstantQuoteGlobal from "@/app/InstantQuoteGlobal"; // adjust if needed

const Page: React.FC = () => {
  /* ───────────────────────────
   * Keep track of the quote step
   * ────────────────────────── */
  const [quoteStep, setQuoteStep] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-gradient from-blue-50 to-transparent">
        <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
          {/* ───── Hero + Quote ───── */}
          <div className="flex flex-col items-start justify-between md:flex-row">
            {/* Hero only visible on step‑1 */}
            {quoteStep === 1 && (
              <div className="w-full md:mr-12">
                <Hero
                  name="Airport Transfer"
                  description1="Save Up to 40% By Pre‑Booking Your Luton"
                  description2="Airport Transfer With Us"
                />
              </div>
            )}

            {/* InstantQuoteGlobal always visible */}
            <div className={`w-full ${quoteStep === 1 ? "mt-8 md:mt-0" : ""}`}>
              <InstantQuoteGlobal onStepChange={setQuoteStep} />
            </div>
          </div>
        </div>

        {/* ───── Everything below only on step‑1 ───── */}
        {quoteStep === 1 && (
          <>
            <div className="mt-32">
              <Trasnfers />
            </div>

            <div className="mt-10">
              <Section
                t1="Airport Transport "
                t2="Airport Passengers"
                t3="Ongoing Airport Travel"
                st1="Making Traveling Easier for Passengers with Special Needs"
                st2="Our Team Strives to Understand Your Needs and Preferences"
                st3="Safe and On‑Time: Arrival Guarantee with Our Transfer Services"
                d1="Assisted airport transfer services are designed to make traveling easier for passengers who require additional assistance. Our team of trained professionals are equipped to provide a wide range of services, including wheelchair assistance, baggage handling, and personalized escort services."
                d2="We understand that traveling can be stressful, especially for those who require additional assistance, which is why we strive to make the experience as comfortable and stress‑free as possible. Our team will work closely with you to understand your needs and preferences, so we can provide a tailored service that meets your specific requirements."
                d3="Our assisted airport transfer services are available 24/7, so you can travel with peace of mind knowing that we're always here to assist you. Whether you're traveling for business or pleasure, we'll ensure that you arrive at your destination safely and on time."
                image={TR5}
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
