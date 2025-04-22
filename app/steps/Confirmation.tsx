"use client";

import React, { useRef } from "react";
import { Users, Check, CheckCircle, Luggage } from "lucide-react";
import Image from "next/image";
import { Logo } from "../../assets";
import {
  getPriceBreakdown,
  PriceBreakdown,
} from "@/app/calculations/getPriceBreakdown";

interface BookingData {
  refId: string;
  miles?: string;
  returnMiles?: string;
  returnPickups?: Array<{ location: string }>;
  returnDropoff?: { location: string };
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
// function formatTime(timeString: string) {
//   if (!timeString) return "";
//   return timeString;
// }

type BookingSummaryProps = {
  bookingData?: BookingData;
  goToPrevStep: () => void;
  isSubmitting: boolean;

  distanceSlots: any[];
  fixedPriceList: any[];
  nightSurchargeSettings: any;
  surcharges: any[];
  parkingCharges: any[];
  additionalChargeData: any;
};

const BookingSummary: React.FC<BookingSummaryProps> = ({
  bookingData,
  distanceSlots,
  fixedPriceList,
  nightSurchargeSettings,
  surcharges,
  parkingCharges,
  additionalChargeData,
}) => {
  const bookingSummaryRef = useRef<HTMLDivElement>(null);



  const Row = ({ label, value }: { label: string; value?: number }) =>
    value ? (
      <div className="flex justify-between py-1">
        <span className="text-gray-600 text-sm">{label}</span>
        <span className="font-medium text-sm">£{value.toFixed(2)}</span>
      </div>
    ) : null;

  if (!bookingData) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">No booking data found.</p>
      </div>
    );
  }

  const priceDetails: PriceBreakdown = getPriceBreakdown(
    distanceSlots,
    parseFloat(bookingData.miles || "0"),
    bookingData.vehicleType,
    bookingData.pickups,
    bookingData.dropoff,
    fixedPriceList,
    nightSurchargeSettings,
    bookingData.selectedDate,
    surcharges,
    parkingCharges,
    additionalChargeData ?? {},
    bookingData.additionalSelection,
    bookingData.additionalCharging,
    bookingData.paymentType,
    bookingData.returnBooking,
    bookingData.returnPickups,
    bookingData.returnDropoff,
    parseFloat(bookingData.returnMiles || "0"),
    bookingData.returnSelectedDate
  );

  // Default values for the example booking
  const bookingCode = bookingData.refId || "LAT1234567890";
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
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10"
        ref={bookingSummaryRef}
      >
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Booking Confirmed!
          </h1>
          <p className="text-gray-600 mt-2">
            Your confirmation has been sent to your email.
          </p>
          <p className="text-gray-600 mt-1">
            Reservation Number:{" "}
            <span className="text-blue-600">{bookingCode}</span>
            </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Header with Logo & Booking Code */}
            <div className="flex flex-col sm:flex-row items-center justify-between p-5 border-b border-gray-100">
              {/* Logo */}
              <div className="mb-4 sm:mb-0">
                <Image src={Logo} alt="LAT Logo" width={120} height={48} />
              </div>
              {/* Booking Code */}
              <div className="text-center sm:text-right">
                <div className="text-sm text-gray-500">Your Booking Code</div>
                <div className="flex items-center mt-1 justify-center sm:justify-end">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-600 font-semibold text-sm">#</span>
                  </div>
                  <div className="font-bold text-blue-600 text-lg">
                    {bookingCode}
                  </div>
                </div>
              </div>
            </div>
    
            {/* Service Type */}
            <div className="px-5 py-3 bg-blue-50 border-b border-gray-200">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700 mr-2">
                  Service Type:
                </span>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
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
            <div className="p-5 grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-8">
              {/* LEFT COLUMN */}
              <div className="mb-6 lg:mb-0 lg:pr-8">
                {/* Vehicle & Basic Info */}
                <div className="flex items-start mb-6 bg-gray-50 p-4 rounded-lg">
                  <div className="w-10 h-10 mr-4 text-blue-600 flex-shrink-0">
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
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-800 mb-2">
                      {bookingData.vehicleType || "Standard Service"}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">
                          {bookingData.passengerCount || 3} Passengers
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Luggage className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">
                          {bookingData.luggageCount || 2} Luggage
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className=" p-4 rounded-lg">
                    <div className="text-sm font-medium text-gray-500 mb-1">
                      Date
                    </div>
                    <div className="text-gray-800 font-medium">
                      {formatDate(bookingData.selectedDate)}
                    </div>
                  </div>
                  {/* <div className="p-4 rounded-lg">
                    <div className="text-sm font-medium text-gray-500 mb-1">
                      Time
                    </div>
                    <div className="text-gray-800 font-medium">
                      {formatTime(bookingData.selectedTime)}
                    </div>
                  </div> */}
                </div>

                {/* Journey Details */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-gray-800 mb-4">Journey Details</h3>
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-3 h-3 rounded-full border-2 border-blue-600 flex items-center justify-center">
                        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                      </div>
                      <div className="w-px h-12 bg-gray-300 my-1"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-600 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-6">
                      {/* Pickup */}
                      <div>
                        <div className="text-xs text-gray-500 mb-1">From</div>
                        <div className="font-medium text-gray-800">
                          {bookingData.pickups?.[0]?.location ||
                            "London Luton Airport"}
                        </div>
                      </div>
                      {/* Dropoff */}
                      <div>
                        <div className="text-xs text-gray-500 mb-1">To</div>
                        <div className="font-medium text-gray-800">
                          {bookingData.dropoff?.location || "Watford"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Service Features */}
                <div className="p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-3">Service Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      First Class Chauffeur
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      Includes meet & greet
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      Free cancellation within 24h
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      Free 60 mins airport parking
                    </div>
                  </div>
                </div>
              </div>
    
              {/* RIGHT COLUMN */}
              <div>
                {/* Customer Information */}
                <div className="p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-gray-800 mb-4">Customer Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <div className="text-xs text-gray-500 mb-1">First Name</div>
                      <div className="text-sm text-gray-800 font-medium">{firstName}</div>
                    </div>
                    {/* Last Name */}
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Last Name</div>
                      <div className="text-sm text-gray-800 font-medium">{lastName}</div>
                    </div>
                    {/* Email */}
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Email Address</div>
                      <div className="text-sm text-gray-800 font-medium">
                        {bookingData.email || "Danielhamilton@gmail.com"}
                      </div>
                    </div>
                    {/* Mobile Number */}
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Mobile Number</div>
                      <div className="text-sm text-gray-800 font-medium">
                        {bookingData.phoneNumber || "(44) 882-4055"}
                      </div>
                    </div>
                    {/* Additional Service */}
                    
                    {/* Flight Number */}
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Flight Number</div>
                      <div className="text-sm text-gray-800 font-medium">
                        {bookingData.flightNumber || "BA 2032"}
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Payment Breakdown */}
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h3 className="font-medium text-gray-800 mb-4">Payment Breakdown</h3>
    
                  <Row label="Base / fixed fare" value={priceDetails.baseOrFixed} />
                  <Row label="Night‑time surcharge" value={priceDetails.night} />
                  <Row label="Holiday surcharge" value={priceDetails.holiday} />
                  <Row label="Parking charge" value={priceDetails.parking} />
                  <Row label="Additional items" value={priceDetails.additional} />
                  <Row label="Payment‑method fee" value={priceDetails.paymentFee} />
                  {bookingData.returnBooking && (
                    <Row label="Return journey" value={priceDetails.returnLeg} />
                  )}
    
                  <div className="flex justify-between mt-4 pt-3 border-t border-gray-200">
                    <span className="font-semibold text-gray-800">Total</span>
                    <span className="font-bold text-lg text-blue-600">
                      £{priceDetails.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Footer */}
          <div className="bg-gray-900 text-white w-full p-5 mt-6 rounded-lg flex flex-col sm:flex-row justify-between items-center">
            {/* Left side - Logo and tagline */}
            <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
              <div className="flex items-center">
                <Image src={Logo} alt="LAT Logo" width={120} height={48} />
              </div>
              <div className="text-sm text-gray-300 mt-2">
                Hassle Free Luton Airport Taxi
              </div>
            </div>
    
            {/* Right side - Contact info */}
            <div className="flex flex-col items-center sm:items-end">
              <div className="text-sm font-medium mb-2 text-white">
                Contact Customer Care
              </div>
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
                <span className="text-sm text-gray-300">
                  01582 262006 | 00441582 292929
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
                <span className="text-sm text-gray-300">
                  booking@lutonairporttaxi.co.uk
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookingSummary;
