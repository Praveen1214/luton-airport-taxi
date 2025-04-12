import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Make sure you have separate images for each step or reuse them meaningfully
import step1Image from "@/assets/images/ridebooking.png"; 
import step2Image from "@/assets/images/ridebooking.png";
import step3Image from "@/assets/images/ridebooking.png";
import step4Image from "@/assets/images/ridebooking.png";
import step5Image from "@/assets/images/ridebooking.png";
import step6Image from "@/assets/images/ridebooking.png";

import { ridebooking } from "@/assets"; 
import { faqs } from "@/components/FaqSection"; // Import your FAQs data

const page = () => {
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
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
          How Can I Book My Airport Transfer
          <br />
          With Ride Luton Airport?
        </h2>

        <p className="text-gray-700 text-base md:text-lg mb-8">
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
        <ol className="list-decimal list-inside text-gray-700 text-base md:text-lg space-y-10">
          {/* Step 1 */}
          <li>
            <p>
              <strong>Open</strong> the{" "}
              <a
                href="https://rideluton.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rideluton.com
              </a>{" "}
              website and select the service type:{" "}
              <strong>One Way</strong> or <strong>Roundtrip</strong>.
            </p>
            <div className="mt-4 border rounded-xl overflow-hidden shadow-md">
              <Image
                src={step1Image}
                alt="Step 1 – Select your trip type on Rideluton.com"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </li>

          {/* Step 2 */}
          <li>
            <p>
              Enter your <strong>Pickup Location</strong>,{" "}
              <strong>Drop-off Location</strong>, <strong>Date</strong>,{" "}
              <strong>Time</strong>, <strong>Number of Passengers</strong>, and{" "}
              <strong>Luggage</strong> details — then click the{" "}
              <strong>Search</strong> button.
            </p>
            <div className="mt-4 border rounded-xl overflow-hidden shadow-md">
              <Image
                src={step2Image}
                alt="Step 2 – Fill out trip details (pickup, drop-off, date, time, passengers, luggage)"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </li>

          {/* Step 3 */}
          <li>
            <p>
              Browse the <strong>available vehicles</strong> displayed and choose
              the one that best fits your needs (e.g., standard sedan, executive
              car, MPV).
            </p>
            <div className="mt-4 border rounded-xl overflow-hidden shadow-md">
              <Image
                src={step3Image}
                alt="Step 3 – Choose vehicle type"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </li>

          {/* Step 4 */}
          <li>
            <p>
              <strong>Review</strong> your selection to ensure the pickup and
              drop-off details, price, and any additional requirements (like a
              child seat) are correct.
            </p>
            <div className="mt-4 border rounded-xl overflow-hidden shadow-md">
              <Image
                src={step4Image}
                alt="Step 4 – Review booking details and price"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </li>

          {/* Step 5 */}
          <li>
            <p>
              Enter your <strong>Contact Information</strong> (name, email,
              phone number) and any special instructions you have for the
              driver.
            </p>
            <div className="mt-4 border rounded-xl overflow-hidden shadow-md">
              <Image
                src={step5Image}
                alt="Step 5 – Provide personal details and instructions"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </li>

          {/* Step 6 */}
          <li>
            <p>
              Finally, <strong>Confirm your booking</strong> and proceed with
              the payment. You will receive a confirmation email or SMS with
              your booking details.
            </p>
            <div className="mt-4 border rounded-xl overflow-hidden shadow-md">
              <Image
                src={step6Image}
                alt="Step 6 – Confirm and pay for your booking"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </li>
        </ol>
      </section>

      {/* Luton Airport Pickup & Drop-off Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-10">
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-700 mb-2">
              Free Pick-up/Drop-off
            </h4>
            <p className="text-gray-700 text-sm">Mid-Term Parking</p>
            <p className="text-gray-500 text-sm">
              10–15 mins (by walk) / 5 mins (by shuttle)
            </p>
            <p className="text-sm font-medium mt-1">Free for 15 mins</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-700 mb-2">
              Free car parking
            </h4>
            <p className="text-gray-700 text-sm">Long-Term Parking</p>
            <p className="text-gray-500 text-sm">10 mins (by shuttle)</p>
            <p className="text-sm font-medium mt-1">Free for 2 hours</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-700 mb-2">
              Nearest to LLA terminal
            </h4>
            <p className="text-gray-700 text-sm">Drop-off / Pickup Site</p>
            <p className="text-gray-500 text-sm">1–5 mins (by walk)</p>
            <p className="text-sm font-medium mt-1">
              £3 for 10 mins (£1/min thereafter)
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-700 mb-2">
              Pick up/Drop off (up to 30 mins)
            </h4>
            <p className="text-gray-700 text-sm">Mid-Term Parking</p>
            <p className="text-gray-500 text-sm">
              10–15 mins (walk) / 5 mins (shuttle)
            </p>
            <p className="text-sm font-medium mt-1">
              £5 for 25 mins (free for 15)
            </p>
          </div>
        </div>

        {/* Additional Info Paragraphs */}
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
            <strong>Luton Airport Drop-Off Zone</strong> – The drop-off zone is
            located close to the departures area of the airport. (Use{" "}
            <strong>LU2 9QT</strong> to find it quickly.) The cost is £3 for 10
            minutes, then £1 per minute thereafter.
          </p>

          <p>
            <strong>Luton Airport Multi-Storey Car Park</strong> – If you’re
            looking for a safe place to park your car while dropping off loved
            ones, consider the multi-storey car park, which is a 4–5 minute walk
            via the link bridge. It costs £8 for 40 minutes.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
          {/* Left Title */}
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Explore FAQs
              <br />
              for Quick
              <br />
              Answers
            </h2>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-gray-200 h-full mx-auto"></div>

          {/* Right FAQs */}
          <div className="md:w-2/3 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
