import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import Airplane2 from "@/assets/images/airplane2.png";
import SecurityCard from "@/assets/images/security-card.png";
import UserTick from "@/assets/images/user-tick.png";
import Drivng from "@/assets/images/driving.png";
import { useRef } from "react";

const Trasnfers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 320; // adjust if needed

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <section className="px-4 py-10 mx-auto mt-6 max-w-7xl sm:px-8 sm:py-16 bg-blue-50 sm:mt-10 rounded-xl">
        {/* Container using flex instead of grid */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start sm:gap-20">
          {/* Left: Why Book A Transfers */}
          <div className="w-full">
            <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl sm:mb-6">
              Why Book A Transfers
            </h2>
            {/* Horizontal scroll container for icons */}
            <div
              ref={scrollRef}
              className="relative flex gap-3 pb-4 overflow-x-auto flex-nowrap sm:gap-4 scrollbar-hide"
            >
              {/* Card 1 */}
              <div className="bg-gray-50 rounded-xl  p-4 sm:p-5 flex flex-col items-center justify-center text-center min-w-[130px] sm:min-w-[160px] min-h-[140px] sm:min-h-[160px]">
                <Image
                  src={SecurityCard}
                  alt="Price Guarantee"
                  className="w-8 h-8 mb-2 sm:w-10 sm:h-10"
                />
                <p className="text-xs font-medium text-gray-700 sm:text-sm">
                  Price Guarantee
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center min-w-[130px] sm:min-w-[160px] min-h-[140px] sm:min-h-[160px]">
                <Image
                  src={UserTick}
                  alt="Flexible Services"
                  className="w-8 h-8 mb-2 sm:w-10 sm:h-10"
                />
                <p className="text-xs font-medium text-gray-700 sm:text-sm">
                  Flexible Services
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center min-w-[130px] sm:min-w-[160px] min-h-[140px] sm:min-h-[160px]">
                <Image
                  src={Drivng}
                  alt="Vehicle Flexibility"
                  className="w-8 h-8 mb-2 sm:w-10 sm:h-10"
                />
                <p className="text-xs font-medium text-gray-700 sm:text-sm">
                  Vehicle Flexibility
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center min-w-[130px] sm:min-w-[160px] min-h-[140px] sm:min-h-[160px]">
                <Image
                  src={Airplane2}
                  alt="Flight Tracking"
                  className="w-8 h-8 mb-2 sm:w-10 sm:h-10"
                />
                <p className="text-xs font-medium text-gray-700 sm:text-sm">
                  Flight Tracking
                </p>
              </div>
            </div>
            {/* Scroll controls for mobile */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              <button
                onClick={() => scroll("left")}
                className="p-2 bg-blue-100 rounded-full text-primary"
                aria-label="Scroll left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 bg-blue-100 rounded-full text-primary"
                aria-label="Scroll right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Why Book With Us */}
          <div className="w-full mt-8 lg:mt-0">
            <h2 className="mb-2 text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Book With Us
            </h2>
            <p className="mb-4 text-xs font-semibold uppercase text-primary sm:text-sm">
              Our Features
            </p>
            {/* Using flex-wrap to emulate two columns without grid */}
            <ul className="flex flex-wrap -mx-1 text-xs text-gray-800 sm:text-sm">
              <li className="flex items-center w-full px-1 mb-3 space-x-1 sm:w-1/2">
                <CheckCircle className="flex-shrink-0 w-4 h-4 text-primary" />
                <span>24 Hours Service </span>
              </li>
              <li className="flex items-center w-full px-1 mb-3 space-x-1 sm:w-1/2">
                <CheckCircle className="flex-shrink-0 w-4 h-4 text-primary" />
                <span>Flight Monitoring </span>
              </li>
              <li className="flex items-center w-full px-1 mb-3 space-x-1 sm:w-1/2">
                <CheckCircle className="flex-shrink-0 w-4 h-4 text-primary" />
                <span>Fully Licensed Drivers </span>
              </li>
              <li className="flex items-center w-full px-1 mb-3 space-x-1 sm:w-1/2">
                <CheckCircle className="flex-shrink-0 w-4 h-4 text-primary" />
                <span>Waiting Time and Parking </span>
              </li>
              <li className="flex items-center w-full px-1 mb-3 space-x-1 sm:w-1/2">
                <CheckCircle className="flex-shrink-0 w-4 h-4 text-primary" />
                <span>Professional Chauffeur </span>
              </li>
              <li className="flex items-center w-full px-1 mb-3 space-x-1 sm:w-1/2">
                <CheckCircle className="flex-shrink-0 w-4 h-4 text-primary" />
                <span>Meet & Greet </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trasnfers;
