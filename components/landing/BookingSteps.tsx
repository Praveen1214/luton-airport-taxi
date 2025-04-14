import React from "react";
import Image from "next/image";
import { LandingStep1, LandingStep2, LandingStep3 } from "@/assets";

const StepCard = ({ number, title, description, imageSrc }) => (
  <div className="p-6 transition-shadow duration-300 ease-in-out bg-white border-2  border-gray-5 rounded-2xl hover:shadow-xl">
    {/* Image shown only on md and up */}
    <div className="hidden md:flex flex-col items-center mb-6">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={260}
        className="object-contain h-40"
      />
    </div>

    <div className="flex items-start  pt-4 md:border-t-2 border-gray-200 ">
      <div className="mr-4 text-4xl font-bold text-primary"> {number} </div>
      <div>
        <h3 className="mb-2 text-xl font-semibold"> {title} </h3>
        <p className="text-sm text-gray-600"> {description} </p>
      </div>
    </div>
  </div>
);


const BookingSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Book in Advance",
      description: "Instant online quote for your Airport Transfers.",
      imageSrc: LandingStep1, // Update with actual path
    },
    {
      number: "2",
      title: "Vehicle Selection",
      description:
        "Pick you vehicle. We have a large fleet from taxis to minibus",
      imageSrc: LandingStep2, // Update with actual path
    },
    {
      number: "3",
      title: "Pay and Pack",
      description:
        "Pay with trusted partners. Dont worries, we have cancellation policy",
      imageSrc: LandingStep3, // Update with actual path
    },
  ];

  return (
    <div className="relative py-16">
      <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
        Book a Taxi for Luton Airport in 3 Easy Steps
      </h2>

      <div className="relative grid max-w-full grid-cols-1 gap-6 mx-auto md:grid-cols-3">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            imageSrc={step.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;
