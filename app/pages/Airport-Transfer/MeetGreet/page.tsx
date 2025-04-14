"use client";

import Hero from "@/components/taxi-from-luton/Hero";
import React from "react";
import { TR2 } from "../../../../assets";
import Trasnfers from "@/components/transfer/trasnfers";
import Section from "@/components/transfer/section";
import FeedBack from "@/components/landing/Feedback";
import FAQ from "@/components/landing/FAQ";
import Tips from "@/components/landing/Tips";

const Page = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="w-full bg-gradient-to-l from-blue-50 to-transparent">
        <div className="container px-4 py-8 mx-auto md:px-6 lg:px-8">
          <Hero
            name="Meet & Greet"
            description1="Save Up to 40% By Pre Booking You Luton"
            description2="Airport Transfer With Us"
          />
          <div className="mt-10">
            <Trasnfers />
          </div>
          <div className="mt-10">
            <Section
              t1="Luton Airport Meet & Greet"
              t2="Pick up Location At Luton Airport"
              t3="Pick up without Meet & Greet"
              st1="Relax and Enjoy Your Arrival with Our Meet and Greet Service"
              st2="Professional Meet and Greet Service"
              st3="Elevate Your Travel Experience with Our Professional Drivers"
              d1={`At our transportation service, we understand that first impressions are crucial. That's why we offer an exceptional meet and greet service that ensures your journey starts off on the right foot.
Our professional and courteous driver will be waiting for you at your designated meeting point, ready to assist you with your luggage and any other needs you may have.Whether you're arriving at the airport, train station, or any other location, our meet and greet service will ensure that you receive a warm welcome and a seamless start to your journey.`}
              d2="Our meet and greet service is available for all of our transportation options, including airport transfers, train station pick-ups, and more. We provide a personalized service that ensures your driver is waiting for you when you arrive, with a friendly smile and a willingness to help you with your luggage or any other needs you may have."
              d3="Our professional and courteous drivers are well-trained and experienced, ensuring that you will receive the highest level of service and attention to detail. We take pride in our commitment to providing our clients with a stress-free and enjoyable travel experience, and our meet and greet service is just one of the many ways we go above and beyond for our clients."
              image={TR2}
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
        </div>
      </div>
    </div>
  );
};

export default Page;
