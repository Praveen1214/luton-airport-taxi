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
// import MaskGroup from "@/assets/images/mask-group.png";
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
        <title>Luton To London Taxi Transfers</title>
        <meta
          name="description"
          content="Save up to 40% by pre-booking your London airport transfer with us. Reliable and affordable taxi services from Luton to London."
        />
      </Head>
      <div className="flex flex-col items-start justify-between md:flex-row mb-5">
        {quoteStep === 1 && (
          <div className="w-full px-10 md:mr-12 -mt-28">
            <div className="max-w-6xl mx-auto mt-44">
              <h1 className="mb-4 text-xl font-bold sm:text-2xl md:text-4xl">
                London to Luton Airport Taxi & Luton Airport to London Transfers{" "}
              </h1>
              <p className="max-w-xl mx-auto mb-6 text-sm text-gray-700 sm:text-base">
                Save Up to 40 % By Pre Booking Your London Airport Transfer With
                Us
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

            {/* New Static Content Below */}
      <section className="px-4 py-8 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-justify">
          London to Luton Airport Taxi & Luton Airport to London Transfers
        </h2>
        <p className="text-base text-gray-700 mb-8 text-justify">
          Looking for a fast, reliable London to Luton Airport taxi or a convenient ride from Luton Airport to London? Our airport taxi London service makes transfers between the city and Luton Airport easy and stress-free. We provide 24/7 private transfers with professional drivers, comfortable vehicles, and fixed pricing – ensuring you get to your destination on time, every time. Whether you’re catching a flight or coming home from one, our door-to-door taxi service is the hassle-free solution for all your London–Luton travel needs.
        </p>

        <div className="space-y-6">
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Luton Airport Location & Distance from London
            </h3>
            <p className="text-gray-700 mb-2 text-justify">
              London Luton Airport (LTN) is located in Bedfordshire, about 35–40 miles north of Central London. By road, the journey between London and Luton Airport typically takes around 60 minutes in normal traffic. During peak hours or heavy traffic, it’s wise to allow up to 1 hour 30 minutes for the trip.
            </p>
            <p className="text-gray-700 text-justify">
              Luton Airport is easily accessible via the M1 motorway and other major routes, making a taxi ride a convenient choice for travelers. In comparison, direct trains from Luton Airport Parkway to central London can take as little as 30–40 minutes (not including the shuttle from the airport to the train station), while coaches/buses usually take about 1 hour 15 minutes to 1 hour 30 minutes to reach central London. This proximity and multiple transport options mean you have choices – but a private taxi transfer offers the unique advantage of door-to-door service, picking you up or dropping you off exactly where you need to be without any transfers.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              London to Luton Airport Taxi Service
            </h3>
            <p className="text-gray-700 text-justify">
              Traveling from London to Luton Airport by taxi is the most straightforward and comfortable way to reach your flight. Our service covers all areas of London, including the ten major boroughs—from Camden, Westminster, Islington, Kensington & Chelsea, Hackney, and Tower Hamlets, to Southwark, Wandsworth, Lambeth, and Hammersmith & Fulham. We will dispatch a driver to pick you up from your home, hotel, or office in London and drive you directly to Luton Airport departures.
            </p>
            <p className="text-gray-700 mt-4 text-justify">
              With our door-to-door transfers, you won’t have to haul luggage through train stations or endure multiple connections. Fixed pricing means the price you’re quoted is the price you pay – no taxi meter ticking up and no surge pricing, even if there’s traffic on the M1. Our drivers plan for London traffic conditions and will ensure you depart with plenty of time to catch your flight. For early morning departures or late-night trips to Luton, our 24/7 availability guarantees that a professional driver is ready to assist you anytime. Enjoy a relaxing ride in a clean, comfortable vehicle, and start your journey stress-free with our London to Luton taxi service.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Luton Airport to London by Taxi
            </h3>
            <p className="text-gray-700 text-justify">
              Landing at Luton after a flight? Skip the stress of trains and buses – our Luton Airport to London taxi pickup service will get you home or to your hotel with ease. We offer a Meet & Greet at Luton Airport arrivals: your driver will be waiting in the arrivals hall holding a sign with your name, ready to assist you with your luggage.
            </p>
            <p className="text-gray-700 mt-4 text-justify">
              There’s no need to worry if your flight is early or delayed – we include flight monitoring, so our drivers adjust to actual arrival times at no extra charge. Once you’ve met your driver, you’ll be escorted to a comfortable private taxi waiting just outside. From there, you’ll enjoy a direct ride into London, heading straight to your specified address – be it a hotel in Westminster, an office in the City, or a home in Lambeth. Door-to-door service means you’ll be dropped off right at your doorstep.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Taxi vs. Train vs. Coach: London–Luton Travel Options
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border-collapse table-auto">
                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="px-4 py-2">Transport Option</th>
                    <th className="px-4 py-2">Journey Time (approx)</th>
                    <th className="px-4 py-2">Frequency</th>
                    <th className="px-4 py-2">Cost (approx)</th>
                    <th className="px-4 py-2">Convenience & Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Taxi (Private Transfer)</td>
                    <td className="px-4 py-2">~60 min (35–40 miles by road)</td>
                    <td className="px-4 py-2">24/7 on-demand service</td>
                    <td className="px-4 py-2">~£60–£80 per vehicle (fixed rate)</td>
                    <td className="px-4 py-2">Door-to-door pickup and drop-off anywhere in London or Luton; private ride just for your group; no waiting for schedules.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Train (Thameslink/EMR)</td>
                    <td className="px-4 py-2">~30–45 min train (+15 min shuttle bus)</td>
                    <td className="px-4 py-2">Every 15–30 minutes (peak hours)</td>
                    <td className="px-4 py-2">~£15–£30 per person</td>
                    <td className="px-4 py-2">Fastest public transport option to central London, but requires a shuttle from Luton Airport to the train station and onward travel from the London station to your final destination. Great for solo travelers with light luggage.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Coach (Bus)</td>
                    <td className="px-4 py-2">~1h 15m–1h 30m</td>
                    <td className="px-4 py-2">Regular departures (24/7 schedule)</td>
                    <td className="px-4 py-2">~£10–£15 per person</td>
                    <td className="px-4 py-2">Cheapest option, direct to popular stops (e.g. London Victoria or Golders Green). Slower journey and you must follow the coach’s timetable. Can be less convenient with luggage and no door-to-door service.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Why Choose Our Luton Airport Taxi Service?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Fixed Pricing & No Hidden Fees:</strong> Enjoy a flat airport taxi fare for London–Luton trips. The rate we confirm is what you pay, regardless of traffic or delays. No surprises and no surge charges.</li>
              <li><strong>24/7 Availability, 365 Days:</strong> Our taxis operate around the clock, including weekends and bank holidays.</li>
              <li><strong>Door-to-Door Convenience:</strong> Pickup from any address in London or at Luton Airport and drop off exactly where you need to go.</li>
              <li><strong>Meet & Greet Service:</strong> Driver meets you inside the terminal with a name sign and assists with luggage.</li>
              <li><strong>Flight Monitoring:</strong> Real-time flight tracking adjusts pickup times at no extra charge.</li>
              <li><strong>Professional Drivers:</strong> Fully licensed, insured, and experienced chauffeurs with extensive local knowledge.</li>
              <li><strong>Modern & Comfortable Vehicles:</strong> Fleet ranging from sedans to minibuses, all air-conditioned and well-maintained.</li>
              <li><strong>Accessible & Group Travel:</strong> Wheelchair-accessible taxis and minibus/MPV options for larger groups.</li>
              <li><strong>Executive & Chauffeur Services:</strong> Premium vehicles and chauffeur-style service for business or VIP transfers.</li>
            </ul>
          </section>

          <section className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Book Your London–Luton Airport Taxi Today
            </h3>
            <p className="text-gray-700 mb-6">
              Ready to travel? Book your London to Luton Airport taxi (or Luton Airport to London taxi) with us today and enjoy a smooth, worry-free journey. Use our online booking system to get an instant quote and confirmation, or call us any time—our customer support is available 24/7.
            </p>
            <Button onclick={() => router.push('/booking')} className="px-6 py-3 text-white bg-primary hover:bg-btn-hover rounded-lg">
              Get an Instant Quote
            </Button>
          </section>
        </div>
      </section>

            {/* Traveling To And From Milton Keynes */}
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
                  <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl">
                    Traveling To And From London
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    Luton Airport Taxi is a leading taxi company in Luton.Our
                    Compony is not only one of the best Luton airport taxi
                    service providers but also famous in surrounding areas such
                    as Bedfordshire and London.Our London to Luton airport taxi
                    is a sound, secure, accurate, and cheap taxi
                  </p>
                  <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                    We have multiple and updated vehicles, which are equipped
                    and connected to the satellite system.Our London to Luton
                    airport taxi includes a baby seat, meet & greet, and
                    more.Beware of booking with those service providers which
                    are ranking and having 200 % expensive prices.So, book
                    London to Luton airport taxi with us now to save your time
                    and money.
                  </p>
                </div>
              </div>
            </section>

            {/* Ways to travel section - Fixed the excessive margin */}
            <section className="max-w-6xl px-4 py-8 mx-auto sm:py-12 md:py-16">
              <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
                {/* Heading */}
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
                  Ways to travel to London
                </h2>
                {/* Paragraphs */}
                <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                  There are many ways to travel to London from Luton.Such as
                  Local bus, Coach and Train.But London to or from Luton airport
                  taxi is the best and reliable way for this.
                </p>
                <p className="text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
                  Some of the public transport are listed below with some detail
                  which you can utilize for traveling From Luton To London.
                </p>
                <h3 className="text-base font-semibold text-gray-900">
                  Luton to London by Train
                </h3>
                <p className="text-sm text-justify text-gray-700 sm:text-base">
                  Some people use the Luton airport taxi to London but some
                  others prefer to train for traveling purposes.So here is you
                  can travel to London by train
                </p>
                <div className="px-4 py-4 text-xs leading-relaxed text-justify text-gray-700 bg-gray-100 rounded-lg sm:px-6 sm:py-5 sm:text-sm">
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>
                      Go to Luton Train Station LU1 2Lt and purchase a ticket to
                      London
                    </li>
                    <li>
                      Another way is to go to Luton Airport Parkway Station LU1
                      3JH to purchase tickets
                    </li>
                    <li>
                      Enjoy Your journey in a train, also you can do the same
                      with Luton airport taxi to London
                    </li>
                    <li>
                      Get off at Central Railway Station MK9 1LA of London
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
                    Every 15 - 30 minutes a train leaves to London from Luton
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
