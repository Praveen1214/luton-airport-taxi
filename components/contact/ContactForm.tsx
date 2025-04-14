import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full max-w-2xl">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          {" "}
          Get in touch{" "}
        </h1>
        <p className="font-medium text-blue-600"> YOU CAN REACH US ANYTIME </p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="mobileNumber"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <div className="flex">
              <div className="flex items-center px-3 text-gray-500 bg-white border border-r-0 border-gray-300 rounded-l-md">
                <span className="text-sm"> +44 </span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <input
                type="tel"
                id="mobileNumber"
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email Adress
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="bookingId"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Booking ID
          </label>
          <input
            type="text"
            id="bookingId"
            placeholder="Enter your Booking ID"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="Leave us a message..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      <div className="pt-8 mt-8 border-t border-gray-200"> </div>
    </div>
  );
};

export default ContactForm;
