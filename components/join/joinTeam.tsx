import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const JoinTeam = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+44",
    mobileNumber: "",
    email: "",
    badge: "",
    address: "",
    vehicleMake: "",
    vehicleModel: "",
    hasCardMachine: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // List of common country codes
  const countryCodes = [
    { code: "+1", country: "US/Canada" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+91", country: "India" },
    { code: "+86", country: "China" },
    { code: "+33", country: "France" },
    { code: "+49", country: "Germany" },
    { code: "+81", country: "Japan" },
    { code: "+34", country: "Spain" },
    { code: "+39", country: "Italy" },
    { code: "+55", country: "Brazil" },
    { code: "+7", country: "Russia" },
    { code: "+27", country: "South Africa" },
    { code: "+82", country: "South Korea" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const selectCountryCode = (code) => {
    setFormData({
      ...formData,
      countryCode: code,
    });
    setShowCountryDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: "abhisheklpeiris@gmail.com",
        from_name: `${formData.firstName} ${formData.lastName}`,
        reply_to: formData.email,
        subject: "New Driver Application",
        message: `
New Driver Application:

Personal Details:
Name: ${formData.firstName} ${formData.lastName}
Mobile: ${formData.countryCode} ${formData.mobileNumber}
Email: ${formData.email}
Badge: ${formData.badge}
Address: ${formData.address}

Vehicle Details:
Vehicle Make: ${formData.vehicleMake}
Vehicle Model: ${formData.vehicleModel}
Has Card Machine: ${formData.hasCardMachine ? "Yes" : "No"}
        `,
      };

      // Send the email using EmailJS
      // You need to sign up at emailjs.com and replace these IDs with your own
      // SERVICE_ID, TEMPLATE_ID and PUBLIC_KEY should be replaced with your actual EmailJS credentials
      const result = await emailjs.send(
        "SERVICE_ID", // Replace with your service ID
        "TEMPLATE_ID", // Replace with your template ID
        templateParams,
        "PUBLIC_KEY" // Replace with your public key
      );

      console.log("Email successfully sent!", result.text);

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        countryCode: "+44",
        mobileNumber: "",
        email: "",
        badge: "",
        address: "",
        vehicleMake: "",
        vehicleModel: "",
        hasCardMachine: true,
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showCountryDropdown &&
        !event.target.closest(".country-dropdown-container")
      ) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCountryDropdown]);

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">
        Join Our Driver Team
      </h2>
      {showSuccess && (
        <div className="p-4 mb-6 text-green-800 bg-green-100 rounded-lg">
          <p>
            Your application has been successfully submitted to
            abhisheklpeiris@gmail.com!
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Personal Details Section */}
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-medium">Personal Details</h3>
          <div className="p-4 mb-6 rounded-lg-lg bg-blue-50">
            <p className="text-sm text-primary">
              The names you enter should match the ones in you card identity.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="mobileNumber"
              >
                Mobile Number
              </label>
              <div className="flex">
                <div className="relative country-dropdown-container">
                  <div
                    className="flex items-center px-3 py-4 bg-white border border-gray-300 rounded-l-lg cursor-pointer"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  >
                    <span className="mr-1 text-sm text-gray-500">
                      {formData.countryCode}
                    </span>
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
                  {/* Country code dropdown */}
                  {showCountryDropdown && (
                    <div className="absolute z-10 w-48 mt-1 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg max-h-60">
                      {countryCodes.map((item) => (
                        <div
                          key={item.code}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => selectCountryCode(item.code)}
                        >
                          <span className="font-medium">{item.code}</span> -{" "}
                          {item.country}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter your phone number"
                  className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="email">
                Email Adress
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="badge">
                Badge
              </label>
              <input
                type="text"
                id="badge"
                name="badge"
                placeholder="Enter your Badge number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.badge}
                onChange={handleChange}
                required
              />
            </div>
            <div className="md:col-span-2">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="address"
              >
                Adress
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your Adress"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        {/* Vehicle Details Section */}
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-medium">Vehicle Details</h3>
          <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="vehicleMake"
              >
                Vehicle Make
              </label>
              <input
                type="text"
                id="vehicleMake"
                name="vehicleMake"
                placeholder="Enter vehicle make"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.vehicleMake}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="vehicleModel"
              >
                Vehicle Model
              </label>
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                placeholder="Enter vehicle model"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.vehicleModel}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <p className="block mb-2 text-sm font-medium">
              Do you have a card Machine ?
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
                <span className="ml-2 text-sm">Yes</span>
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
                <span className="ml-2 text-sm">No</span>
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 text-white transition duration-300 rounded-lg bg-primary hover:bg-btn-hover"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Applicaiton"}
        </button>
      </form>
    </div>
  );
};

export default JoinTeam;
