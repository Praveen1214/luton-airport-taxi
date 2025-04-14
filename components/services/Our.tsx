import React from "react";
import { OUR1, OUR2, OUR3 } from "../../assets";
import Image from "next/image";

const OurSection = ({
  title,
  description,
  image,
  imageAlt,
  isReversed,
}) => {

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
      description:
        "We know that the range of service provided by a airport taxi/Luton company is important, and we are here to meet your needs. We provide a reliable airport transfer service, and take the hassle out of your journey. For people booking to and from the stress and hassle of airport travel, we will provide you with everything you need to enjoy your journey. Anyone looking for extra space when traveling or who is travelling in a larger party will find that we have larger vehicles and minibuses if required. With advance service, including drop-offs at the departure terminal, our airport transfer service is reliable and dependable at all times. Anyone looking for the best airport transfer service to and from/andwith find that we have everything you could want or need.",
      image: OUR1,
      imageAlt: "Ease Of Traveling",
      heading1: "Ease Of",
      heading2: "Traveling",
      isReversed: false,
      logoPosition: "top-left",
    },
    {
      title: "Our Drivers",
      description:
        "One thing we are focused on at LT Airport Taxi is providing you with a high standard/care of service, and we are delighted to say we have the best drivers in the business. All of our drivers are local, so they have local knowledge and experience when it comes to driving in the local area and beyond. Also, our drivers are fully trained in customer service, so you will receive a high standard of service at all times. If you have any requests for our drivers, please ask or let us know. We offer a meet and greet service where a uniformed driver will meet you at your guests. This service is also provided at airports so if you're looking for an airport meet and greet service, we are the local Luton airport taxi company to call on.",
      image: OUR2,
      imageAlt: "Reliable Transport",
      heading1: "Reliable",
      heading2: "Transport",
      isReversed: true,
      logoPosition: "bottom-right",
    },
    {
      title: "Our Vehicles",
      description:
        "The quality of service we provide owes a lot to our vehicles and we are delighted to say we have a wide range of vehicles in our fleet. We take great care to preserve our cars and if you'd like to make a request in advance. If you are looking for additional space for your journey, let us know in advance, and we can provide a larger vehicle. We have invested in environmentally friendly vehicles, so if you're looking for the greenest taxi to Luton Airport option in Harpenden, we can help. We also offer accessibility in our vehicles so you can stay in touch at all times. Our vehicles are well looked after, fully licensed and cleaned regularly, so you can be confident when you travel with BT Airport Taxi.",
      image: OUR3,
      imageAlt: "Stress Free Journey",
      heading1: "Stress Free",
      heading2: "Journey",
      isReversed: false,
      logoPosition: "bottom-left",
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
