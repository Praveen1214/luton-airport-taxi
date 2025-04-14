import React from "react";
import {Ben1, Ben2, Ben3} from '../../assets'
import Image from "next/image";

const Benefit = () => {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description:
        "Register as a driver by filling out the form and uploading the required documents.",
      imageSrc: Ben1,
    },
    {
      number: 2,
      title: "Wait for confirmation",
      description:
        "You will wait for our confirmation and be contacted soon by our team.",
      imageSrc: Ben2,
    },
    {
      number: 3,
      title: "Start Earning",
      description:
        "You will be ready to receive passengers once you receive confirmation on your phone.",
      imageSrc: Ben3,
    },
  ];

  return (
    <div className="max-w-6xl px-4 mx-auto">
      <h2 className="mb-2 text-3xl font-bold text-center">
        Join our team as a driver and
      </h2>
      <div className="relative mb-16 text-center">
        <span className="relative inline-block text-3xl font-bold">
          enjoy the benefits
          <div className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 -z-10">
            {" "}
          </div>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Content */}
            <div className="pt-6">
              <div className="flex justify-center p-6 mb-4">
                <Image
                  src={step.imageSrc}
                  alt={step.title}
                  className="w-full h-auto rounded"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-center"> {step.title} </h3>
              <p className="text-center text-gray-600"> {step.description} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
