import React, { useState } from "react";

const JoinTeam = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    badge: "",
    address: "",
    vehicleMake: "",
    vehicleModel: "",
    hasCardMachine: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">
        {" "}
        Join Our Driver Team{" "}
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Personal Details Section */}
        <div className="mb-8">
          <h3 className="mb-4 text-2xl font-medium"> Personal Details </h3>

          <div className="p-4 mb-6 rounded-lg-lg bg-blue-50">
            <p className="text-sm text-primary">
              {" "}
              The names you enter should match the ones in you card identity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="firstName"
              >
                {" "}
                First Name{" "}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="lastName"
              >
                {" "}
                Last Name{" "}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="mobileNumber"
              >
                {" "}
                Mobile Number{" "}
              </label>
              <div className="flex">
                <div className="flex items-center px-3 bg-white border border-gray-300 rounded-l-lg">
                  <span className="mr-1 text-sm text-gray-500"> +44 </span>
                  <svg
                    className="w-4 h-4 text-gray-400"
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
                  name="mobileNumber"
                  placeholder="Enter your phone number"
                  className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="email">
                {" "}
                Email Adress{" "}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="badge">
                {" "}
                Badge{" "}
              </label>
              <input
                type="text"
                id="badge"
                name="badge"
                placeholder="Enter your Badge number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.badge}
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="address"
              >
                {" "}
                Adress{" "}
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your Adress"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Vehicle Details Section */}
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-medium"> Vehicle Details </h3>

          <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="vehicleMake"
              >
                {" "}
                Vehicle Make{" "}
              </label>
              <input
                type="text"
                id="vehicleMake"
                name="vehicleMake"
                placeholder="Enter your first name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.vehicleMake}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="vehicleModel"
              >
                {" "}
                Vehicle Model{" "}
              </label>
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                placeholder="Enter your last name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.vehicleModel}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-6">
            <p className="block mb-2 text-sm font-medium">
              {" "}
              Do you have a card Machine ?{" "}
            </p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="hasCardMachine"
                  checked={formData.hasCardMachine}
                  onChange={handleChange}
                  className="w-5 h-5 border-gray-300 rounded-lg text-pribg-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm"> Yes </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="hasCardMachine"
                  checked={!formData.hasCardMachine}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      hasCardMachine: !e.target.checked,
                    })
                  }
                  className="w-5 h-5 border-gray-300 rounded-lg text-pribg-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm"> No </span>
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 text-white transition duration-300 rounded-lg bg-primary hover:bg-btn-hover"
        >
          Submit Applicaiton
        </button>
      </form>
    </div>
  );
};

export default JoinTeam;
