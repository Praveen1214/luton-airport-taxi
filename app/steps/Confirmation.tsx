"use client";

import React from "react";
import BookingSummary from "./BookingSummary"; // Adjust the path if needed

export default function BookingSummaryPage({
  bookingData,
  // updateBookingData,

  goToPrevStep,
}) {
  // const [formData, setFormData] = useState({
  //   passengerName: bookingData.passengerName || "",
  //   phoneNumber: bookingData.phoneNumber || "",
  //   email: bookingData.email || "",
  //   sendSmsToEmail: bookingData.sendSmsToEmail || false,
  //   additionalCharging: bookingData.additionalCharging || false,
  //   additionalSelection: bookingData.additionalSelection || {},
  //   driverNotes: bookingData.driverNotes || "",
  //   paymentType: bookingData.paymentType || "cash",
  // });

  return (
    <BookingSummary
      bookingData={bookingData}
      goToPrevStep={goToPrevStep}
      isSubmitting={false}
    />
  );
}
