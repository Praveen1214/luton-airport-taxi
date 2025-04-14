// src/app/page.js
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Clock, Users } from "lucide-react";
import Image from "next/image";
import BusinessTravelimg from "@/assets/images/business-travel.png";
import FAQ from "@/components/landing/FAQ";
import Tips from "@/components/landing/Tips";

export default function BusinessTravel() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="w-full py-2 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Business Travel
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Save Up to 40% By Pre Booking Your Luton Airport Transfer With Us
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base rounded-md">
            Book Now
          </Button>
        </div>
      </section>

      {/* Why Book a Transfer Section */}
      <section className="max-w-7xl mx-auto px-4 bg-white">
        {/* Outer container with background & rounded corners */}
        <div className="bg-[#F8FAFF] rounded-xl shadow-sm p-6 md:p-12">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Why Book a Transfer
          </h2>

          {/* Top Three Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Single Feature Card */}
            <div className="flex items-center p-4 bg-white rounded-xl shadow">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <span className="font-medium text-gray-800 text-lg">
                Price Guarantee
              </span>
            </div>

            <div className="flex items-center p-4 bg-white rounded-xl shadow">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <span className="font-medium text-gray-800 text-lg">
                Flexible Services
              </span>
            </div>

            <div className="flex items-center p-4 bg-white rounded-xl shadow">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <span className="font-medium text-gray-800 text-lg">
                Vehicle Flexibility
              </span>
            </div>
          </div>

          {/* Detailed Features */}
          <div className="flex flex-col md:flex-row items-start">
            {/* Left Column: Heading / Subtext */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Why Book With Us
              </h3>
              <p className="text-blue-600 font-medium cursor-pointer">
                Our Features
              </p>
            </div>

            {/* Right Column: List of Features */}
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
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
      <section className="max-w-7xl mx-auto px-4 bg-white">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Business Travel
            </h2>
            <p className="text-blue-600 mb-4">
              Drive your way to the airport: Self-drive hire made easy
            </p>
            <p className="text-gray-600 mb-4">
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
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={BusinessTravelimg}
                alt="Business Travel"
                width={600}
                height={400}
                className="object-cover w-full h-64 md:h-96 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Business Travel
                </h3>
                <p className="text-white text-sm mb-1">
                  Watford To Luton Airport
                </p>
                <p className="text-blue-400 font-medium">Fast & Reliable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sections */}
      <section className="max-w-7xl mx-auto px-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Executive Business Travel
              </h3>
              <p className="text-blue-600 mb-6">
                Business Travel Made Easy with our Services
              </p>
              <p className="text-gray-600">
                We understand that every business traveler has unique travel
                needs. Our executive services are designed to provide a
                comfortable and productive journey.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Business Account
              </h3>
              <p className="text-blue-600 mb-6">
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
       <section className="max-w-7xl mx-auto px-4 bg-white">
        <FAQ />
      </section>

      {/* Tips Section */}
      <section className="max-w-7xl mx-auto px-4 bg-white">
        <Tips />
      </section>


    </main>
  );
}

/* Optional: extract repeated feature items into a component */
function FeatureItem({ label }) {
  return (
    <div className="flex items-center mb-4">
      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
        <Check className="h-4 w-4 text-blue-600" />
      </div>
      <span className="text-gray-700">{label}</span>
    </div>
  );
}
