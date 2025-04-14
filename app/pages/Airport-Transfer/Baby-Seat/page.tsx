"use client";

import Hero from "@/components/taxi-from-luton/Hero";
import React from "react";
import { TR4 } from "../../../../assets";
import Trasnfers from "@/components/transfer/trasnfers";
import Section from "@/components/transfer/section";

const Page = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="w-full bg-gradient-to-l from-blue-50 to-transparent">
        <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
          <Hero
            name="Baby Seat"
            description1="Save Up to 40% By Pre Booking You Luton"
            description2="Airport Transfer With Us"
          />
        </div>
        <div className="mt-10">
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
      </div>
    </div>
  );
};

export default Page;
