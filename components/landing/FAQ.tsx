"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I get a taxi from Luton Airport?",
      answer:
        "You can easily get a taxi from Luton Airport upon arrival. You may call our booking line or book online, although we highly recommend pre-booking in advance for a smoother and hassle-free experience.",
    },
    {
      question: "How long will it take to get to Luton Airport by taxi?",
      answer:
        "The travel time to Luton Airport by taxi varies depending on your pick-up location, traffic conditions, and other factors. We recommend arriving at the airport at least three hours before your flight. Our taxi service uses a flight monitor to keep track of all flights and allocate drivers accordingly to ensure timely pick-up and drop-off.",
    },
    {
      question: "Are Luton Airport taxis available 24/7?",
      answer:
        "Yes, Luton Airport taxis are available 24/7. You can easily book a taxi online at any time or call our booking line, which is also available around the clock.",
    },
    {
      question: "Can I request a specific type of vehicle?",
      answer:
        "At Luton Airport Taxi, we understand that our customers have different preferences and needs. Therefore, we offer a range of vehicle types, including standard cars, executive cars, MPVs, and minibuses.",
    },
  ];

  // All FAQs open by default
  const [openIndexes, setOpenIndexes] = useState(faqs.map((_, i) => i));

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index)); // Close
    } else {
      setOpenIndexes([...openIndexes, index]); // Open
    }
  };

  return (
    <div className="w-full px-4 py-16 mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Left column - Title */}
        <div className="mb-8 md:w-1/3 md:mb-0 md:pr-12">
          <h2 className="text-3xl font-bold text-gray-800"> Explore FAQs </h2>
          <h2 className="text-3xl font-bold text-gray-800">for Quick </h2>
          <h2 className="text-3xl font-bold text-gray-800"> Answers </h2>
        </div>

        {/* Right column - Accordion FAQs */}
        <div className="md:w-2/3">
          <div className="border-l border-gray-200 md:pl-8">
            {faqs.map((faq, index) => (
              <div key={index} className="pb-4 mb-4 border-b cursor-pointer">
                <div
                  className="flex items-center justify-between"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <span className="text-gray-500">
                    {openIndexes.includes(index) ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                </div>

                {openIndexes.includes(index) && (
                  <p className="mt-2 text-sm text-justify text-gray-600 transition-all duration-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
