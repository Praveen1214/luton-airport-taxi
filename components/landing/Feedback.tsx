import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const FeedBack = () => {
  const scrollRef = useRef(null);

  const feedbacks = [
    {
      stars: 5,
      text: "Whenever you need airport taxi service, our team is available 24/7 to assist you in a safe and efficient manner",
      name: "Clinton Roth",
      location: "Bedford, UK",
    },
    {
      stars: 5,
      text: "I have used several times for both personal and business travel, and I have always been impressed with their service",
      name: "David Elson",
      location: "Stevenage, UK",
    },
    {
      stars: 5,
      text: "Their online booking system is easy to use, and their customer service is top-notch",
      name: "Jerry Helfer",
      location: "Milton Keynes, UK",
    },
    {
      stars: 5,
      text: "Their online booking system is easy to use, and their customer service is top-notch",
      name: "John Duke",
      location: "Jakarta, Indonesia",
    },
    // Duplicate reviews for continuous scrolling effect
    {
      stars: 5,
      text: "Whenever you need airport taxi service, our team is available 24/7 to assist you in a safe and efficient manner",
      name: "Clinton Roth",
      location: "Bedford, UK",
    },
    {
      stars: 5,
      text: "I have used several times for both personal and business travel, and I have always been impressed with their service",
      name: "David Elson",
      location: "Stevenage, UK",
    },
  ];

  useEffect(() => {
    const scroll = scrollRef.current;
    let animationId;
    let position = 0;

    const animate = () => {
      if (scroll) {
        position -= 0.5;
        scroll.style.transform = `translateX(${position}px)`;

        // Reset position when enough content has scrolled out of view
        if (position <= -1600) {
          position = 0;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const renderStars = (count) => {
    return Array(count)
      .fill(0)
      .map((_, i) => <Star key={i} fill="#FFC107" color="#FFC107" size={20} />);
  };

  return (
    <div className="w-full py-12 overflow-hidden bg-white">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center mb-2">
          <Star fill="#005AF2" color="#005AF2" size={28} className="mr-2" />
          <span className="text-4xl font-bold text-gray-700"> 4.7 </span>
          <span className="ml-2 text-xl text-gray-500"> Out of </span>
          <span className="ml-2 text-4xl font-bold text-gray-700"> 5 </span>
        </div>

        <div className="mb-8 text-gray-500">+2.5 K Happy Customer</div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 py-4"
            style={{ width: "max-content" }}
          >
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-sm w-72"
              >
                <div className="flex mb-2">{renderStars(feedback.stars)}</div>
                <p className="flex-grow mb-6 text-gray-700">
                  {" "}
                  {feedback.text}{" "}
                </p>
                <div className="py-4 border-t border-gray-200">
                  <p className="font-medium text-gray-900"> {feedback.name} </p>
                  <p className="text-sm text-gray-500"> {feedback.location} </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full">
            <span className="sr-only"> Previous </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full">
            <span className="sr-only"> Next </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
