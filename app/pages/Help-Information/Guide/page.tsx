"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import StepCard from "@/components/StepCard";

import step1Image from "@/assets/images/ridebooking.png";


import { G1, G2, G3, G4, G5, G6, G7 } from "../../../../assets";

import FAQ from "@/components/landing/FAQ";

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-l from-blue-50 to-transparent">
        <div className="max-w-6xl px-4 mx-auto mb-20 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">
            Booking Taxi Guide
          </h1>
          <p className="max-w-xl mx-auto mb-6 text-gray-700">
            Save up to 40% by pre-booking your taxi to and from Luton Airport
            with us.
          </p>
          <Button className="px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-btn-hover">
            Book Now
          </Button>
        </div>

        {/* Booking Process Section */}
        <section className="max-w-6xl px-4 py-12 mx-auto mb-8">
          <h2 className="mb-6 text-3xl font-bold leading-snug text-gray-900 md:text-4xl">
            How Can I Book My Airport Transfer
            <br />
            With Ride Luton Airport?
          </h2>

          <p className="mb-8 text-base text-justify text-gray-700 md:text-lg">
            Ride Luton Airport has created a sophisticated booking system that
            ensures a seamless experience for customers. Our booking process is
            fast, easy, and efficient, making it simpler than ever to book your
            transfer. We offer multiple ways to book your airport transfer with
            Ride Luton Airport.
          </p>

          <h3 className="mb-4 text-2xl font-semibold text-gray-800">
            How do I book a car at Ride Luton Airport?
          </h3>
          <p className="mb-6 text-base text-gray-700 md:text-lg">
            You can follow the instructions below:
          </p>

          {/* Steps List */}
          <div className="mr-10 space-y-10 w-max-5xl md:mr-0 ">
            <StepCard
              stepNumber={1}
              title={
                <>
                  <strong>
                    Open the{" "}
                    <a
                      href="https://rideluton.com"
                      className="text-prbg-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rideluton.com
                    </a>{" "}
                    website
                  </strong>{" "}
                  and select type of services <strong>One way</strong> or{" "}
                  <strong>Roundtrip</strong>.
                </>
              }
              src={step1Image}
              imageAlt="Step 1 – Open Rideluton.com and select service type"
            />

            <StepCard
              stepNumber={2}
              title={
                <>
                  <strong>Enter your Pickup Location</strong>,{" "}
                  <strong>Drop-off Location</strong>, <strong>Date</strong>,{" "}
                  <strong>Time</strong>, <strong>Number of Passengers</strong>,
                  and <strong>Luggage</strong> details then click the{" "}
                  <strong>Search</strong> button.
                </>
              }
              src={G1}
              imageAlt="Step 2 – Fill out trip details"
            />

            <StepCard
              stepNumber={3}
              title={
                <>
                  <strong>Select Package or Car Type</strong> according to the
                  number of passengers and luggage you will be carrying.
                </>
              }
              src={G2}
              imageAlt="Step 3 – Choose vehicle type"
            />

            <StepCard
              stepNumber={4}
              title={
                <>
                  <strong>
                    Fill out all form details and additional services,
                  </strong>{" "}
                  required to assist you with your trip
                </>
              }
              src={G3}
              imageAlt="Step 4 – Review booking details"
            />

            <StepCard
              stepNumber={5}
              title={
                <>
                  <strong>Check Your Booking.</strong> After selecting a car
                  services, review your booking and make sure to read the
                  information of the package you choose.
                </>
              }
              src={G4}
              imageAlt="Step 5 – Provide personal details"
            />

            <StepCard
              stepNumber={6}
              title={
                <>
                  <strong>Select your preferred payment method,</strong> either
                  by Credit/DebitCard payment or by paying the driver in cash
                </>
              }
              src={G5}
              imageAlt="Step 5 – Provide personal details"
            />
            <StepCard
              stepNumber={7}
              title={
                <>
                  You will receive both an instant <strong>Email</strong>{" "}
                  confirmation and online payment receipts.
                </>
              }
              src={G6}
              imageAlt="Step 5 – Provide personal details"
            />
          </div>
          <div className="max-w-4xl mt-20 mr-auto space-y-6 text-base text-gray-800 md:text-lg">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Where is Luton Airport pick up and drop off?
            </h2>
            <p className="mb-6 text-base text-justify text-gray-700 md:text-lg">
              Being among the top five UK airports, London Luton Airport
              facilitates thousands of tourists and travelers daily to 85+
              destinations, making it extremely busy.
            </p>
            <p className="mb-6 text-base text-justify text-gray-700 md:text-lg">
              One frequently asked question is: “Where can I pick up or drop off
              at Luton Airport?” There are several zones near the terminal—some
              are free for short stays, while others charge a small fee for
              pick-up and drop-off.
            </p>

            <h3 className="mb-4 text-xl font-semibold text-gray-800 md:text-2xl">
              Dropping off and Picking up at London Luton Airport (LLA)
            </h3>

            <div className="mb-8 overflow-hidden shadow-md rounded-xl">
              <Image
                src={G7}
                alt="London Luton Airport"
                width={1000}
                height={500}
                className="w-full h-auto"
              />
            </div>

            {/* Card Grid */}

            <section className="max-w-6xl px-4 py-12 mx-auto mb-5 md:py-16">
              <div className="overflow-x-auto shadow-sm rounded-xl">
                <table className="w-full overflow-hidden text-sm text-center border border-gray-200 rounded-xl">
                  <thead className="font-semibold text-btnbg-btn-hover bg-blue-50">
                    <tr>
                      <th className="px-4 py-3 border border-gray-200">
                        Free Pick-up/ Drop-off
                      </th>
                      <th className="px-4 py-3 border border-gray-200">
                        Free car parking
                      </th>
                      <th className="px-4 py-3 border border-gray-200">
                        Nearest to LLA terminal
                      </th>
                      <th className="px-4 py-3 border border-gray-200">
                        Pick up/ Drop off (up to 30 mins)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 bg-white">
                    <tr>
                      <td className="px-4 py-3 border border-gray-200">
                        Mid-Term Parking
                      </td>
                      <td className="px-4 py-3 border border-gray-200">
                        Long-Term Parking
                      </td>
                      <td className="px-4 py-3 border border-gray-200">
                        Drop off / Pick up Site
                      </td>
                      <td className="px-4 py-3 border border-gray-200">
                        Mid-Term Parking
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border border-gray-200">
                        10–15 mins (by walk) <br /> 5 mins (by shuttle)
                      </td>
                      <td className="px-4 py-3 border border-gray-200">
                        10 mins (by shuttle)
                      </td>
                      <td className="px-4 py-3 border border-gray-200">
                        1–5 mins (by walk)
                      </td>
                      <td className="px-4 py-3 border border-gray-200">
                        10–15 mins (by walk) <br /> 5 mins (by shuttle)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border border-gray-200">
                        Free for 15 mins
                      </td>
                      <td className="px-4 py-3 border border-gray-200">
                        Free for 2 hours
                      </td>
                      <td className="px-4 py-3 border border-gray-200">
                        £3 for 10 mins <br /> (£1/min onwards)
                      </td>
                      <td className="px-4 py-3 border border-gray-200">
                        £3 for 25 mins <br /> (free for 15 minutes)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="max-w-5xl px-4 py-12 pt-8 mx-auto md:py-16">
              <div className="space-y-5 text-base text-justify text-gray-700 md:text-lg">
                <p>
                  <strong>Luton Airport Pick-Up Zone</strong> – The pick-up zone
                  at London Luton Airport is the closest option for meeting
                  passengers near the LLA terminal. You can locate it easily
                  thanks to multiple signs directing you to the site. (Use LLA
                  postcode <strong>LU2 9QT</strong> in your sat nav.)
                </p>
                <p>
                  The pick-up zone costs £3 for 10 minutes, then £1 per minute
                  thereafter. Card payments are accepted without additional
                  fees.
                </p>
                <p>
                  <strong>Luton Airport Short-Term Parking</strong> – If you
                  need a short stay, the short-term car park is about 4 minutes
                  from the{" "}
                  <a href="#" className="text-prbg-primary hover:underline">
                    LLA terminal building
                  </a>
                  . It’s a good option if you plan to wait a bit longer for
                  arriving passengers.
                </p>
                <p>
                  <strong>Luton Airport Drop-Off Zone</strong> – The drop-off
                  zone is located close to the departures area of the airport.
                  (Use <strong>LU2 9QT</strong> to find it quickly.) The cost is
                  £3 for 10 minutes, then £1 per minute thereafter.
                </p>
                <p>
                  <strong>Luton Airport Multi-Storey Car Park</strong> – If
                  you’re looking for a safe place to park your car while
                  dropping off loved ones, consider the multi-storey car park,
                  which is a 4–5 minute walk via the link bridge. It costs £8
                  for 40 minutes.
                </p>
              </div>
            </section>
          </div>
        </section>

        {/* Luton Airport Pickup & Drop-off Section */}
        {/* <section className="max-w-5xl py-12 mr-">

      
      </div>
      </section> */}

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-">
          <FAQ />
        </section>
      </section>
    </main>
  );
};

export default Page;
