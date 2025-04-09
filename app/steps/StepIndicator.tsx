import React from "react";
import { Check } from "lucide-react";

const StepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="relative flex items-center justify-between">
        {/* Background line */}
        <div className="absolute top-[20px] left-0 right-0 h-0.5 bg-gray-200 z-0" />

        {/* Filled line */}
        <div
          className="absolute top-[20px] left-0 h-0.5 bg-blue-500 z-10 transition-all duration-500"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />

        {/* Steps */}
        {steps.map((step) => {
          const isActive = currentStep >= step.number;
          const isCompleted = currentStep > step.number;

          return (
            <div
              key={step.number}
              className="relative z-20 flex flex-col items-center text-center w-1/4"
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-400 border-2 border-gray-300"
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-semibold">{step.number}</span>
                )}
              </div>
              <span
                className={`mt-2 text-sm ${
                  isActive ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
