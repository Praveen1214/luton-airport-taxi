// app/page.tsx
"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LutonDeparture, LondonLutonAirport, LutonTerminal } from "@/assets";
import { testimonials } from "@/components/CustomerTestimonials";
import FAQ from "@/components/landing/FAQ";
import { routes } from "@/components/PopularRoutes";
import { FaCarAlt, FaStar } from "react-icons/fa"; // install with: npm install react-icons
import FeedBack from "@/components/landing/Feedback";

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
    <main className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-blue-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Book a low-cost Taxi To Luton Airport
          </h1>
          <p className="max-w-xl mx-auto text-gray-700 mb-6">
            Save up to 40% by pre-booking your taxi to and from Luton airport
            transfer with us
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg font-semibold">
            Book Now
          </Button>
        </div>
      </section>

      {/* Book a Taxi Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Book a Taxi To Luton airport
            </h2>

            <p className="text-blue-600 font-medium mb-4">
              Affordable taxi service to Luton airport to any destination
            </p>

            <p className="text-gray-700 mb-4">
              Welcome to our taxi service from and to Luton Airport, where we
              provide a reliable, efficient, and stress-free transportation
              service. It is important to us that your travel experience is as
              smooth and comfortable as possible, which is why we go to great
              lengths to make the trip as smooth and comfortable as possible.
              Our drivers are very experienced and our vehicles are well taken
              care of, so you'll have a comfortable ride to and from Luton
              airport to wherever you're going. Plus, our prices are low-cost.
              The most cost-effective and time- saving way to book a cab is to
              book in advance on our website. However, if you haven't pre-booked
              a taxi, you can still book with us on the spot, and our average
              pick-up time is just 11 minutes. Whether you're looking to book a
              cab to and from Luton airport or any other destination, our taxis
              from and to Luton airport are available at your service. In the
              Luton area, we are recognized as one of the best taxi and cab
              services due to our customer-centric approach. We ensure that you
              have a safe, reliable, and enjoyable journey because we care about
              your comfort.
            </p>
          </div>

          {/* Right Image + Text */}
          <div className="relative w-full">
            <div className="border bg-blue-100 rounded-md overflow-hidden">
              <Image
                src={LutonDeparture}
                alt="Departures"
                width={543}
                height={274}
                className="w-full object-cover"
              />

              {/* Caption Box Below Image */}
              <div className="bg-white px-4 py-3 border-t border-gray-200">
                <p className="text-blue-700 font-semibold text-sm leading-tight">
                  Fast & Reliable
                </p>
                <p className="text-xs text-gray-600 leading-tight">
                  Taxi To and From Luton
                </p>
              </div>
            </div>

            {/* Side Text */}
            <p className="text-gray-700 text-sm mt-4 leading-relaxed">
              We guarantee a smooth taxi ride to Luton Airport when you book
              with us. We are the best at providing taxis and transfers to Luton
              Airport. When your flight arrives at Luton Airport, your taxi will
              be waiting right outside to take you to where you want to go
              without any delays, so you can have a smooth and easy trip without
              any worries.
            </p>
          </div>
        </div>
      </section>

      {/*Airport Procedure for Getting a Taxi from Luton Airport*/}

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Airport Procedure for Getting a Taxi from Luton Airport
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              When arriving at Luton Airport, the first thing on your mind may
              be finding a reliable and efficient taxi service to take you to
              your destination. We made our taxi service from Luton Airport to
              be very easy. When you use our taxi service, you can expect things
              to go smoothly.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Taxi Pickup Location
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our taxi pick-up is conveniently located outside the airport
                terminal building (which is located on the ground floor of
                terminal car park 2), making it easy to find and access. You'll
                be directed to our pick up by airport staff and can expect a
                short walk (around 3 minutes) to our taxis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Meet & Greet Booking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When you book our meet and greet service, our friendly driver
                will be ready to welcome you at the arrivals hall with a
                personalized name board. You can expect a seamless experience as
                our driver guides you to your vehicle, ensuring a hassle-free
                start to your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-blue-600 text-2xl">🔵</span>
              <h2 className="text-3xl font-bold text-gray-900">
                Finding your driver
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              We understand that finding your driver can be a daunting task,
              especially in a busy and unfamiliar environment like an airport.
              Here's what you can expect when using our taxi service:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Identifying Your Driver
                </h3>
                <p className="text-gray-600">
                  Our drivers are easily identifiable by their distinctive
                  uniforms and vehicles. They will be waiting at the arrival
                  pick up with a sign displaying your name (if you booked a meet
                  and greet service), making it easy to spot them. If you have
                  not booked a meet-and-greet service, your driver will be
                  waiting for you at the designated pickup and drop-off area
                  located just a minute’s walk from the terminal.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Contacting Your Driver
                </h3>
                <p className="text-gray-600">
                  We provide all customers with the contact details of their
                  driver before their journey, giving you the peace of mind of
                  knowing that you can easily get in touch with them if
                  necessary.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Boarding the Taxi
                </h3>
                <p className="text-gray-600">
                  After reaching the designated Pickup Location, our dedicated
                  driver will be there to greet you, assist with your luggage,
                  and provide any necessary information for your journey. If you
                  have pre-paid online, we kindly request your feedback on our
                  service upon completion of your trip. For those who haven’t
                  pre-booked, we offer convenient payment options at the end of
                  your journey, including cash, credit card, and American
                  Express.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div>
            <Image
              src={LondonLutonAirport}
              alt="London Luton Airport"
              width={543}
              height={274}
              className="w-full object-cover rounded-lg shadow-lg"
            />

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Confirming Your Destination
                </h3>
                <p className="text-gray-600">
                  Before setting off, our driver will confirm your destination
                  to ensure that you arrive at the correct location safely and
                  efficiently.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Making the Process Smoother
                </h3>
                <p className="text-gray-600">
                  At our taxi service, we pride ourselves on making the journey
                  as smooth as possible. We keep up-to-date with the latest
                  traffic and road conditions to ensure that we take the most
                  efficient route to your destination. Our drivers are
                  experienced and knowledgeable, and will do everything they can
                  to make your journey as comfortable and enjoyable as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-blue-600 text-2xl">🔵</span>
          <h2 className="text-3xl font-bold text-gray-900">
            Directions to Terminal Car Park 2
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left side: image and directions */}
          <div>
            <Image
              src={LutonTerminal}
              alt="London Luton Airport"
              width={543}
              height={274}
              className="w-full object-cover rounded-lg mb-6"
            />
            <p className="text-gray-600 text-lg leading-relaxed">
              When you exit the terminal building, you can easily locate your
              taxi by going left and walking past the buses, taxis, and parking
              lifts for a few minutes. Your designated driver will be waiting at
              the designated spot to pick you up. If you have any concerns or
              questions, don't worry! Our team is here to assist you. We have a
              dedicated phone number for you to reach us anytime for help. We
              want to ensure your trip is smooth and enjoyable, and our drivers
              are always ready to assist. Simply give us a call, and we’ll be
              delighted to help you!
            </p>
          </div>

          {/* Right side: steps */}
          <div>
            <p className="text-gray-600 text-lg mb-4">
              Upon arrival at Luton Airport, there are several procedures to
              follow before you can leave the airport. The specific process may
              vary depending on your arrival terminal and flight details. Here's
              a general overview:
            </p>

            <ol className="list-decimal list-inside text-gray-700 space-y-2 bg-gray-50 p-6 rounded-lg shadow-sm">
              <li>
                Disembark from the plane and follow signs to the arrivals area.
              </li>
              <li>
                If you're arriving from outside the UK, proceed to immigration
                control where you'll need to present your passport and travel
                documents for clearance.
              </li>
              <li>
                Collect your baggage from the baggage reclaim area after
                clearing immigration.
              </li>
              <li>
                If required, proceed to the customs control area to declare any
                goods or items you're bringing into the UK.
              </li>
              <li>
                Once you’ve cleared customs, follow the signs to the airport
                exit. Depending on the terminal, you may need to take a shuttle
                or walk to the exit.
              </li>
              <li>
                Upon exiting the terminal building, you'll have various
                transport options like taxis, buses, or trains to continue your
                journey.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Table of Prices Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            How much will a Taxi cost to Luton Airport
          </h2>
          <p className="text-blue-600">
            Here is the list of our estimated prices for taxi to/from Luton
            Airport
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse rounded-lg overflow-hidden">
            <thead className="bg-white text-blue-600 text-left">
              <tr>
                <th className="px-20 py-4 font-semibold text-base">
                  Airport Pick-up
                </th>
                <th className="px-20 py-4 font-semibold text-base">
                  Journey Time
                </th>
                <th className="px-20 py-4 font-semibold text-base">
                  Single Trip
                </th>
                <th className="px-20 py-4 font-semibold text-base">
                  Return Trip
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-center text-sm">
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
                  <td className="px-6 py-4 text-left">{location}</td>
                  <td className="px-6 py-4">£130</td>
                  <td className="px-6 py-4">£130</td>
                  <td className="px-6 py-4">£130</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <p className="mt-6 text-sm text-blue-600 bg-blue-50 p-3 rounded-md text-center max-w-xl mx-auto">
          * These prices are based at non peak times travelling in a standard
          vehicle with 3 passengers and 2 luggage
        </p>
      </section>

      {/* Reviews / Ratings Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <FeedBack/>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <FAQ />
      </section>

      {/* Popular Routes Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm text-blue-600 font-medium">
            Explore Our Top-Rated Destinations
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Popular Routes</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {routes.map((route, i) => (
            <div
              key={i}
              onClick={() => handleClick(route.slug)}
              className="cursor-pointer border border-gray-200 bg-white rounded-xl px-4 py-5 shadow-sm flex flex-col gap-2 transition hover:shadow-md hover:border-blue-500"
            >
              {/* Route Line */}
              <div className="flex justify-between items-center text-sm font-medium text-gray-900">
                <span>{route.from}</span>
                <span className="text-gray-400 text-xl font-bold tracking-wider">
                  {">>>"}
                </span>
                <span>{route.to}</span>
              </div>

              {/* Info Row */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
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
