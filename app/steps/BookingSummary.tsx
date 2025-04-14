"use client";

import React, { useRef } from "react";
import {
  Users,
  Check,
  CheckCircle,
  Luggage,
} from "lucide-react";
import Image from "next/image";
import { Logo } from "../../assets";

interface BookingData {
  selectedDate: string;
  selectedTime: string;
  returnBooking?: boolean;
  returnSelectedDate?: string;
  pickups?: Array<{ location: string }>;
  dropoff?: { location: string };
  vehicleType: string;
  passengerCount: number;
  passengerName: string;
  firstName?: string;
  lastName?: string;
  phoneNumber: string;
  email: string;
  additionalServices?: string[];
  flightNumber?: string;
  luggageCount?: number;
  additionalCharging?: boolean;
  additionalSelection: {
    boosterSeat: number;
    childSeat: number;
    infantSeat: number;
    meetAndGreet: number;
    waitingTimeAfterLanding: number;
    wheelchair: number;
    additionalOptions: Array<{
      _id: string;
      name: string;
      quantity: number;
      selected: boolean;
    }>;
  };
  driverNotes?: string;
  paymentType: "card" | "cash";
  totalPrice: number;
}

// Format date to display as shown in the image
function formatDate(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Format time separately for cleaner display
function formatTime(timeString: string) {
  if (!timeString) return "";
  return timeString;
}

type BookingSummaryProps = {
  bookingData?: BookingData;
  goToPrevStep: () => void;
  isSubmitting: boolean;
};

const BookingSummary: React.FC<BookingSummaryProps> = ({ bookingData }) => {
  const bookingSummaryRef = useRef<HTMLDivElement>(null);

  if (!bookingData) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">No booking data found.</p>
      </div>
    );
  }

  // Default values for the example booking
  const bookingCode = "#9987251";
  const serviceType = bookingData.returnBooking ? "RETURN" : "ONE WAY";

  // Default values for names if not provided in bookingData
  const firstName =
    bookingData.firstName ||
    bookingData.passengerName.split(" ")[0] ||
    "Daniel";
  const lastName =
    bookingData.lastName ||
    bookingData.passengerName.split(" ")[1] ||
    "" ||
    "Hamilton";

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-8" ref={bookingSummaryRef}>
  {/* Success Message */}
  <div className="text-center mb-8">
    <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
      <Check className="w-8 h-8 text-white" />
    </div>
    <h1 className="text-2xl font-semibold text-gray-800">
      Thank You! Your booking is successful.
    </h1>
    <p className="text-gray-600 mt-1">
      Your booking confirmation has been sent on email!
    </p>
    <p className="text-gray-600">
      The reservation number is{" "}
      <span className="font-semibold text-blue-600">{bookingCode}</span>
    </p>
  </div>

  <div className="max-w-5xl mx-auto">
    {/* Main Card */}
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      {/* Header with Logo & Booking Code */}
      <div className="flex flex-row md:flex-row items-start md:items-center justify-between p-4 md:p-6 border-b border-gray-100">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Image src={Logo} alt="LAT Logo" width={100} height={40} />
        </div>
        {/* Booking Code */}
        <div className="text-left  md:text-right">
          <div className="text-sm text-gray-500">Your Booking Code</div>
          <div className="flex items-center mt-1">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <span className="text-blue-600 font-semibold text-sm">#</span>
            </div>
            <div className="font-bold text-blue-600 text-base">
              {bookingCode}
            </div>
          </div>
        </div>
      </div>

      {/* Service Type */}
      <div className="px-4 md:px-6 py-3 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-600 mr-2">
            Service Type :
          </span>
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
            {serviceType === "ONE WAY" && (
              <svg
                className="w-3 h-3 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
              </svg>
            )}
            {serviceType}
          </span>
        </div>
      </div>

      {/* Booking Details: 2-column layout */}
      <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-[2fr_1.5fr] md:gap-8">
        {/* LEFT COLUMN */}
        <div className="mb-6 md:mb-0 md:pr-8">
          {/* Vehicle & Basic Info */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 mr-3 text-gray-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <path d="M5 17H19M14 11V7H19L22 11M22 11V17H19M22 11H16M5 17H3V11L6 7H10V11M5 17V11M10 11H5M10 11H16" />
                <circle cx="7.5" cy="14.5" r="1.5" />
                <circle cx="16.5" cy="14.5" r="1.5" />
              </svg>
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="text-base font-semibold text-gray-800">
                {bookingData.vehicleType || "Standard Service"}
              </div>
              <div className="flex mt-2 sm:mt-0 sm:space-x-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">
                    {bookingData.passengerCount || 3} Passengers
                  </span>
                </div>
                <div className="flex items-center">
                  <Luggage className="w-4 h-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">
                    {bookingData.luggageCount || 2} Luggage
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div>
              <div className="text-sm font-medium text-gray-800 mb-1">
                Date
              </div>
              <div className="text-gray-600 text-sm">
                {formatDate(bookingData.selectedDate)}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-800 mb-1">
                Time
              </div>
              <div className="text-gray-600 text-sm">
                {formatTime(bookingData.selectedTime)}
              </div>
            </div>
          </div>

          {/* Pickup & Drop-off + Service Features */}
          <div className="flex flex-col md:flex-row md:space-x-10 md:items-start border-t border-gray-100 pt-4">
            {/* Pickup & Drop-off */}
            <div className="mb-6 md:mb-0">
              <div className="flex items-start">
                <div className="flex flex-col items-center mr-3">
                  <div className="w-3 h-3 rounded-full border-2 border-blue-600 flex items-center justify-center">
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-px h-6 bg-gray-200 my-1"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-600 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full"></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 space-y-4">
                  {/* Pickup */}
                  <div>
                    <div className="font-medium text-gray-800">
                      {bookingData.pickups?.[0]?.location ||
                        "London Luton Airport"}
                    </div>
                  </div>
                  {/* Dropoff */}
                  <div>
                    <div className="font-medium text-gray-800">
                      {bookingData.dropoff?.location || "Watford"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Feature List */}
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center text-xs text-gray-600">
                <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center mr-2">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                </div>
                First Class Chauffeur
              </div>
              <div className="flex items-center text-xs text-gray-600">
                <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center mr-2">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                </div>
                Includes meet & greet
              </div>
              <div className="flex items-center text-xs text-gray-600">
                <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center mr-2">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                </div>
                Free cancellation <br className="hidden md:inline" />
                within 24 hours
              </div>
              <div className="flex items-center text-xs text-gray-600">
                <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center mr-2">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                </div>
                Free 60 mins airport parking
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
            {/* Name */}
            <div>
              <div className="text-sm font-medium text-gray-800 mb-1">
                Name
              </div>
              <div className="text-sm text-gray-600">{firstName}</div>
            </div>
            {/* Last Name */}
            <div>
              <div className="text-sm font-medium text-gray-800 mb-1">
                Last Name
              </div>
              <div className="text-sm text-gray-600">{lastName}</div>
            </div>
            {/* Email */}
            <div>
              <div className="text-sm font-medium text-gray-800 mb-1">
                Email Address
              </div>
              <div className="text-sm text-gray-600">
                {bookingData.email || "Danielhamilton@gmail.com"}
              </div>
            </div>
            {/* Mobile Number */}
            <div>
              <div className="text-sm font-medium text-gray-800 mb-1">
                Mobile Number
              </div>
              <div className="text-sm text-gray-600">
                {bookingData.phoneNumber || "(44) 882-4055"}
              </div>
            </div>
            {/* Additional Service */}
            <div>
              <div className="text-sm font-medium text-gray-800 mb-1">
                Additional Service
              </div>
              <div className="text-sm text-gray-600">
                {bookingData.additionalSelection?.meetAndGreet
                  ? "Meet & Greet"
                  : "None"}
              </div>
            </div>
            {/* Flight Number */}
            <div>
              <div className="text-sm font-medium text-gray-800 mb-1">
                Flight Number
              </div>
              <div className="text-sm text-gray-600">
                {bookingData.flightNumber || "BA 2032"}
              </div>
            </div>
          </div>

          {/* Total & Payment Method */}
          <div className="flex flex-row sm:flex-row space-x-60 sm:items-center sm:justify-between border-t border-gray-100 pt-4">
            <div className="mb-4 sm:mb-0">
              <div className="text-sm text-gray-500">Total</div>
              <div className="text-2xl font-bold text-gray-800">
                £{bookingData.totalPrice || "83.00"}
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10H22" />
                <path d="M7 15H13" />
              </svg>
              {bookingData.paymentType}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="bg-gray-900 text-white w-full p-4 mt-6 rounded flex flex-row md:flex-row justify-between items-center md:items-center">
      {/* Left side - Logo and tagline */}
      <div className="flex flex-col mb-4 md:mb-0">
        <div className="flex items-center">
          <Image src={Logo} alt="LAT Logo" width={100} height={40} />
        </div>
        <div className="text-xs text-gray-300 mt-1">
          Hassle Free Luton Airport Taxi
        </div>
      </div>

      {/* Right side - Contact info */}
      <div className="flex flex-col items-start md:items-end">
        <div className="text-sm font-medium mb-2">Contact Customer Care</div>
        <div className="flex items-center mb-2">
          <svg
            className="w-4 h-4 mr-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 01-2.13 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-7.09-7.09 19.86 19.86 0 01-3.07-8.63A2 2 0 014.11 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          <span className="text-xs text-gray-300 leading-tight">
            01582 262006 | 00441582 292929 <br className="md:hidden" />
            (Outside UK)
          </span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span className="text-xs text-gray-300">booking@lutonairporttaxi.co.uk</span>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default BookingSummary;
