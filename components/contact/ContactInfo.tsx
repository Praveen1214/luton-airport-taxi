import React from "react";

const ContactInfo = () => {
  const contactItems = [
    {
      icon: (
        <svg
          className="w-5 h-5 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Head Office",
      description: "Come say hello at our office HQ",
      links: [
        {
          text: "Hart House Business Centre,\nKimpton Road, Luton LU2 0LA",
          url: "https://maps.google.com/?q=Hart+House+Business+Centre,+Kimpton+Road,+Luton+LU2+0LA",
        },
      ],
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      description: "Our Friendly team is here to Help",
      links: [
        {
          text: "booking@lutonairporttaxi.co.uk",
          url: "mailto:booking@lutonairporttaxi.co.uk",
        },
      ],
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      description: "we are available 24/7",
      links: [
        {
          text: "01582 262006",
          url: "tel:01582262006",
        },
        {
          text: "00441582262006 (Outside UK)",
          url: "tel:00441582262006",
        },
      ],
    },
  ];

  // Contact card item component
  const ContactCard = ({ item }) => (
    <div className="p-6 bg-gray-100 rounded-lg">
      <div className="flex items-start">
        <div className="flex items-center justify-center w-8 h-8 mr-4 rounded-full bg-blue-50">
          {item.icon}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900"> {item.title} </h3>
          <p className="mt-1 text-sm text-gray-600"> {item.description} </p>
          {item.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="block mt-1 text-sm text-blue-600 hover:text-blue-800"
            >
              {link.text.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < link.text.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-md space-y-4">
      {contactItems.map((item, index) => (
        <ContactCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ContactInfo;
