"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/taxi-from-luton/Hero";
import { TR5 } from "../../../../assets";
import Trasnfers from "@/components/transfer/trasnfers";
import Section from "@/components/transfer/section";
import FeedBack from "@/components/landing/Feedback";
import FAQ from "@/components/landing/FAQ";
import Tips from "@/components/landing/Tips";
import InstantQuoteGlobal from "@/app/InstantQuoteGlobal";

const Page = () => {
  const [quoteStep, setQuoteStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <Head>
        <title>Wheelchair Taxi Luton | Accessible Airport Transfers to and from Luton</title>
        <meta
          name="description"
          content="Book a wheelchair accessible taxi in Luton with trained drivers and ramp-equipped vehicles. Accessible transfers to and from Luton Airport, 24/7."
        />
        <meta
          name="keywords"
          content="wheelchair taxi Luton, accessible taxi Luton, Luton Airport taxi, disabled transport Luton, mobility taxi UK"
        />
        <meta property="og:title" content="Wheelchair Taxi Luton – Accessible Travel to and from Luton Airport" />
        <meta
          property="og:description"
          content="Trained drivers and ramp-equipped vehicles for safe, respectful, and accessible Luton Airport transfers 24/7."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/wheelchair-taxi-luton" />
        <meta property="og:image" content="https://yourdomain.com/images/wheelchair-taxi-luton.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/wheelchair-taxi-luton" />
      </Head>

      <div className="w-full">
        <div className={`container px-4 py-8 mx-auto md:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
            {quoteStep === 1 && (
              <div className="w-full md:mr-12 animate-fade-in">
                <Hero
                  name="Wheelchair Taxi Luton – Accessible Travel to and from Luton Airport"
                  description1="Save Up to 40% By Pre‑Booking Your Luton"
                  description2="Wheelchair Accessible Transport With Us"
                />
              </div>
            )}
            <div className={`w-full transition-all duration-500 ${quoteStep === 1 ? "mt-8 md:mt-0" : ""} ${quoteStep > 1 ? 'animate-slide-in' : ''}`}>
              <div className="sticky top-8">
                <InstantQuoteGlobal onStepChange={setQuoteStep} />
              </div>
            </div>
          </div>
        </div>

        {quoteStep === 1 && (
          <>
            {/* Main Content Section */}
            <div className="w-full px-4 mx-auto md:px-6 lg:px-8 mt-16">
              <div className="max-w-6xl mx-auto">
                {/* Introduction Section */}
                <div className="bg-white rounded-2xl duration-300">
                  <div className="prose prose-lg max-w-none">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                      <h2 className="text-2xl font-bold text-gray-900 m-0">Your Trusted Accessible Transport Partner</h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      At <strong className="text-blue-700">Luton Airport Taxi</strong>, we believe travel should be accessible to everyone. That's why our
                      <strong className="text-blue-700"> wheelchair taxi service in Luton</strong> is designed to ensure safe, respectful, and reliable
                      transportation to and from <strong className="text-blue-700">London Luton Airport</strong> and surrounding areas.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our fleet supports both electric and manual wheelchairs, and our trained drivers understand how to accommodate a
                      range of mobility needs—making every journey smooth and dignified.
                    </p>
                  </div>
                </div>

                {/* Airport Accessibility Section */}
                <div className="rounded-2xl p-8 mb-12 ">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 018 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Luton Airport Accessibility: A Fully Inclusive Hub</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Luton Airport is one of the UK's most accessibility-friendly travel hubs. Key facilities include:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Step-free terminal with automatic doors",
                      "Special Assistance staff always available",
                      "Accessible lounges and toilets",
                      "Free wheelchair and mobility aid usage",
                      "Disabled parking near terminal"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vehicle Features Section */}
                <div className="bg-white rounded-2xl border-gray-100 p-8 mb-12 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Wheelchair Accessible Taxis Designed for Comfort</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our Luton wheelchair taxis include ramps and secure restraints. Every driver is trained in disability assistance,
                    offering patient and courteous help with boarding and secure positioning.
                  </p>
                </div>

                {/* Service Areas Section */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl p-8 mb-12 border border-blue-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Airport Transfers for Wheelchair Users</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We provide 24/7 accessible transfers to and from:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {[
                      "Luton", "Milton Keynes", "Watford", "St Albans",
                      "Bedford", "Aylesbury", "Stevenage", "Greater London"
                    ].map((location, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg text-center font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
                        {location}
                      </div>
                    ))}
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Flight Monitoring:</strong> We monitor flights and plan around your schedule for perfect timing—even if your flight is delayed.
                    </p>
                  </div>
                </div>

                {/* Additional Services */}
                <div className="bg-white rounded-2xl p-8 mb-12 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">More Accessible Travel Services</h2>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: "Minibus Hire with Driver", desc: "group wheelchair travel" },
                      { title: "Chauffeur Services", desc: "executive accessible travel" },
                      { title: "Parking Transfers", desc: "connect your drive to the terminal" }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div>
                          <span className="font-semibold text-gray-900">{service.title}</span>
                          <span className="text-gray-600"> – {service.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Book Your Wheelchair Taxi in Luton Today</h2>
                  <p className="text-xl mb-4 opacity-90">
                    Accessible travel made easy. Get an instant quote or call us for custom bookings.
                  </p>
                  <p className="text-lg mb-6 opacity-80">
                    We're here 24/7 to support your mobility needs.
                  </p>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg inline-block">
                    <p className="text-lg font-medium">
                      Choose <strong>Luton Airport Taxi</strong>—where inclusion drives everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="mt-32 animate-fade-in-up">
              <Trasnfers />
            </div>
            <div className="mt-10 animate-fade-in-up">
              <Section
                t1="Wheelchair Accessible Transport"
                t2="Trained Professional Drivers"
                t3="24/7 Accessible Travel"
                st1="Making Traveling Easier for Passengers with Special Needs"
                st2="Our Team Strives to Understand Your Needs and Preferences"
                st3="Safe and On-Time: Arrival Guarantee with Our Transfer Services"
                d1="Our wheelchair accessible airport transfer services are designed to make traveling easier for passengers who require additional assistance. Our fleet is equipped with ramps and secure restraint systems, operated by trained professionals who provide wheelchair assistance, baggage handling, and personalized escort services."
                d2="We understand that traveling can be stressful, especially for those who require additional assistance, which is why we strive to make the experience as comfortable and stress-free as possible. Our team will work closely with you to understand your mobility needs and preferences, so we can provide a tailored service that meets your specific requirements."
                d3="Our wheelchair accessible airport transfer services are available 24/7, so you can travel with peace of mind knowing that we're always here to assist you. Whether you're traveling for business or pleasure, we'll ensure that you arrive at your destination safely and on time with full accessibility support."
                image={TR5}
              />
            </div>
            <div className="justify-center max-w-6xl px-4 mx-auto mt-10 animate-fade-in-up">
              <FeedBack />
            </div>
            <div className="justify-center max-w-6xl px-4 mx-auto mt-10 animate-fade-in-up">
              <FAQ />
            </div>
            <div className="justify-center max-w-6xl px-4 mx-auto mt-10 animate-fade-in-up">
              <Tips />
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Page;