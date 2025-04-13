// app/page.tsx
"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/components/CustomerTestimonials";
import FAQ from "@/components/landing/FAQ";
import { routes } from "@/components/PopularRoutes";
import { FaCarAlt, FaStar } from "react-icons/fa"; // install with: npm install react-icons
import FeedBack from "@/components/landing/Feedback";
import { CheckCircle } from "lucide-react";

// Images
import Airplane2 from "@/assets/images/airplane2.png";
import SecurityCard from "@/assets/images/security-card.png";
import UserTick from "@/assets/images/user-tick.png";
import Drivng from "@/assets/images/driving.png";
import MaskGroup from "@/assets/images/mask-group.png";
import ShopingCenter from "@/assets/images/shopping-center.png";
import campbellPark from "@/assets/images/campbel-park.png";
import bletchleyPark from "@/assets/images/bletchley-park.png";
import EasyTreveling from "@/assets/images/easy-traveling.png";

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 320; // adjust if needed

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleClick = (slug: string) => {
    router.push(`/routes/${slug}`);
  };

  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full bg-blue-50 py-8 md:py-20 text-center px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Luton To Milton Keynes Taxi Transfers
          </h1>
          <p className="max-w-xl mx-auto text-gray-700 text-sm sm:text-base mb-6">
            Save up to 40% by pre-booking your taxi to and from Luton airport
            transfer with us
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg text-white font-semibold">
            Book Now
          </Button>
        </div>
      </section>

      {/* Why Book and Why Book With Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 bg-gray-50 mt-6 sm:mt-10 rounded-xl">
        {/* Container using flex instead of grid */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 sm:gap-20">
          {/* Left: Why Book A Transfers */}
          <div className="w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900">
              Why Book A Transfers
            </h2>
            {/* Horizontal scroll container for icons */}
            <div 
              ref={scrollRef}
              className="flex flex-nowrap gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide relative"
            >
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow p-4 sm:p-5 flex flex-col items-center justify-center text-center min-w-[130px] sm:min-w-[160px] min-h-[140px] sm:min-h-[160px]">
                <Image
                  src={SecurityCard}
                  alt="Price Guarantee"
                  className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                />
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                  Price Guarantee
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow p-4 sm:p-5 flex flex-col items-center justify-center text-center min-w-[130px] sm:min-w-[160px] min-h-[140px] sm:min-h-[160px]">
                <Image
                  src={UserTick}
                  alt="Flexible Services"
                  className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                />
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                  Flexible Services
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow p-4 sm:p-5 flex flex-col items-center justify-center text-center min-w-[130px] sm:min-w-[160px] min-h-[140px] sm:min-h-[160px]">
                <Image
                  src={Drivng}
                  alt="Vehicle Flexibility"
                  className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                />
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                  Vehicle Flexibility
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-xl shadow p-4 sm:p-5 flex flex-col items-center justify-center text-center min-w-[130px] sm:min-w-[160px] min-h-[140px] sm:min-h-[160px]">
                <Image
                  src={Airplane2}
                  alt="Flight Tracking"
                  className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                />
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                  Flight Tracking
                </p>
              </div>
            </div>
            {/* Scroll controls for mobile */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              <button 
                onClick={() => scroll("left")} 
                className="p-2 bg-blue-100 text-blue-600 rounded-full"
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => scroll("right")} 
                className="p-2 bg-blue-100 text-blue-600 rounded-full"
                aria-label="Scroll right"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Why Book With Us */}
          <div className="w-full mt-8 lg:mt-0">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">
              Why Book With Us
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase mb-4">
              Our Features
            </p>
            {/* Using flex-wrap to emulate two columns without grid */}
            <ul className="flex flex-wrap -mx-1 text-gray-800 text-xs sm:text-sm">
              <li className="flex items-center space-x-1 px-1 w-full sm:w-1/2 mb-3">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>24 Hours Service</span>
              </li>
              <li className="flex items-center space-x-1 px-1 w-full sm:w-1/2 mb-3">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Flight Monitoring</span>
              </li>
              <li className="flex items-center space-x-1 px-1 w-full sm:w-1/2 mb-3">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Fully Licensed Drivers</span>
              </li>
              <li className="flex items-center space-x-1 px-1 w-full sm:w-1/2 mb-3">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Waiting Time and Parking</span>
              </li>
              <li className="flex items-center space-x-1 px-1 w-full sm:w-1/2 mb-3">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Professional Chauffeur</span>
              </li>
              <li className="flex items-center space-x-1 px-1 w-full sm:w-1/2 mb-3">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Meet & Greet</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Milton Keynes to Luton Airport Taxi Time Interval */}
      <section className="max-w-5xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-8">
          {/* Left Column */}
          <div className="w-full md:w-2/3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Milton Keynes to Luton Airport Taxi Time Interval
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              With our Milton Keynes to Luton Airport taxi, you can reach the
              Luton airport within a nominal time. It is approximately 24.7
              miles if we use the M1 motorway for traveling. An alternative way
              is an A421 patch which is 23.1 miles away but it takes a minimum
              of 33 minutes because of slow traffic.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              The interval from Milton Keynes to Luton Town via the M1 route is
              approximately 29 minutes. The distance between Luton and Milton
              Keynes is approximately 22.5 miles (36.2 km). Because of the fast
              and casual traffic of the M1 Motorway, it is not hard to cover
              this distance in this time.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3 flex-shrink-0 mt-6 md:mt-0">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <Image
                src={MaskGroup}
                alt="Luton Airport Taxi"
                className="w-full h-auto rounded-md"
              />
              <div className="mt-4 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Luton Airport Taxi
                </h3>
                <p className="text-blue-600 text-xs sm:text-sm font-medium">
                  Fast & Reliable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traveling To And From Milton Keynes */}
      <section className="max-w-5xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-6 sm:gap-8">
          {/* Left Column: Image - On mobile, this appears below the text */}
          <div className="w-full md:w-1/3 flex-shrink-0 mt-6 md:mt-0">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <Image
                src={EasyTreveling}
                alt="Luton Airport Taxi"
                className="w-full h-auto rounded-tl-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Luton Airport Taxi
                </h3>
                <p className="text-blue-600 text-xs sm:text-sm font-medium">
                  Fast & Reliable
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="w-full md:w-2/3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Traveling To And From Milton Keynes
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Luton Airport Taxi is a leading taxi company in Luton. Our Company
              is not only one of the best Luton airport taxi service providers
              but also famous in surrounding areas such as Bedfordshire and
              Milton Keynes. Our Milton Keynes to Luton airport taxi is a sound,
              secure, accurate, and cheap taxi service. You can easily hire a
              taxi with an online booking system.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We have multiple and updated vehicles, which are equipped and
              connected to the satellite system. Our Milton Keynes to Luton
              airport taxi includes a baby seat, meet & greet, and more. Beware
              of booking with those service providers which are ranking and
              having 200% expensive prices. So, book Milton Keynes to Luton
              airport taxi with us now to save your time and money.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to travel section - Fixed the excessive margin */}
      <section className="max-w-5xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Ways to travel to Milton Keynes
          </h2>
          {/* Paragraphs */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            There are many ways to travel to Milton Keynes from Luton. Such as
            Local bus, Coach and Train. But Milton Keynes to or from Luton
            airport taxi is the best and reliable way for this.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Some of the public transport are listed below with some detail which
            you can utilize for traveling From Luton To Milton Keynes.
          </p>
          <h3 className="text-base font-semibold text-gray-900">
            Luton to Milton Keynes by Train
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Some people use the Luton airport taxi to Milton Keynes but some
            others prefer to train for traveling purposes. So here's you can
            travel to Milton Keynes by train
          </p>
          <div className="bg-gray-100 rounded-lg px-4 sm:px-6 py-4 sm:py-5 text-gray-700 text-xs sm:text-sm leading-relaxed">
            <ol className="list-decimal space-y-2 list-inside">
              <li>
                Go to Luton Train Station LU1 2LT and purchase a ticket to
                Milton Keynes
              </li>
              <li>
                Another way is to go to Luton Airport Parkway Station LU1 3JH to
                purchase tickets
              </li>
              <li>
                Enjoy your journey in a train, also you can do the same with
                Luton airport taxi to Milton Keynes
              </li>
              <li>
                Get off at Central Railway Station MK9 1LA of Milton Keynes
              </li>
            </ol>
          </div>
          <div className="flex items-start gap-2 text-blue-600 text-xs sm:text-sm bg-blue-50 p-3 rounded-tl-xl rounded-md">
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
              Every 15–30 minutes a train leaves to Milton Keynes from Luton
            </p>
          </div>
        </div>
      </section>

      {/* Table of Prices */}
      <section className="max-w-5xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            How much will a Taxi cost to Luton Airport
          </h2>
          <p className="text-blue-600 text-sm sm:text-base">
            Here is the list of our estimated prices for taxi to/from Luton
            Airport
          </p>
        </div>

        {/* Table with responsive design */}
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="min-w-full inline-block align-middle px-4 sm:px-0">
            <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden text-sm">
              <thead className="bg-white text-blue-600 text-left">
                <tr>
                  <th className="px-3 sm:px-6 md:px-20 py-3 sm:py-4 font-semibold text-xs sm:text-sm md:text-base">
                    Airport Pick-up
                  </th>
                  <th className="px-3 sm:px-6 md:px-20 py-3 sm:py-4 font-semibold text-xs sm:text-sm md:text-base">
                    Journey Time
                  </th>
                  <th className="px-3 sm:px-6 md:px-20 py-3 sm:py-4 font-semibold text-xs sm:text-sm md:text-base">
                    Single Trip
                  </th>
                  <th className="px-3 sm:px-6 md:px-20 py-3 sm:py-4 font-semibold text-xs sm:text-sm md:text-base">
                    Return Trip
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-center text-xs sm:text-sm">
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
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-left">{location}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">£130</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">£130</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">£130</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-blue-600 bg-blue-50 p-3 rounded-md text-center max-w-5xl mx-auto">
          * These prices are based at non peak times travelling in a standard
          vehicle with 3 passengers and 2 luggage
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 bg-white">
        <FAQ />
      </section>

      {/* Top 3 Places in Milton Keynes */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 bg-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
          Top 3 Places to visit in Milton Keynes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Shopping Center */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="mb-4">
              <Image
                src={ShopingCenter}
                alt="Shopping Center"
                width={400}
                height={250}
                className="w-full h-auto rounded-md"
              />
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2">
              Shopping Center
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Milton Keynes is known for its famous shopping center: The
              Centre:MK, one of the largest and most popular in the UK.
            </p>
          </div>

          {/* Campbell Park */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="mb-4">
              <Image
                src={campbellPark}
                alt="Campbell Park"
                width={400}
                height={250}
                className="w-full h-auto rounded-md"
              />
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2">
              Campbell Park
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Campbell Park in Milton Keynes is a public park named after the
              first chairman of the Milton Keynes Development Corporation, John
              Campbell.
            </p>
          </div>

          {/* Bletchley Park */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="mb-4">
              <Image
                src={bletchleyPark}
                alt="Bletchley Park"
                width={400}
                height={250}
                className="w-full h-auto rounded-md"
              />
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2">
              Bletchley Park
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              The British Government Code and Cypher School, including Alan
              Turing, played a critical role cracking German military codes at
              Bletchley Park during World War II.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews / Ratings Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 bg-white">
        <FeedBack />
      </section>

      {/* Popular Routes */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <p className="text-xs sm:text-sm text-blue-600 font-medium">
            Explore Our Top-Rated Destinations
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Popular Routes
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {routes.map((route, i) => (
            <div
              key={i}
              onClick={() => handleClick(route.slug)}
              className="cursor-pointer border border-gray-200 bg-white rounded-xl px-3 sm:px-4 py-4 sm:py-5 shadow-sm flex flex-col gap-2 transition hover:shadow-md hover:border-blue-500"
            >
              <div className="flex justify-between items-center text-xs sm:text-sm font-medium text-gray-900">
                <span>{route.from}</span>
                <span className="text-gray-400 text-sm sm:text-xl font-bold tracking-wider">
                  {">>>"}
                </span>
                <span>{route.to}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 mt-1">
                <FaCarAlt className="text-blue-600" />
                <span>{route.duration}</span>
                <span className="text-gray-400">· {route.distance}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}