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
    router.push(`/routes/${slug}`);
  };

  return (
    <main className="flex flex-col w-full">
      <div className="flex flex-col items-start justify-between md:flex-row mb-5">
        {quoteStep === 1 && (
          <div className="w-full px-10 md:mr-12 -mt-28">
            <div className="max-w-6xl mx-auto mt-44">
              <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-5xl">
                Airport Transfers
              </h1>
              <p className="max-w-xl mx-auto mb-6 text-sm text-gray-700 sm:text-base">
                Save Up to 40 % By Pre Booking Your Luton Taci Transfers Airport
                Transfer With Us
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

            {/* Milton Keynes to Luton Airport Taxi Time Interval */}
            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Left Column */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Luton Airport Taxi Transfer
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Welcome to <strong>Luton Airport Taxi</strong>, the trusted
                    provider of airport transfers in and around{" "}
                    <strong>Luton,</strong> serving thousands of travellers each
                    year with dependable, punctual transport.Based just minutes
                    from <strong>London Luton Airport(LTN)</strong>, we offer
                    professional <strong>airport taxi transfers</strong> that
                    are fast, reliable, and tailored to your needs—whether
                    you’re flying out, landing back home, or connecting through
                    one of London’s major hubs.
                  </p>
                  <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Our company is built on a simple goal: to deliver smooth,
                    safe, and stress - free transport to and from Luton Airport
                    at fixed, transparent prices.We specialise in{" "}
                    <strong>door - to - door transfers</strong>, with options
                    ranging from <strong>cheap taxi to Luton Airport</strong> to
                    luxury{" "}
                    <strong>
                      chauffeur service, wheelchair accessible taxi
                    </strong>
                    , and <strong>minibus hire with driver</strong> for larger
                    groups.
                  </p>
                  <br />
                  <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Located in <strong>Bedfordshire</strong>, just 35 miles
                    north of Central London, <strong>Luton</strong> is one of
                    the UK’s key airport towns, with strong rail and road links
                    across the country.<strong>London Luton Airport </strong> is
                    the fifth busiest in the UK, serving over 16 million
                    passengers annually and offering routes across Europe and
                    beyond.Whether you’re arriving or departing,
                    <strong>Luton Airport Taxi</strong> is your dedicated
                    partner in ground transport.
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
              <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Left Column: Image - On mobile, this appears below the text */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  {/* <div className="p-4 border-gray-200 rounded-xl bg-blue-50">
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
                  </div> */}
                </div>

                {/* Right Column: Text */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Airport Transfers with Service at Heart
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    <strong>Airport transfers</strong> are the core of what we
                    do.We understand that airport travel can be
                    stressful—unpredictable traffic, long queues, and expensive
                    parking can easily turn a simple journey into a
                    headache.That’s where we come in.
                  </p>
                  <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    With <strong>Luton Airport Taxi</strong>, you avoid the
                    hassle of navigating busy terminals or paying inflated
                    airport parking rates.We offer direct, private transfers
                    from your doorstep to the airport—and back again.Whether
                    it’s a hotel, office, or home address, we plan every journey
                    to ensure you arrive at Luton Airport on time, every time.
                  </p>
                  <br />
                  <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Our drivers are fully licensed, experienced, and locally
                    based.They know the fastest routes, current traffic
                    conditions, and the airport layout inside and out.All our
                    services are supported by a professional dispatch team that
                    tracks flights in real time, adjusting pickups when delays
                    or early arrivals occur.
                  </p>
                </div>
              </div>
            </section>

            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Left Column */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Fast Booking and Real - Time Tracking
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Our <strong>airport taxi booking</strong> system is quick,
                    simple, and secure.Get an instant quote online, select your
                    vehicle, choose any optional extras, and confirm your
                    journey—all in just a few clicks.From solo business
                    travellers to large families, we offer flexible vehicle
                    options to suit every need.
                  </p>
                  <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    We track every inbound and outbound flight at Luton
                    Airport.This ensures your driver is always on time, no
                    matter how early or late your plane lands.For departures,
                    our team calculates the best pickup time using real-time
                    traffic data and recommends arriving three hours before your
                    flight to allow time for check -in, security, and boarding.
                  </p>
                </div>

                {/* Right Column */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  {/* <div className="p-4 rounded-lg bg-blue-50">
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
                  </div> */}
                </div>
              </div>
            </section>

            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Left Column: Image - On mobile, this appears below the text */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  {/* <div className="p-4 border-gray-200 rounded-xl bg-blue-50">
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
                  </div> */}
                </div>

                {/* Right Column: Text */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Serving Luton and Surrounding Areas
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    While Luton is our base, our coverage extends far beyond.We
                    offer <strong>London Luton transfers</strong> from:
                  </p>
                  <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    <strong>
                      Milton Keynes, St Albans, Watford, Aylesbury, Stevenage,
                      Bedford
                    </strong>
                    , and <strong>Greater London</strong>.
                  </p>
                  <br />
                  <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Whether you need <strong>transport to Luton Airport</strong>{" "}
                    from a private home, business address, or hotel, our service
                    is fast, affordable, and available 24 / 7.
                  </p>
                </div>
              </div>
            </section>

            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Left Column */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Affordable & Reliable Every Time
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    We provide a <strong>cheap taxi to Luton Airport</strong>{" "}
                    without sacrificing service quality.All fares are fixed and
                    confirmed at the time of booking.No hidden fees.No surge
                    pricing.What you see is what you pay.
                  </p>
                </div>

                {/* Right Column */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  {/* <div className="p-4 rounded-lg bg-blue-50">
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
                  </div> */}
                </div>
              </div>
            </section>

            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Left Column: Image - On mobile, this appears below the text */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  {/* <div className="p-4 border-gray-200 rounded-xl bg-blue-50">
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
                  </div> */}
                </div>

                {/* Right Column: Text */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Meet and Greet Service
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    If you are arriving at Luton for the first time or want added
                    convenience, our <strong>meet and greet</strong> service is
                    available. Your driver will wait for you inside the terminal
                    with a name board, help with luggage, and guide you to your
                    waiting vehicle.
                  </p>
                </div>
              </div>
            </section>

            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Left Column */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Wheelchair Accessible Taxi
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Our fleet includes fully equipped wheelchair taxis operated
                    by trained drivers who provide respectful and safe
                    assistance.These vehicles offer easy access, secure seating,
                    and plenty of space for both the passenger and their travel
                    companions.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    <a className="font-semibold text-primary">
                      Learn more about our Wheelchair Taxi Service
                    </a>
                  </p>
                </div>

                {/* Right Column */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  {/* <div className="p-4 rounded-lg bg-blue-50">
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
                  </div> */}
                </div>
              </div>
            </section>

            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Left Column: Image - On mobile, this appears below the text */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  {/* <div className="p-4 border-gray-200 rounded-xl bg-blue-50">
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
                  </div> */}
                </div>

                {/* Right Column: Text */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Minibus Hire with Driver
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    For group travel, our{" "}
                    <strong>minibus hire with driver</strong> is ideal.We offer
                    8 to <strong>16 seater minibus taxis</strong> perfect for
                    family trips, corporate transfers, or holiday group
                    bookings.These vehicles are spacious, comfortable, and
                    professionally operated.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    <a className="font-semibold text-primary">
                      View our Minibus Hire options
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Left Column */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Chauffeur & Executive Transfers
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    For business clients or those seeking an elevated travel
                    experience, our{" "}
                    <a className="font-semibold text-primary">
                      Chauffeur Service
                    </a>{" "}
                    delivers premium travel with professional drivers, luxury
                    vehicles, and full discretion.
                  </p>
                </div>

                {/* Right Column */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  {/* <div className="p-4 rounded-lg bg-blue-50">
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
                  </div> */}
                </div>
              </div>
            </section>

            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Left Column: Image - On mobile, this appears below the text */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  {/* <div className="p-4 border-gray-200 rounded-xl bg-blue-50">
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
                  </div> */}
                </div>

                {/* Right Column: Text */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Airport Parking Partnership
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    If you’re driving yourself to the airport, we’ve partnered
                    with{" "}
                    <a
                      className="font-semibold text-primary"
                      href="ParkingLutonAirport.co.uk"
                    >
                      ParkingLutonAirport.co.uk
                    </a>{" "}
                    to offer safe, affordable <strong>airport parking</strong>
                    .Drop off your vehicle and we’ll handle your{" "}
                    <strong>airport transfer</strong>, ensuring you reach the
                    terminal without stress or delays.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    <a className="font-semibold text-primary">
                      Book Airport Parking
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row sm:gap-8">
                {/* Left Column */}
                <div className="w-full md:w-2/3">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl text-left">
                    Book Your Luton Airport Transfer Today
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Whether you are heading to the airport or returning home,
                    trust <strong>Luton Airport Taxi</strong> for fast,
                    affordable, and professional transport. Book your taxi
                    online, add extras like baby seats or WiFi, and relax
                    knowing your journey is in expert hands.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    For live flight info, visit the official Luton Airport
                    Departures page.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Start your journey right—
                    <strong>book your Luton Airport transfer now</strong>.
                  </p>
                </div>

                {/* Right Column */}
                <div className="flex-shrink-0 w-full mt-6 md:w-1/3 md:mt-0">
                  {/* <div className="p-4 rounded-lg bg-blue-50">
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
                  </div> */}
                </div>
              </div>
            </section>

            {/* Traveling To And From Milton Keynes */}

            {/* Ways to travel section - Fixed the excessive margin */}
            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
                {/* Heading */}
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
                  Ways to travel to Luton
                </h2>
                {/* Paragraphs */}
                <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                  There are many ways to travel to Milton Keynes from Luton.Such
                  as Local bus, Coach and Train.But Milton Keynes to or from
                  Luton airport taxi is the best and reliable way for this.
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
                  some others prefer to train for traveling purposes.So here is
                  you can travel to Milton Keynes by train
                </p>
                <div className="px-4 py-4 text-xs leading-relaxed text-justify text-gray-700 bg-gray-100 rounded-lg sm:px-6 sm:py-5 sm:text-sm">
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>
                      Go to Luton Train Station LU1 2Lt and purchase a ticket to
                      Milton Keyne
                    </li>
                    <li>
                      Another way is to go to Luton Airport Parkway Station LU1
                      3JH to purchase tickets
                    </li>
                    <li>
                      Enjoy Your journey in a train, also you can do the same
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
                    Every 15 - 30 minutes a train leaves to Milton Keynes from
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
    </main>
  );
}
