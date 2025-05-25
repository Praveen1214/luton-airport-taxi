// app/page.tsx
"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import FAQ from "@/components/landing/FAQ";
import { routes } from "@/components/PopularRoutes";
import { FaCarAlt } from "react-icons/fa"; // install with: npm install react-icons
import FeedBack from "@/components/landing/Feedback";
import { CheckCircle } from "lucide-react";

// Images
import Airplane2 from "@/assets/images/airplane2.png";
import SecurityCard from "@/assets/images/security-card.png";
import UserTick from "@/assets/images/user-tick.png";
// import Drivng from "@/assets/images/driving.png";
import MaskGroup from "@/assets/images/mask-group.png";
import ShopingCenter from "@/assets/images/shopping-center.png";
import campbellPark from "@/assets/images/campbel-park.png";
import bletchleyPark from "@/assets/images/bletchley-park.png";
import EasyTreveling from "@/assets/images/easy-traveling.png";
import InstantQuoteGlobal from "@/app/InstantQuoteGlobal";

export default function HomePage() {
  const [quoteStep, setQuoteStep] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // const scroll = (direction: "left" | "right") => {
  //   const container = scrollRef.current;
  //   if (!container) return;

  //   const scrollAmount = 320; // adjust if needed

  //   container.scrollBy({
  //     left: direction === "left" ? -scrollAmount : scrollAmount,
  //     behavior: "smooth",
  //   });
  // };

  const handleClick = (slug: string) => {
    router.push(`/pages/Popular-Routes/${slug}`);
  };

  return (
    <main className="flex flex-col w-full">
      <div className="flex flex-col items-start justify-between md:flex-row mb-5">
        {quoteStep === 1 && (
          <div className="w-full px-10 md:mr-12 -mt-28">
            <div className="max-w-6xl mx-auto mt-44">
              <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-5xl">
                Luton To Milton Keynes Taxi Transfers
              </h1>
              <p className="max-w-xl mx-auto mb-6 text-md text-gray-700 sm:text-base">
                Save up to 40 % by pre - booking your taxi to and from Luton
                airport transfer with us
              </p>
              {/* <Button className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-btn-hover sm:px-6 sm:py-3 sm:text-sm">
                Book Now
              </Button> */}
            </div>
          </div>
        )}
        <div className={`w-full ${quoteStep === 1 ? "mt-8 md:mt-0" : ""}`}>
          <InstantQuoteGlobal onStepChange={setQuoteStep} />
        </div>
      </div>
      {quoteStep === 1 && (
        <>
          {/* Hero Section */}
          <section className="w-full px-0 py-8 text-center md:py-20 md:mt-30">
            {/* Why Book and Why Book With Us */}
            <section className="px-4 py-8 mx-auto mt-6 max-w-7xl sm:px-6 sm:py-12 bg-blue-50 sm:mt-10 rounded-xl lg:px-8 lg:py-16">
              {/* Container using flex instead of grid */}
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
                {/* Left: Why Book A Transfers */}
                <div className="w-full lg:w-1/2">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl lg:text-3xl sm:mb-6 text-left">
                    Why Book A Transfers
                  </h2>
                  {/* Mobile: Stack cards vertically, Desktop: Horizontal scroll */}
                  <div className="block sm:hidden">
                    {/* Mobile: 2x2 Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Card 1 */}
                      <div className="bg-white shadow-sm rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[120px] border border-gray-100 hover:shadow-md transition-shadow">
                        <Image
                          src={SecurityCard}
                          alt="Price Guarantee"
                          className="w-8 h-8 mb-2"
                        />
                        <p className="text-xs font-medium text-gray-700 leading-tight">
                          Price Guarantee
                        </p>
                      </div>
                      {/* Card 2 */}
                      <div className="bg-white shadow-sm rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[120px] border border-gray-100 hover:shadow-md transition-shadow">
                        <Image
                          src={UserTick}
                          alt="Flexible Services"
                          className="w-8 h-8 mb-2"
                        />
                        <p className="text-xs font-medium text-gray-700 leading-tight">
                          Flexible Services
                        </p>
                      </div>
                      {/* Card 3
                      <div className="bg-white shadow-sm rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[120px] border border-gray-100 hover:shadow-md transition-shadow">
                        <Image
                          src={Drivng}
                          alt="Vehicle Flexibility"
                          className="w-8 h-8 mb-2"
                        />
                        <p className="text-xs font-medium text-gray-700 leading-tight">
                          Vehicle Flexibility
                        </p>
                      </div> */}
                      {/* Card 4 */}
                      <div className="bg-white shadow-sm rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[120px] border border-gray-100 hover:shadow-md transition-shadow">
                        <Image
                          src={Airplane2}
                          alt="Flight Tracking"
                          className="w-8 h-8 mb-2"
                        />
                        <p className="text-xs font-medium text-gray-700 leading-tight">
                          Flight Tracking
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tablet and Desktop: Horizontal scroll */}
                  <div className="hidden sm:block">
                    <div
                      ref={scrollRef}
                      className="relative flex gap-4 pb-4 overflow-x-auto flex-nowrap lg:gap-6 scrollbar-hide"
                    >
                      {/* Card 1 */}
                      <div className="bg-white shadow-sm rounded-xl p-5 flex flex-col items-center justify-center text-center min-w-[140px] lg:min-w-[160px] min-h-[140px] lg:min-h-[160px] border border-gray-100 hover:shadow-md transition-shadow flex-shrink-0">
                        <Image
                          src={SecurityCard}
                          alt="Price Guarantee"
                          className="w-10 h-10 mb-3 lg:w-12 lg:h-12"
                        />
                        <p className="text-sm font-medium text-gray-700 lg:text-base">
                          Price Guarantee
                        </p>
                      </div>
                      {/* Card 2 */}
                      <div className="bg-white shadow-sm rounded-xl p-5 flex flex-col items-center justify-center text-center min-w-[140px] lg:min-w-[160px] min-h-[140px] lg:min-h-[160px] border border-gray-100 hover:shadow-md transition-shadow flex-shrink-0">
                        <Image
                          src={UserTick}
                          alt="Flexible Services"
                          className="w-10 h-10 mb-3 lg:w-12 lg:h-12"
                        />
                        <p className="text-sm font-medium text-gray-700 lg:text-base">
                          Flexible Services
                        </p>
                      </div>
                      {/* Card 3
                      <div className="bg-white shadow-sm rounded-xl p-5 flex flex-col items-center justify-center text-center min-w-[140px] lg:min-w-[160px] min-h-[140px] lg:min-h-[160px] border border-gray-100 hover:shadow-md transition-shadow flex-shrink-0">
                        <Image
                          src={Drivng}
                          alt="Vehicle Flexibility"
                          className="w-10 h-10 mb-3 lg:w-12 lg:h-12"
                        />
                        <p className="text-sm font-medium text-gray-700 lg:text-base">
                          Vehicle Flexibility
                        </p>
                      </div> */}
                      {/* Card 4 */}
                      <div className="bg-white shadow-sm rounded-xl p-5 flex flex-col items-center justify-center text-center min-w-[140px] lg:min-w-[160px] min-h-[140px] lg:min-h-[160px] border border-gray-100 hover:shadow-md transition-shadow flex-shrink-0">
                        <Image
                          src={Airplane2}
                          alt="Flight Tracking"
                          className="w-10 h-10 mb-3 lg:w-12 lg:h-12"
                        />
                        <p className="text-sm font-medium text-gray-700 lg:text-base">
                          Flight Tracking
                        </p>
                      </div>
                    </div>
                    {/* Scroll controls for tablet */}
                    {/* <div className="flex justify-center gap-3 mt-4 sm:hidden lg:flex lg:justify-start">
                      <button
                        onClick={() => scroll("left")}
                        className="p-3 bg-white shadow-sm rounded-full text-primary border border-gray-200 hover:shadow-md hover:bg-blue-50 transition-all"
                        aria-label="Scroll left"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
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
                        className="p-3 bg-white shadow-sm rounded-full text-primary border border-gray-200 hover:shadow-md hover:bg-blue-50 transition-all"
                        aria-label="Scroll right"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
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
                    </div> */}
                  </div>
                </div>

                {/* Right: Why Book With Us */}
                <div className="w-full mt-6 lg:mt-0 lg:w-1/2">
                  <h2 className="mb-2 text-xl font-semibold text-gray-900 sm:text-2xl lg:text-3xl text-left">
                    Why Book With Us
                  </h2>
                  <p className="mb-6 text-xs font-semibold uppercase text-primary sm:text-sm text-left tracking-wide">
                    Our Features
                  </p>
                  {/* Mobile: Single column, Desktop: Two columns */}
                  <ul className="grid grid-cols-1 gap-4 text-sm text-gray-800 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 lg:text-base">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-primary" />
                      <span className="font-medium">24 Hours Service</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-primary" />
                      <span className="font-medium">Flight Monitoring</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-primary" />
                      <span className="font-medium">
                        Fully Licensed Drivers
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-primary" />
                      <span className="font-medium">
                        Waiting Time and Parking
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-primary" />
                      <span className="font-medium">
                        Professional Chauffeur
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-primary" />
                      <span className="font-medium">Meet & Greet</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Left Column: Image - On mobile, this appears below the text */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  <div className="p-4 border-gray-200 rounded-xl bg-blue-50">
                    <Image
                      src={EasyTreveling}
                      alt="Luton Airport Taxi"
                      className="w-full h-auto rounded-tl-2xl"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                        Luton Airport Taxi
                      </h3>
                      <p className="text-xs font-medium text-primary sm:text-sm">
                        Fast & Reliable
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Text */}
                <div className="w-full md:w-2/3 align-start">
                  <h2
                    className="mb-5 text-left
        text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl"
                  >
                    Milton Keynes Taxi
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Looking for a trusted{" "}
                    <strong>Milton Keynes taxi service</strong> to or from
                    <strong>Luton Airport ? At LutonAirportTaxi.co.uk</strong>,
                    we specialise in fast, fixed - price airport transfers with
                    professional drivers and modern vehicles.Whether you are
                    heading to a hotel, home, or business meeting, we provide
                    direct, door-to-door service—no delays, no transfers, and no
                    hidden fees.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Milton Keynes is a major town in Buckinghamshire known for
                    its modern layout, excellent shopping, and historic
                    landmarks.Our drivers cover the entire area—from the city
                    centre to outlying business parks—ensuring your journey is
                    smooth and stress - free.
                  </p>
                </div>
              </div>
            </section>

            {/* Milton Keynes to Luton Airport Taxi Time Interval */}
            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Left Column */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Milton Keynes to Luton Airport{" "}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    With our Milton Keynes to Luton Airport taxi, you can reach
                    the Luton airport within a nominal time. It is approximately
                    24.7 miles if we use the M1 motorway for traveling. An
                    alternative way is an A421 patch which is 23.1 miles away
                    but it takes a minimum of 33 minutes because of slow
                    traffic.
                  </p>
                  <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    The interval from Milton Keynes to Luton Town via the M1
                    route is approximately 29 minutes. The distance between
                    Luton and Milton Keynes is approximately 22.5 miles (36.2
                    km). Because of the fast and casual traffic of the M1
                    Motorway, it is not hard to cover this distance in this
                    time.
                  </p>
                </div>

                {/* Right Column */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  <div className="p-4 rounded-lg bg-blue-50">
                    <Image
                      src={MaskGroup}
                      alt="Luton Airport Taxi"
                      className="w-full h-auto rounded-md"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                        Luton Airport Taxi
                      </h3>
                      <p className="text-xs font-medium text-primary sm:text-sm">
                        Fast & Reliable
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Right Column */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  <div className="p-4 rounded-lg bg-blue-50">
                    <Image
                      src={MaskGroup}
                      alt="Luton Airport Taxi"
                      className="w-full h-auto rounded-md"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                        Luton Airport Taxi
                      </h3>
                      <p className="text-xs font-medium text-primary sm:text-sm">
                        Fast & Reliable
                      </p>
                    </div>
                  </div>
                </div>

                {/* Left Column */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Milton Keynes to Luton Airport
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    We offer 24 / 7 transfers from Milton Keynes to Luton
                    Airport, with drivers who know the best routes to get you
                    there quickly and comfortably.Whether you are heading out on
                    an early flight or arriving home after a trip, our service
                    is always ready when you are.
                  </p>

                  <div className="items-start justify-start text-start">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">
                      {" "}
                      <div className="items-start justify-start text-start">
                        {/* <h3 className="mb-2 text-lg font-semibold text-gray-800">
                          {" "}
                          You’ll enjoy:{" "}
                        </h3> */}
                      </div>{" "}
                    </h3>
                    <ul className="pl-6 space-y-1 text-sm text-gray-700 list-disc sm:text-base">
                      <li>Pickup directly from your door </li>
                      <li>Fixed fares confirmed in advance </li>
                      <li>Free child seats on request </li>
                      <li>
                        {" "}
                        Group options via{" "}
                        <a className="font-semibold text-primary" href="">
                          Minibus Hire
                        </a>{" "}
                      </li>
                      <li>
                        <a className="font-semibold text-primary" href="">
                          Wheelchair Accessible Taxis
                        </a>{" "}
                        available{" "}
                      </li>
                      <li>
                        {" "}
                        Executive options through our{" "}
                        <a className="font-semibold text-primary" href="">
                          {" "}
                          Chauffeur Service
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <li>24 / 7 customer support </li>{" "}
                      </li>
                    </ul>
                  </div>
                  <br />

                  <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    From Centre:MK and Willen Lake to Bletchley Park or Milton
                    Keynes Coachway, we cover every location with precision
                    timing and professional care.
                  </p>
                </div>
              </div>
            </section>

            {/* Traveling To And From Milton Keynes */}
            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Right Column: Text */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Traveling To And From Milton Keynes
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Luton Airport Taxi is a leading taxi company in Luton. Our
                    Company is not only one of the best Luton airport taxi
                    service providers but also famous in surrounding areas such
                    as Bedfordshire and Milton Keynes. Our Milton Keynes to
                    Luton airport taxi is a sound, secure, accurate, and cheap
                    taxi service. You can easily hire a taxi with an online
                    booking system.
                  </p>
                  <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    We have multiple and updated vehicles, which are equipped
                    and connected to the satellite system. Our Milton Keynes to
                    Luton airport taxi includes a baby seat, meet & greet, and
                    more. Beware of booking with those service providers which
                    are ranking and having 200% expensive prices. So, book
                    Milton Keynes to Luton airport taxi with us now to save your
                    time and money.
                  </p>
                </div>
                {/* Left Column: Image - On mobile, this appears below the text */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  <div className="p-4 border-gray-200 rounded-xl bg-blue-50">
                    <Image
                      src={EasyTreveling}
                      alt="Luton Airport Taxi"
                      className="w-full h-auto rounded-tl-2xl"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                        Luton Airport Taxi
                      </h3>
                      <p className="text-xs font-medium text-primary sm:text-sm">
                        Fast & Reliable
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="max-w-6xl px-4 py-12 mx-auto sm:py-16 md:py-20">
              <div className="space-y-12">
                {/* Hero Heading with gradient background */}
                <div className="text-center">
                  <div className="inline-block px-6 py-2 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                    Milton Keynes Airport Transfer
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
                    Why Book a Taxi Instead of Public Transport?
                  </h2>
                </div>

                {/* Introduction Card */}
                <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-sm border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 sm:text-2xl">
                    Airport Taxi Milton Keynes
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                    Choosing an{" "}
                    <strong className="text-blue-700">
                      airport taxi from Milton Keynes
                    </strong>{" "}
                    over public transport saves you time, hassle, and
                    energy—especially when travelling with luggage or children.
                    Here is how we compare to other transport options:
                  </p>
                </div>

                {/* Enhanced Comparison Table */}
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Transport Comparison
                    </h4>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Mode
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Time
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Cost
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Summary
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="bg-blue-50 hover:bg-green-100 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-green-800 mr-2">
                                Recommended
                              </span>
                              <span className="font-semibold text-gray-900">
                                Taxi
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                            35–45 mins
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                            £50–£65
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            Direct, door-to-door. Private, 24/7. Best for
                            groups, families, and luggage.
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-gray-900">
                            Train
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            1.5–2 hrs
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            £30–£100 pp
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            No direct route. Multiple changes via London.
                            Inconvenient.
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-gray-900">
                            Bus
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            1h 20 mins
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            £2–£3 pp
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            Cheap but slow. Multiple stops and less comfort.
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-gray-900">
                            Coach
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            ~1 hr
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            £10–£20 pp
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            Stops only at MK Coachway. Requires extra transport
                            to town centre.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Benefit highlight */}
                <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-50 rounded-xl border border-blue-200">
                  <p className="text-base leading-relaxed text-gray-700 text-center sm:text-lg">
                    With our service, you avoid crowded stations, missed
                    connections, and long walks with luggage. Just book, meet
                    your driver, and go.
                  </p>
                </div>

                {/* About Milton Keynes - Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        About Milton Keynes
                      </h3>
                      <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                        Milton Keynes is home to more than 250,000 residents and
                        offers excellent links to London, Birmingham, and
                        beyond. With the M1 motorway and fast train services to
                        London Euston, it is a hub for commuters, businesses, and
                        visitors alike.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Popular Destinations
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h5 className="font-bold text-gray-900 mb-2">
                          Centre: MK
                        </h5>
                        <p className="text-sm text-gray-600">
                          Europe is largest indoor shopping mall
                        </p>
                      </div>
                      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h5 className="font-bold text-gray-900 mb-2">
                          Bletchley Park
                        </h5>
                        <p className="text-sm text-gray-600">
                          The WWII codebreaking site
                        </p>
                      </div>
                      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h5 className="font-bold text-gray-900 mb-2">
                          Willen Lake
                        </h5>
                        <p className="text-sm text-gray-600">
                          Ideal for family recreation
                        </p>
                      </div>
                      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h5 className="font-bold text-gray-900 mb-2">
                          Xscape MK
                        </h5>
                        <p className="text-sm text-gray-600">
                          Entertainment complex with indoor skiing, cinema &
                          more
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                    No matter your destination, our drivers know the area well
                    and ensure a smooth, direct journey every time.
                  </p>
                </div>

                {/* Enhanced CTA Section */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white ">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 sm:text-3xl">
                      Book Your Milton Keynes Airport Taxi Now
                    </h3>
                    <p className="text-lg leading-relaxed text-blue-100 max-w-3xl mx-auto">
                      Whether youare arriving at Luton Airport or heading out
                      from Milton Keynes, book your taxi today with{" "}
                      <strong className="text-white">
                        LutonAirportTaxi.co.uk
                      </strong>
                      . We offer the most efficient, reliable, and
                      customer-focused{" "}
                      <strong className="text-white">
                        airport taxi service in Milton Keynes
                      </strong>{" "}
                      — with clear pricing, local drivers, and no surprises.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <span className="text-2xl mr-3">✓</span>
                      <span className="font-medium">Instant booking</span>
                    </div>
                    <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <span className="text-2xl mr-3">✓</span>
                      <span className="font-medium">Fixed fares</span>
                    </div>
                    <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <span className="text-2xl mr-3">✓</span>
                      <span className="font-medium">24/7 service</span>
                    </div>
                    <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <span className="text-2xl mr-3">✓</span>
                      <span className="font-medium">Professional drivers</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-lg font-medium text-blue-100 mb-6">
                      Make your journey simple.{" "}
                      <strong className="text-white">Book now</strong> and
                      travel with confidence.
                    </p>
                    <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
                      Book Your Taxi Now
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
              </div>
            </section>

            {/* Ways to travel section - Fixed the excessive margin */}
            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
                {/* Heading */}
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
                  Ways to travel to Milton Keynes
                </h2>
                {/* Paragraphs */}
                <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                  There are many ways to travel to Milton Keynes from Luton.
                  Such as Local bus, Coach and Train. But Milton Keynes to or
                  from Luton airport taxi is the best and reliable way for this.
                </p>
                <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                  Some of the public transport are listed below with some detail
                  which you can utilize for traveling From Luton To Milton
                  Keynes.
                </p>
                <h3 className="text-base font-semibold text-gray-900">
                  Luton to Milton Keynes by Train
                </h3>
                <p className="text-sm text-justify text-gray-700 sm:text-base">
                  Some people use the Luton airport taxi to Milton Keynes but
                  some others prefer to train for traveling purposes. So here is
                  you can travel to Milton Keynes by train
                </p>
                <div className="px-4 py-4 text-xs leading-relaxed text-justify text-gray-700 bg-gray-100 rounded-lg sm:px-6 sm:py-5 sm:text-sm">
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>
                      Go to Luton Train Station LU1 2LT and purchase a ticket to
                      Milton Keynes
                    </li>
                    <li>
                      Another way is to go to Luton Airport Parkway Station LU1
                      3JH to purchase tickets
                    </li>
                    <li>
                      Enjoy your journey in a train, also you can do the same
                      with Luton airport taxi to Milton Keynes
                    </li>
                    <li>
                      Get off at Central Railway Station MK9 1LA of Milton
                      Keynes
                    </li>
                  </ol>
                </div>
                <div className="flex items-start gap-2 p-3 text-xs rounded-md text-primary sm:text-sm bg-blue-50 rounded-tl-xl">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>
                    Every 15–30 minutes a train leaves to Milton Keynes from
                    Luton
                  </p>
                </div>
              </div>
            </section>

            {/* Table of Prices */}
            <section className="max-w-5xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="mb-6 text-center sm:mb-8 md:mb-12">
                <h2 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
                  How much will a Taxi cost to Luton Airport
                </h2>
                <p className="text-sm text-primary sm:text-base">
                  Here is the list of our estimated prices for taxi to/from
                  Luton Airport
                </p>
              </div>

              {/* Table with responsive design */}
              <div className="-mx-4 overflow-x-auto sm:mx-0">
                <div className="inline-block min-w-full px-4 align-middle sm:px-0">
                  <table className="min-w-full overflow-hidden text-sm border-collapse rounded-lg table-auto">
                    <thead className="text-left bg-white text-primary">
                      <tr>
                        <th className="px-3 py-3 text-xs font-semibold sm:px-6 md:px-20 sm:py-4 sm:text-sm md:text-base">
                          Airport Pick-up
                        </th>
                        <th className="px-3 py-3 text-xs font-semibold sm:px-6 md:px-20 sm:py-4 sm:text-sm md:text-base">
                          Journey Time
                        </th>
                        <th className="px-3 py-3 text-xs font-semibold sm:px-6 md:px-20 sm:py-4 sm:text-sm md:text-base">
                          Single Trip
                        </th>
                        <th className="px-3 py-3 text-xs font-semibold sm:px-6 md:px-20 sm:py-4 sm:text-sm md:text-base">
                          Return Trip
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-xs text-center text-gray-700 sm:text-sm">
                      {[
                        "Milton Keynes",
                        "Watford",
                        "London",
                        "St Albans",
                        "Stevenage",
                        "Aylesbury",
                        "Hitchin",
                        "Bedford",
                      ].map((location, idx) => (
                        <tr
                          key={location}
                          className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="px-3 py-3 text-left sm:px-6 sm:py-4">
                            {location}
                          </td>
                          <td className="px-3 py-3 sm:px-6 sm:py-4">£130</td>
                          <td className="px-3 py-3 sm:px-6 sm:py-4">£130</td>
                          <td className="px-3 py-3 sm:px-6 sm:py-4">£130</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footnote */}
              <p className="max-w-5xl p-3 mx-auto mt-4 text-xs text-center text-justify rounded-md text-primary sm:mt-6 sm:text-sm bg-blue-50">
                * These prices are based at non peak times travelling in a
                standard vehicle with 3 passengers and 2 luggage
              </p>
            </section>

            {/* FAQ Section */}
            <section className="px-4 mx-auto bg-white max-w-7xl">
              <FAQ />
            </section>

            {/* Top 3 Places in Milton Keynes */}
            <section className="px-4 py-8 mx-auto bg-white max-w-7xl sm:py-12 md:py-16">
              <h2 className="mb-6 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl sm:mb-8">
                Top 3 Places to visit in Milton Keynes
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-8">
                {/* Shopping Center */}
                <div className="p-4 bg-white rounded-lg shadow">
                  <div className="mb-4">
                    <Image
                      src={ShopingCenter}
                      alt="Shopping Center"
                      width={400}
                      height={250}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <h3 className="mb-2 text-base font-medium text-gray-800 sm:text-lg">
                    Shopping Center
                  </h3>
                  <p className="text-xs leading-relaxed text-justify text-gray-600 sm:text-sm">
                    Milton Keynes is known for its famous shopping center: The
                    Centre:MK, one of the largest and most popular in the UK.
                  </p>
                </div>

                {/* Campbell Park */}
                <div className="p-4 bg-white rounded-lg shadow">
                  <div className="mb-4">
                    <Image
                      src={campbellPark}
                      alt="Campbell Park"
                      width={400}
                      height={250}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <h3 className="mb-2 text-base font-medium text-gray-800 sm:text-lg">
                    Campbell Park
                  </h3>
                  <p className="text-xs leading-relaxed text-justify text-gray-600 sm:text-sm">
                    Campbell Park in Milton Keynes is a public park named after
                    the first chairman of the Milton Keynes Development
                    Corporation, John Campbell.
                  </p>
                </div>

                {/* Bletchley Park */}
                <div className="p-4 bg-white rounded-lg shadow">
                  <div className="mb-4">
                    <Image
                      src={bletchleyPark}
                      alt="Bletchley Park"
                      width={400}
                      height={250}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <h3 className="mb-2 text-base font-medium text-gray-800 sm:text-lg">
                    Bletchley Park
                  </h3>
                  <p className="text-xs leading-relaxed text-justify text-gray-600 sm:text-sm">
                    The British Government Code and Cypher School, including
                    Alan Turing, played a critical role cracking German military
                    codes at Bletchley Park during World War II.
                  </p>
                </div>
              </div>
            </section>

            {/* Reviews / Ratings Section */}
            <section className="px-4 py-8 mx-auto bg-white max-w-7xl sm:py-12 md:py-16">
              <FeedBack />
            </section>

            {/* Popular Routes */}
            <section className="px-4 py-8 mx-auto max-w-7xl sm:py-12 md:py-16">
              <div className="mb-6 text-center sm:mb-8 md:mb-12">
                <p className="text-xs font-medium text-primary sm:text-sm">
                  Explore Our Top-Rated Destinations
                </p>
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
                  Popular Routes
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
                {routes.map((route, i) => (
                  <div
                    key={i}
                    onClick={() => handleClick(route.slug)}
                    className="flex flex-col gap-2 px-3 py-4 transition bg-white border border-gray-200 shadow-sm cursor-pointer rounded-xl sm:px-4 sm:py-5 hover:shadow-md hover:border-blue-500"
                  >
                    <div className="flex items-center justify-between text-xs font-medium text-gray-900 sm:text-sm">
                      <span>{route.from}</span>
                      <span className="text-sm font-bold tracking-wider text-gray-400 sm:text-xl">
                        {">>>"}
                      </span>
                      <span>{route.to}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-600 sm:gap-2 sm:text-sm">
                      <FaCarAlt className="text-primary" />
                      <span>{route.duration}</span>
                      <span className="text-gray-400">· {route.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </>
      )}
      ;
    </main>
  );
}
