// src/app/page.js
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Clock, Users } from "lucide-react";
import Image from "next/image";
import BusinessTravelimg from "@/assets/images/business-travel.png";
import FAQ from "@/components/landing/FAQ";
import Tips from "@/components/landing/Tips";
import Link from "next/link";

export default function BusinessTravel() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="w-full py-2 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Business Travel
          </h1>
          <p className="mb-8 text-lg text-gray-700 md:text-xl">
            Save Up to 40% By Pre Booking Your Luton Airport Transfer With Us
          </p>
          <Link href="/">
            <Button className="px-8 py-4 text-base text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Book Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Book a Transfer Section */}
      <section className="px-4 mx-auto bg-white max-w-7xl">
        {/* Outer container with background & rounded corners */}
        <div className="bg-[#F8FAFF] rounded-xl shadow-sm p-6 md:p-12">
          {/* Section Title */}
          <h2 className="mb-10 text-2xl font-bold text-center text-gray-900 md:text-3xl">
            Why Book a Transfer
          </h2>

          {/* Top Three Features */}
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
            {/* Single Feature Card */}
            <div className="flex items-center p-4 bg-white shadow rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-blue-50">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-lg font-medium text-gray-800">
                Price Guarantee
              </span>
            </div>

            <div className="flex items-center p-4 bg-white shadow rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-blue-50">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-lg font-medium text-gray-800">
                Flexible Services
              </span>
            </div>

            <div className="flex items-center p-4 bg-white shadow rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-blue-50">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-lg font-medium text-gray-800">
                Vehicle Flexibility
              </span>
            </div>
          </div>

          {/* Detailed Features */}
          <div className="flex flex-col items-start md:flex-row">
            {/* Left Column: Heading / Subtext */}
            <div className="mb-8 md:w-1/3 md:mb-0">
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Why Book With Us
              </h3>
              <p className="font-medium text-blue-600 cursor-pointer">
                Our Features
              </p>
            </div>

            {/* Right Column: List of Features */}
            <div className="grid grid-cols-1 gap-4 md:w-2/3 md:grid-cols-2">
              <FeatureItem label="24 Hours Service" />
              <FeatureItem label="Flight Monitoring" />
              <FeatureItem label="Fully Licensed Drivers" />
              <FeatureItem label="Waiting Time & Parking" />
              <FeatureItem label="Professional Chauffeur" />
              <FeatureItem label="Meet & Greet" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Travel Info Section */}
      <section className="px-4 mx-auto bg-white max-w-7xl">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
              Business Travel
            </h2>
            <p className="mb-4 text-blue-600">
              Drive your way to the airport: Self-drive hire made easy
            </p>
            <p className="mb-4 text-gray-600">
              We understand that time is of the essence when it comes to
              business travel, which is why we offer reliable and efficient
              airport transfer services. Our team of professional drivers will
              ensure that you arrive at your destination on time and in style.
              With a range of luxurious vehicles at our disposal, we can cater
              to any business travel needs, whether you are traveling alone or
              with a group.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={BusinessTravelimg}
                alt="Business Travel"
                width={600}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out md:h-96"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Business Travel
                </h3>
                <p className="mb-1 text-sm text-white">
                  Watford To Luton Airport
                </p>
                <p className="font-medium text-blue-400">Fast & Reliable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sections */}
      <section className="px-4 mx-auto bg-white max-w-7xl">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Executive Business Travel
              </h3>
              <p className="mb-6 text-blue-600">
                Business Travel Made Easy with our Services
              </p>
              <p className="text-gray-600">
                We understand that every business traveler has unique travel
                needs. Our executive services are designed to provide a
                comfortable and productive journey.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Business Account
              </h3>
              <p className="mb-6 text-blue-600">
                Let Us Handle Your Airport Transfers
              </p>
              <p className="text-gray-600">
                We take care of all the details—from monitoring your flight
                schedule to ensuring a smooth and comfortable journey to your
                destination.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="px-4 mx-auto bg-white max-w-7xl">
        <FAQ />
      </section>

      {/* Tips Section */}
      <section className="px-4 mx-auto bg-white max-w-7xl">
        <Tips />
      </section>
    </main>
  );
}

/* Optional: extract repeated feature items into a component */
function FeatureItem({ label }) {
  return (
    <div className="flex items-center mb-4">
      <div className="flex items-center justify-center w-6 h-6 mr-3 bg-blue-100 rounded-full">
        <Check className="w-4 h-4 text-blue-600" />
      </div>
      <span className="text-gray-700">{label}</span>
    </div>
  );
}
