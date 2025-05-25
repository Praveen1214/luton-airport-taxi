// app/page.tsx
"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
import Head from "next/head";

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
      <Head>
        <title>Luton to Stevenage Taxi Transfers - LutonAirportTaxi.co.uk</title>
        <meta
          name="description"
          content="Book your Luton to Stevenage taxi transfers with us and save up to 40%. Fast, reliable, and fixed-price airport transfers."
        />
      </Head>
      <div className="flex flex-col items-start justify-between md:flex-row mb-5">
        {quoteStep === 1 && (
          <div className="w-full px-10 md:mr-12 -mt-28">
            <div className="max-w-6xl mx-auto mt-44">
              <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-5xl">
                Luton To Stevenage Taxi Transfers
              </h1>
              <p className="max-w-xl mx-auto mb-6 text-sm text-gray-700 sm:text-base">
                Save Up to 40 % By Pre Booking Your Stevenage Airport Transfer
                With Us
              </p>
              <Button className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-btn-hover sm:px-6 sm:py-3 sm:text-sm">
                Book Now
              </Button>
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
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Stevenage Taxi
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    At <strong>LutonAirportTaxi.co.uk</strong>, we provide fast,
                    reliable, and fixed - price{" "}
                    <strong>
                      airport taxi transfers from Stevenage to Luton Airport.
                    </strong>{" "}
                    Whether you are flying for work, leisure, or need a return
                    pickup, our 24/7 service ensures you get there safely and on
                    time — without the stress of public transport or confusing
                    connections.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Located just <strong>1 mile from Luton Airport</strong>, we
                    dispatch vehicles across <strong>Hertfordshire</strong>,
                    including regular pickups in{" "}
                    <strong>
                      Stevenage town centre, Old Town, Great Ashby
                    </strong>
                    , and <strong>Chells</strong>.Our local drivers know the
                    routes, shortcuts, and traffic conditions, ensuring
                    efficient pickups no matter where you are.
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
                    Stevenage to Luton Airport Taxi Time Interval
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    With our Stevenage to Luton Airport taxi, you can reach to
                    the Luton airport within 31 minutes time interval.It is
                    approximately 24.7 miles if we use the M1 motorway for
                    traveling.An alternative way is an A421 path which is 23.1
                    miles away but it takes a minimum of 33 minutes because of
                    slow traffic.
                  </p>
                  <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    The interval from Stevenage to Luton Town via taxi or your
                    own car is approximately 29 minutes.The distance between
                    Luton and Stevenage is approximately 22.5 miles which are
                    equal to 36.2 km.Because of the fast and casual traffic of
                    M1 Motorway, it is not hard to cover this distance at this
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
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          {/* Left Column */}
          <div className="w-full ">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Stevenage to Luton Airport Transfers – Reliable and Direct
                </h2>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                <p className="text-base leading-relaxed text-blue-900">
                  Stevenage is around <span className="font-bold text-blue-700">18 miles</span> from Luton
                  Airport — a typical journey takes <span className="font-bold text-blue-700">25–35 minutes</span>, 
                  depending on traffic. Unlike trains or buses, we offer a 
                  <span className="font-bold text-blue-700"> door-to-door service</span> that starts at
                  your front door and ends right at the airport terminal.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-800 flex items-center gap-2">
                  We offer:
                </h3>
                <div className="grid gap-3">
                  {[
                    "Fixed fares with no surge pricing",
                    "Meet & Greet at the terminal (optional)",
                    "Luggage assistance and child seats available",
                    "Minibus Hire for larger families or corporate groups",
                    "Wheelchair Accessible Taxis for passengers with mobility needs",
                    "Chauffeur Service for a premium travel experience",
                    "Flight monitoring to ensure on-time pickups and drop-offs"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl">
                <p className="text-lg leading-relaxed">
                  You will never need to carry your bags through stations or rely on limited service hours — 
                  we are available <span className="font-bold">24/7</span> and always on schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="w-full">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Why Our Airport Taxi Service is Better Than Public Transport
                </h2>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
                <p className="text-base leading-relaxed text-red-900">
                  Public transport between Stevenage and Luton Airport typically involves multiple changes. 
                  Trains may require transfers at <span className="font-bold">Hitchin</span> or 
                  <span className="font-bold"> Luton Airport Parkway</span>, followed by a shuttle bus to the terminal. 
                  Travel times can stretch well over an hour, with long waits between services.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-800 flex items-center gap-2">
                  Our service gives you:
                </h3>
                <div className="grid gap-3">
                  {[
                    "One vehicle — no changes, no waiting",
                    "Flexible pickup times",
                    "More luggage space",
                    "Safer, private travel — perfect for families and business clients"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-black p-6 rounded-xl">
                <p className="text-lg leading-relaxed">
                  With our taxi, you arrive <span className="font-bold">relaxed and ready</span> — not flustered or late.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Times Table */}
      <section className="w-full px-4 py-8 mx-auto sm:py-12 md:py-16">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-white">
                Travel Times from Stevenage to Luton Airport
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-blue-50 border-b border-blue-200">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      Pickup Area
                    </div>
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      Approx. Travel Time
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { area: "Stevenage Town Centre", time: "30 minutes" },
                  { area: "Great Ashby", time: "35 minutes" },
                  { area: "Chells", time: "28 minutes" },
                  { area: "Stevenage Old Town", time: "30 minutes" },
                  { area: "Broadwater", time: "32 minutes" }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors duration-200">
                    <td className="py-5 px-6 font-medium text-gray-900">
                      {row.area}
                    </td>
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {row.time}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-t border-blue-200 p-6">
            <div className="flex items-start gap-3">
              <p className="text-sm leading-relaxed text-blue-800">
                We monitor live traffic data and flight updates to ensure your ride is perfectly timed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Book Your Stevenage to Luton Airport Taxi Today
              </h2>
            </div>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg leading-relaxed text-blue-100">
                With fast dispatch, experienced drivers, and fixed fares, we are the go-to provider for 
                <span className="font-bold text-white"> Stevenage to Luton Airport taxis.</span> Use our
                easy online booking tool or contact our team to reserve your journey — anytime, day or night.
              </p>
              
              <p className="text-lg leading-relaxed text-blue-100">
                Choose <span className="font-bold text-white">LutonAirportTaxi.co.uk</span> and enjoy a
                better way to travel. <span className="font-bold text-white">Book now</span> for a stress-free 
                transfer from Stevenage to Luton Airport.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2 shadow-lg">
                Book Now Online
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors duration-200">
                Call Us 24/7
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
                  Ways to travel to Stevenage
                </h2>
                {/* Paragraphs */}
                <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                  There are many ways to travel to Stevenage from Luton.Such as
                  Local bus, Coach and Train.But Stevenage to or from Luton
                  airport taxi is the best and reliable way for this.
                </p>
                <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                  Some of the public transport are listed below with some detail
                  which you can utilize for traveling From Luton To Stevenage.
                </p>
                <h3 className="text-base font-semibold text-gray-900">
                  Luton to Stevenage by Train
                </h3>
                <p className="text-sm text-justify text-gray-700 sm:text-base">
                  Some people use the Luton airport taxi to Stevenage but some
                  others prefer to train for traveling purposes.So here is you
                  can travel to Stevenage by train
                </p>
                <div className="px-4 py-4 text-xs leading-relaxed text-justify text-gray-700 bg-gray-100 rounded-lg sm:px-6 sm:py-5 sm:text-sm">
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>
                      Go to Luton Train Station LU1 2Lt and purchase a ticket to
                      Stevenage
                    </li>
                    <li>
                      Another way is to go to Luton Airport Parkway Station LU1
                      3JH to purchase tickets
                    </li>
                    <li>
                      Enjoy Your journey in a train, also you can do the same
                      with Luton airport taxi to Stevenage
                    </li>
                    <li>
                      Get off at Central Railway Station MK9 1LA of Stevenage
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
                    Every 15 - 30 minutes a train leaves to Stevenage from Luton
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
