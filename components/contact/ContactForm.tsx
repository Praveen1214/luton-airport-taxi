import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+44",
    mobileNumber: "",
    email: "",
    bookingId: "",
    message: "",
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
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
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
      // Prepare email content
      const emailContent = `
        New Contact Form Submission:
        
        Personal Details:
        Name: ${formData.firstName} ${formData.lastName}
        Mobile: ${formData.countryCode} ${formData.mobileNumber}
        Email: ${formData.email}
        Booking ID: ${formData.bookingId}
        
        Message:
        ${formData.message}
      `;

      // In a real implementation, you would use an email service like EmailJS
      // For demonstration, we'll simulate a successful email send with fetch
      // Replace this with actual email sending logic

      // Example using EmailJS (you would need to install this and set up an account)
      // You can uncomment and use this code after setting up EmailJS
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: 'abhisheklpeiris@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          message: emailContent,
          reply_to: formData.email
        },
        'YOUR_PUBLIC_KEY'
      );
      */

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Email would be sent to: abhisheklpeiris@gmail.com");
      console.log("Email content:", emailContent);

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        countryCode: "+44",
        mobileNumber: "",
        email: "",
        bookingId: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
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
    <div className="w-full max-w-2xl">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Get in touch</h1>
        <p className="font-medium text-blue-600">YOU CAN REACH US ANYTIME</p>
      </div>

      {showSuccess && (
        <div className="p-4 mb-6 text-green-800 bg-green-100 rounded-md">
          <p>
            Your message has been successfully sent to
            abhisheklpeiris@gmail.com!
          </p>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              value={formData.firstName}
              onChange={handleChange}
              required
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              value={formData.lastName}
              onChange={handleChange}
              required
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
              <div className="relative country-dropdown-container">
                <div
                  className="flex items-center px-3 py-3 text-gray-500 bg-white border border-r-0 border-gray-300 rounded-l-lg cursor-pointer"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  <span className="text-sm">{formData.countryCode}</span>
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
                {/* Country code dropdown */}
                {showCountryDropdown && (
                  <div className="absolute z-10 w-48 mt-1 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg max-h-60">
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
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-primary focus:border-primary"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              value={formData.email}
              onChange={handleChange}
              required
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            value={formData.bookingId}
            onChange={handleChange}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-white transition duration-300 rounded-md bg-primary hover:bg-btn-hover"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="pt-8 mt-8 border-t border-gray-200"></div>
    </div>
  );
};

export default ContactForm;
