import React from "react";
import { OUR1, OUR2, OUR3 } from "../../assets";
import Image from "next/image";

const OurSection = ({ title, description, image, imageAlt, isReversed }) => {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-6 mb-16 last:mb-0`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        <div className="relative overflow-hidden rounded-lg">
          <Image src={image} alt={imageAlt} className="w-full h-auto" />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-2/3">
        <h2 className="mb-4 text-2xl font-bold"> {title} </h2>
        <p className="mb-4 text-justify text-gray-700"> {description} </p>
      </div>
    </div>
  );
};

const Our = () => {
  const sections = [
    {
      title: "Our Services",
      description: (
        <>
          When you choose <strong>Luton Airport Taxi</strong>, you choose a
          reliable, professional service tailored to your exact travel
          needs.Whether you're flying in or out of Luton, planning a city visit,
          or organizing group transport, our services are designed to deliver
          punctuality, comfort, and peace of mind.
          <br />
          <br />
          We provide a full range of{" "}
          <strong>
            airport taxi transfers, chauffeur services, wheelchair accessible
            taxis,
          </strong>{" "}
          family - friendly transport, and group options like minibus hire with
          driver.From solo trips to large - scale travel planning, our drivers
          are ready—on time, every time.
          <br />
          <br />
          Our team uses flight tracking technology on every booking and offers
          <strong>meet and greet</strong> services directly from the
          terminal.Whether it’s a last - minute transfer or a scheduled booking,
          we’re ready when you are.
          <br />
          <br />
          Read more below and choose the right service for your journey.
        </>
      ),
      image: OUR1,
      imageAlt: "Ease Of Traveling",
      heading1: "Ease Of",
      heading2: "Traveling",
      isReversed: false,
      logoPosition: "top-left",
    },
    // {
    //   title: "Our Drivers",
    //   description: (
    //     <>
    //       One thing we are focused on at LT Airport Taxi is providing you with a
    //       high standard/care of service, and we are delighted to say we have the
    //       best drivers in the business. All of our drivers are local, so they
    //       have local knowledge and experience when it comes to driving in the
    //       local area and beyond. Also, our drivers are fully trained in customer
    //       service, so you will receive a high standard of service at all times.
    //       If you have any requests for our drivers, please ask or let us know.
    //       We offer a meet and greet service where a uniformed driver will meet
    //       you at your guests. This service is also provided at airports so if
    //       you're looking for an airport meet and greet service, we are the local
    //       Luton airport taxi company to call on.
    //     </>
    //   ),
    //   image: OUR2,
    //   imageAlt: "Reliable Transport",
    //   heading1: "Reliable",
    //   heading2: "Transport",
    //   isReversed: true,
    //   logoPosition: "bottom-right",
    // },
    // {
    //   title: "Our Vehicles",
    //   description: (
    //     <>
    //       The quality of service we provide owes a lot to our vehicles and we
    //       are delighted to say we have a wide range of vehicles in our fleet. We
    //       take great care to preserve our cars and if you'd like to make a
    //       request in advance. If you are looking for additional space for your
    //       journey, let us know in advance, and we can provide a larger vehicle.
    //       We have invested in environmentally friendly vehicles, so if you're
    //       looking for the greenest taxi to Luton Airport option in Harpenden, we
    //       can help. We also offer accessibility in our vehicles so you can stay
    //       in touch at all times. Our vehicles are well looked after, fully
    //       licensed and cleaned regularly, so you can be confident when you
    //       travel with BT Airport Taxi.
    //     </>
    //   ),
    //   image: OUR3,
    //   imageAlt: "Stress Free Journey",
    //   heading1: "Stress Free",
    //   heading2: "Journey",
    //   isReversed: false,
    //   logoPosition: "bottom-left",
    // },
    {
      title: "Flight Monitoring",
      description: (
        <>
          Being on time is essential—especially for business travellers and
          tight flight connections.That’s why we monitor every flight linked to
          your booking, whether it’s domestic, international, delayed, or
          early.Your driver is dispatched based on live flight data to ensure
          you're never left waiting. You'll also be notified of any important
          updates.
          <br />
          <br />
          <strong>Flight monitoring Luton Airport</strong> is part of every
          booking, helping ensure a punctual, seamless experience from the
          moment you land.
        </>
      ),
      image: "",
      imageAlt: "Ease Of Traveling",
      heading1: "Ease Of",
      heading2: "Traveling",
      isReversed: true,
      logoPosition: "top-left",
    },
    {
      title: "Chauffeur Services",
      description: (
        <>
          For travellers who prefer a luxury experience, we offer fully
          professional <strong>chauffeur services</strong> at Luton Airport and
          surrounding areas.Our experienced drivers are trained in premium
          service delivery and will ensure your journey is private, efficient,
          and exceptionally comfortable.Whether you're attending an event, a
          meeting, or arriving from a long-haul flight, our chauffeur service
          Luton Airport transfer offers the highest level of personal transport.
        </>
      ),
      image: "",
      imageAlt: "Ease Of Traveling",
      heading1: "Ease Of",
      heading2: "Traveling",
      isReversed: false,
      logoPosition: "top-left",
    },
    {
      title: "Wheelchair Accessible Taxi",
      description: (
        <>
          We take inclusivity seriously.Our{" "}
          <strong>wheelchair accessible taxi</strong> service is built to
          support passengers with mobility needs.Vehicles are equipped with
          safety ramps, ample space, and the latest in secure fastening
          systems.Each <strong>wheelchair cab</strong> is operated by trained,
          patient drivers who are happy to assist with boarding and baggage.This
          service is available for both pickups and drop - offs at Luton Airport
          and surrounding towns.
        </>
      ),
      image: "",
      imageAlt: "Ease Of Traveling",
      heading1: "Ease Of",
      heading2: "Traveling",
      isReversed: true,
      logoPosition: "top-left",
    },
    {
      title: "Baby/Child Seat",
      description: (
        <>
          Families travelling with babies or young children can rely on our{" "}
          <strong>baby seat service</strong> for safe and secure travel.Simply
          request a seat during your <strong>airport taxi booking</strong>, and
          your driver will ensure the seat is fitted properly before
          arrival.Every driver is trained in safe installation, giving you peace
          of mind whether you’re arriving or departing from Luton.
        </>
      ),
      image: "",
      imageAlt: "Ease Of Traveling",
      heading1: "Ease Of",
      heading2: "Traveling",
      isReversed: false,
      logoPosition: "top-left",
    },
    {
      title: "Airport Transfers",
      description: (
        <>
          We specialise in direct <strong>airport transfers</strong> to and from{" "}
          <strong>Luton Airport</strong>.Our vehicles are available around the
          clock and are always kept to the highest safety and cleanliness
          standards.With our location just minutes from the terminal, we’re able
          to dispatch quickly and operate on tight timelines.Whether you're
          heading home, to a hotel, or connecting elsewhere, our{" "}
          <strong>airport shuttle service</strong> keeps your journey smooth
          from start to finish.
        </>
      ),
      image: "",
      imageAlt: "Ease Of Traveling",
      heading1: "Ease Of",
      heading2: "Traveling",
      isReversed: true,
      logoPosition: "top-left",
    },
    {
      title: "Meet and Greet",
      description: (
        <>
          Our <strong>meet and greet</strong> service is available for all
          arrivals at Luton Airport.Your driver will be waiting for you inside
          the terminal with a name board and will assist with luggage,
          navigation, and boarding.This is ideal for first - time visitors,
          families, or business guests looking for extra convenience.
        </>
      ),
      image: "",
      imageAlt: "Ease Of Traveling",
      heading1: "Ease Of",
      heading2: "Traveling",
      isReversed: false,
      logoPosition: "top-left",
    },
    {
      title: "Private Chauffeur Service",
      description: (
        <>
          For passengers seeking a continuous executive - level experience, our
          Z<strong>private chauffeur</strong> service offers exclusive transport
          to any location in or outside of Luton.Our chauffeurs are discreet,
          courteous, and experienced in providing five - star service.This is
          ideal for VIP travellers, wedding parties, or clients who require
          consistent, high - end personal travel.
        </>
      ),
      image: "",
      imageAlt: "Ease Of Traveling",
      heading1: "Ease Of",
      heading2: "Traveling",
      isReversed: true,
      logoPosition: "top-left",
    },
    {
      title: "Minibus Hire with Driver",
      description: (
        <>
          For larger groups, we offer <strong>minibus hire with driver</strong>{" "}
          services that include modern, spacious vehicles.Our{" "}
          <strong>16 seater minibus taxi</strong> is ideal for corporate events,
          airport transfers, wedding parties, and day trips.These vehicles are
          professionally maintained and driven by fully licensed drivers with
          experience in group transport.
        </>
      ),
      image: "",
      imageAlt: "Ease Of Traveling",
      heading1: "Ease Of",
      heading2: "Traveling",
      isReversed: false,
      logoPosition: "top-left",
    },
    {
      title: "Car Hire with Driver",
      description: (
        <>
          If you're looking to explore the region or need local transport
          without self-driving, our <strong>car hire with driver</strong>{" "}
          service offers comfort, flexibility, and reliability. With a wide
          choice of vehicles available, you can{" "}
          <strong>rent a car with driver</strong> for a few hours or a full day,
          depending on your schedule. It’s a perfect choice for city exploration
          or professional engagements.
        </>
      ),
      image: "",
      imageAlt: "Ease Of Traveling",
      heading1: "Ease Of",
      heading2: "Traveling",
      isReversed: true,
      logoPosition: "top-left",
    },
    {
      title: "Luton Airport Transfer",
      description: (
        <>
          Our dedicated <strong>Luton Airport transfer</strong> service is the
          core of our operation.Every driver on our team understands the local
          airport layout, traffic patterns, and the fastest routes across the
          city and region.With over 20 years of service, we deliver punctual,
          secure, and professional transfers day and night.
        </>
      ),
      image: "",
      imageAlt: "Ease Of Traveling",
      heading1: "Ease Of",
      heading2: "Traveling",
      isReversed: false,
      logoPosition: "top-left",
    },
    {
      title: "Airport Parking",
      description: (
        <>
          Luton Airport Taxi has partnered with{" "}
          <strong>ParkingLutonAirport.co.uk </strong>
          to make your travel even easier.If you prefer to drive to the airport
          yourself, you can pre - book <strong>airport parking</strong> at
          competitive rates through our partner site.We will then handle your{" "}
          <strong>transfer to and from the airport</strong> in a private
          vehicle.For the best deals on airport parking, visit &nbsp;
          <a
            href="www.parkinglutonairport.co.uk"
            className="font-semibold text-primary"
          >
            www.parkinglutonairport.co.uk.
          </a>
        </>
      ),
      image: "",
      imageAlt: "Ease Of Traveling",
      heading1: "Ease Of",
      heading2: "Traveling",
      isReversed: true,
      logoPosition: "top-left",
    },
  ];

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      {sections.map((section, index) => (
        <OurSection
          key={index}
          title={section.title}
          description={section.description}
          image={section.image}
          imageAlt={section.imageAlt}
          heading1={section.heading1}
          heading2={section.heading2}
          isReversed={section.isReversed}
          logoPosition={section.logoPosition}
        />
      ))}
    </div>
  );
};

export default Our;
