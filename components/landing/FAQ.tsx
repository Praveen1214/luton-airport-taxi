"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a taxi from Luton Airport?",
      answer: (
        <>
          Use our online booking system to reserve your{" "}
          <strong> taxi from Luton Airport </strong> instantly. Enter your
          arrival time, flight details, and destination.Your driver will be
          dispatched based on real - time flight tracking.
        </>
      ),
    },
    {
      question: "Are your Luton Airport taxi prices fixed?",
      answer: (
        <>
          Yes.All <strong> Luton Airport taxi prices </strong> are fixed at the
          time of booking. No hidden charges, no surge pricing.What you see at
          checkout is what you pay.
        </>
      ),
    },
    {
      question:
        "Do you provide airport taxi transfers to and from other towns?",
      answer: (
        <>
          Yes.We offer <strong> airport taxi transfers </strong> to and from
          Luton Airport covering{" "}
          <strong> Milton Keynes, Watford, St Albans, Bedford, London </strong>,
          and surrounding areas.All journeys are direct and professionally
          managed.
        </>
      ),
    },
    {
      question: "Is Meet & Greet available at Luton Airport?",
      answer: (
        <>
          Yes.Our <strong> Meet & Greet </strong> service includes terminal
          entry, a name-board display, and assistance with luggage.Ideal for
          first - time visitors or business clients using our{" "}
          <strong>Luton Airport taxi service </strong>.
        </>
      ),
    },
  ];

  const [openIndexes, setOpenIndexes] = useState(faqs.map((_, i) => i));

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
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
