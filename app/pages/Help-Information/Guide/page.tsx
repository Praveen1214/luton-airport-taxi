"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import StepCard from "@/components/StepCard";

import step1Image from "@/assets/images/ridebooking.png";
import step2Image from "@/assets/images/ridebooking.png";
import step3Image from "@/assets/images/ridebooking.png";
import step4Image from "@/assets/images/ridebooking.png";
import step5Image from "@/assets/images/ridebooking.png";
import step6Image from "@/assets/images/ridebooking.png";

import { ridebooking } from "@/assets";
import FAQ from "@/components/landing/FAQ";

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-blue-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Booking Taxi Guide
          </h1>
          <p className="max-w-xl mx-auto text-gray-700 mb-6">
            Save up to 40% by pre-booking your taxi to and from Luton Airport
            with us.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg font-semibold">
            Book Now
          </Button>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
          How Can I Book My Airport Transfer
          <br />
          With Ride Luton Airport?
        </h2>

        <p className="text-gray-700 md:text-4xl text-base md:text-lg mb-8">
          Ride Luton Airport has created a sophisticated booking system that
          ensures a seamless experience for customers. Our booking process is
          fast, easy, and efficient, making it simpler than ever to book your
          transfer. We offer multiple ways to book your airport transfer with
          Ride Luton Airport.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          How do I book a car at Ride Luton Airport?
        </h3>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          You can follow the instructions below:
        </p>

        {/* Steps List */}
        <div className="w-max-5xl space-y-10 mr-10 md:mr-0 ">
          <StepCard
            stepNumber={1}
            title={
              <>
                Open the{" "}
                <a
                  href="https://rideluton.com"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rideluton.com
                </a>{" "}
                website and select type of services <strong>One way</strong> or{" "}
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
                Enter your <strong>Pickup Location</strong>,{" "}
                <strong>Drop-off Location</strong>, <strong>Date</strong>,{" "}
                <strong>Time</strong>, <strong>Number of Passengers</strong>,
                and <strong>Luggage</strong> details — then click the{" "}
                <strong>Search</strong> button.
              </>
            }
            src={step2Image}
            imageAlt="Step 2 – Fill out trip details"
          />

          <StepCard
            stepNumber={3}
            title={
              <>
                Browse the <strong>available vehicles</strong> displayed and
                choose the one that best fits your needs (e.g., standard sedan,
                executive car, MPV).
              </>
            }
            src={step3Image}
            imageAlt="Step 3 – Choose vehicle type"
          />

          <StepCard
            stepNumber={4}
            title={
              <>
                <strong>Review</strong> your selection to ensure the pickup and
                drop-off details, price, and any additional requirements (like a
                child seat) are correct.
              </>
            }
            src={step4Image}
            imageAlt="Step 4 – Review booking details"
          />

          <StepCard
            stepNumber={5}
            title={
              <>
                Enter your <strong>Contact Information</strong> (name, email,
                phone number) and any special instructions you have for the
                driver.
              </>
            }
            src={step5Image}
            imageAlt="Step 5 – Provide personal details"
          />

          <StepCard
            stepNumber={6}
            title={
              <>
                Finally, <strong>Confirm your booking</strong> and proceed with
                the payment. You will receive a confirmation email or SMS with
                your booking details.
              </>
            }
            src={step6Image}
            imageAlt="Step 6 – Confirm and pay"
          />
        </div>
        <div className="space-y-6 text-gray-800 text-base md:text-lg max-w-4xl mr-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Where is Luton Airport pick up and drop off?
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Being among the top five UK airports, London Luton Airport facilitates
          thousands of tourists and travelers daily to 85+ destinations, making
          it extremely busy.
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          One frequently asked question is: “Where can I pick up or drop off at
          Luton Airport?” There are several zones near the terminal—some are
          free for short stays, while others charge a small fee for pick-up and
          drop-off.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Dropping off and Picking up at London Luton Airport (LLA)
        </h3>

        <div className="rounded-xl overflow-hidden shadow-md mb-8">
          <Image
            src={ridebooking}
            alt="London Luton Airport"
            width={1000}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Card Grid */}
        
        <section className="max-w-5xl mx-auto px-4 py-12 md:py-16 mb-5">

          <div className="overflow-x-auto rounded-xl shadow-sm">
            <table className="w-full text-sm text-center border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-blue-50 text-blue-700 font-semibold">
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
              <tbody className="bg-white text-gray-700">
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

        <section className="max-w-5xl mx-auto px-4 py-12 md:py-16 pt-8">
          <div className="space-y-5 text-base md:text-lg text-gray-700">
            <p>
              <strong>Luton Airport Pick-Up Zone</strong> – The pick-up zone at
              London Luton Airport is the closest option for meeting passengers
              near the LLA terminal. You can locate it easily thanks to multiple
              signs directing you to the site. (Use LLA postcode{" "}
              <strong>LU2 9QT</strong> in your sat nav.)
            </p>
            <p>
              The pick-up zone costs £3 for 10 minutes, then £1 per minute
              thereafter. Card payments are accepted without additional fees.
            </p>
            <p>
              <strong>Luton Airport Short-Term Parking</strong> – If you need a
              short stay, the short-term car park is about 4 minutes from the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                LLA terminal building
              </a>
              . It’s a good option if you plan to wait a bit longer for arriving
              passengers.
            </p>
            <p>
              <strong>Luton Airport Drop-Off Zone</strong> – The drop-off zone
              is located close to the departures area of the airport. (Use{" "}
              <strong>LU2 9QT</strong> to find it quickly.) The cost is £3 for
              10 minutes, then £1 per minute thereafter.
            </p>
            <p>
              <strong>Luton Airport Multi-Storey Car Park</strong> – If you’re
              looking for a safe place to park your car while dropping off loved
              ones, consider the multi-storey car park, which is a 4–5 minute
              walk via the link bridge. It costs £8 for 40 minutes.
            </p>
          </div>
        </section>
        </div>
      </section>

      {/* Luton Airport Pickup & Drop-off Section */}
      {/* <section className="max-w-5xl mr- py-12">

      
      </div>
      </section> */}

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-">
        <FAQ />
      </section>a
    </main>
  );
};

export default Page;
