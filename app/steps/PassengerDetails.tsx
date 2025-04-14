"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  UserCircle,
  Users,
  Phone,
  Mail,
  ArrowLeft,
  Plus,
  Minus,
  Notebook,
  Car,
  CreditCard,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { StripePaymentWrapper } from "@/components/PaymentForm";

const PassengerDetails = ({
  bookingData,
  updateBookingData,
  additionalChargeData,
  goToNextStep,
  goToPrevStep,
  showAlert,
}) => {
  const [formData, setFormData] = useState({
    passengerName: bookingData.passengerName || "",
    phoneNumber: bookingData.phoneNumber || "",
    email: bookingData.email || "",
    sendSmsToEmail: bookingData.sendSmsToEmail,
    additionalCharging: bookingData.additionalCharging,
    additionalSelection: bookingData.additionalSelection,
    driverNotes: bookingData.driverNotes || "",
    paymentType: bookingData.paymentType || "cash",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [, /* bookingReference */ setBookingReference] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const [paymentType, setPaymentType] = useState<"card" | "cash">(
    bookingData.paymentType
  );
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const [priceDetails, setPriceDetails] = useState({
    basePrice: 0,
    additionalServicesPrice: 0,
    paymentMethodFee: 0,
    totalPrice: 0,
  });

  // Calculate price whenever relevant data changes
  useEffect(() => {
    calculateUpdatedPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    formData.additionalCharging,
    formData.additionalSelection,
    formData.paymentType,
  ]);

  const calculateUpdatedPrice = () => {
    const basePrice = parseFloat(bookingData.price) || 0;
    let additionalServicesPrice = 0;
    let paymentMethodFee = 0;

    // Additional services
    if (formData.additionalCharging && additionalChargeData) {
      const { additionalSelection } = formData;

      // Child seats
      additionalServicesPrice +=
        additionalSelection.boosterSeat *
        (additionalChargeData.boosterSeat || 0);
      additionalServicesPrice +=
        additionalSelection.childSeat * (additionalChargeData.childSeat || 0);
      additionalServicesPrice +=
        additionalSelection.infantSeat * (additionalChargeData.infantSeat || 0);

      // Other services
      additionalServicesPrice +=
        additionalSelection.meetAndGreet *
        (additionalChargeData.meetAndGreet || 0);
      additionalServicesPrice +=
        additionalSelection.waitingTimeAfterLanding *
        (additionalChargeData.waitingTimeAfterLanding || 0);
      additionalServicesPrice +=
        additionalSelection.waypoint * (additionalChargeData.waypoint || 0);
      additionalServicesPrice +=
        additionalSelection.wheelchair * (additionalChargeData.wheelchair || 0);

      // Additional options
      additionalServicesPrice += additionalSelection.additionalOptions
        .filter((opt) => opt.selected)
        .reduce((sum, opt) => sum + opt.price * opt.quantity, 0);
    }

    // Payment method fee
    if (formData.paymentType === "card") {
      // 2.5% fee for card
      paymentMethodFee = (basePrice + additionalServicesPrice) * 0.025;
    }

    const totalPrice = basePrice + additionalServicesPrice + paymentMethodFee;

    setPriceDetails({
      basePrice,
      additionalServicesPrice,
      paymentMethodFee,
      totalPrice,
    });

    updateBookingData({
      totalPrice: totalPrice.toFixed(2),
    });
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAdditionalServiceChange = (service, value) => {
    setFormData((prev) => ({
      ...prev,
      additionalSelection: {
        ...prev.additionalSelection,
        [service]: value,
      },
    }));
  };

  const handleAdditionalOptionChange = (index, field, value) => {
    const updatedOptions = [...formData.additionalSelection.additionalOptions];
    updatedOptions[index] = {
      ...updatedOptions[index],
      [field]: value,
    };

    setFormData((prev) => ({
      ...prev,
      additionalSelection: {
        ...prev.additionalSelection,
        additionalOptions: updatedOptions,
      },
    }));
  };

  const validateForm = () => {
    if (!formData.passengerName.trim()) {
      showAlert({
        title: "Missing Information",
        description: "Please enter the passenger's name.",
        type: "warning",
      });
      return false;
    }
    if (!formData.phoneNumber.trim()) {
      showAlert({
        title: "Missing Information",
        description: "Please enter a contact phone number.",
        type: "warning",
      });
      return false;
    }
    if (!formData.email.trim()) {
      showAlert({
        title: "Missing Information",
        description: "Please enter an email address.",
        type: "warning",
      });
      return false;
    }
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showAlert({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        type: "warning",
      });
      return false;
    }
    return true;
  };

  const syncPassengerData = () => {
    updateBookingData({
      passengerName: formData.passengerName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      sendSmsToEmail: formData.sendSmsToEmail,
      additionalCharging: formData.additionalCharging,
      additionalSelection: formData.additionalSelection,
      driverNotes: formData.driverNotes,
      paymentType: paymentType,
    });
  };

  // This will finalize the booking (API call, etc.)
  const processBookingConfirmation = async () => {
    try {
      // Uncomment the next line in real usage:
      // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/booking/addbooking`, formattedBookingData);

      // For demonstration, simulate an API response:
      const randomRef = `#${Math.floor(1000000 + Math.random() * 9000000)}`;
      setBookingReference(randomRef);
      setBookingComplete(true);

      // Auto-redirect countdown
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return true;
    } catch (error) {
      console.error("Error creating booking:", error);
      showAlert({
        title: "Booking Error",
        description: "Failed to create your booking. Please try again.",
        type: "error",
      });
      return false;
    }
  };

  // Called after the Stripe payment is successful
  const handlePaymentSuccess = async (stripeResult: any) => {
    console.log("Stripe Payment success details:", stripeResult);
    setIsProcessingPayment(true);
    try {
      // Now finalize the booking
      const success = await processBookingConfirmation();
      if (success) {
        setShowPaymentModal(false);
        showAlert({
          title: "Booking Successful",
          description: "Your card payment has been confirmed!",
          type: "success",
          onConfirm: () => {
            window.location.reload();
          },
        });
      }
    } catch (error) {
      console.error("Error finishing payment or booking:", error);
      showAlert({
        title: "Payment/Booking Error",
        description: "Something went wrong with your card payment.",
        type: "error",
      });
    } finally {
      setIsProcessingPayment(false);
    }
  };

  // Process final booking submission
  const handleCreateBooking = async (passengerFormData) => {
    setIsSubmitting(true);

    try {
      const formattedBookingData = {
        dateTime:
          bookingData.selectedDate?.toISOString() || new Date().toISOString(),
        returnBooking: bookingData.returnBooking,
        pickup: {
          locations: bookingData.pickups.map((p) => ({
            address: p.location,
            latitude: p.locationDetails?.lat || 0,
            longitude: p.locationDetails?.lon || 0,
            zone: p.zone || "",
          })),
        },
        dropOff: {
          address: bookingData.dropoff.location,
          latitude: bookingData.dropoff.locationDetails?.lat || 0,
          longitude: bookingData.dropoff.locationDetails?.lon || 0,
          zone: bookingData.dropoff.zone || "",
        },
        vehicleType: bookingData.vehicleType,
        passenger: {
          name: passengerFormData.passengerName,
          count: parseInt(bookingData.passengerCount) || 1,
        },
        contact: {
          phone: passengerFormData.phoneNumber,
          email: passengerFormData.email,
          sendSmsToEmail: passengerFormData.sendSmsToEmail,
        },
        payment: {
          type: passengerFormData.paymentType,
          miles: bookingData.returnBooking
            ? (
                parseFloat(bookingData.miles) +
                parseFloat(bookingData.returnMiles || "0")
              ).toFixed(2)
            : bookingData.miles,
          price: bookingData.totalPrice,
        },
        driverNotes: passengerFormData.driverNotes,
        driverCharge: "0.00",
        returnDetails: bookingData.returnBooking
          ? {
              dateTime: bookingData.returnSelectedDate?.toISOString(),
              pickups: bookingData.returnPickups.map((p) => ({
                address: p.location,
                latitude: p.locationDetails?.lat || 0,
                longitude: p.locationDetails?.lon || 0,
                zone: p.zone || "",
              })),
              dropOff: {
                address: bookingData.returnDropoff.location,
                latitude: bookingData.returnDropoff.locationDetails?.lat || 0,
                longitude: bookingData.returnDropoff.locationDetails?.lon || 0,
                zone: bookingData.returnDropoff.zone || "",
              },
            }
          : null,
        additionalCharge: bookingData.additionalCharging,
        additionalChargeDetails: {
          boosterSeat: bookingData.additionalSelection.boosterSeat || 0,
          childSeat: bookingData.additionalSelection.childSeat || 0,
          infantSeat: bookingData.additionalSelection.infantSeat || 0,
          meetAndGreet: bookingData.additionalSelection.meetAndGreet || 0,
          waitingTimeAfterLanding:
            bookingData.additionalSelection.waitingTimeAfterLanding || 0,
          waypoint: 0,
          wheelchair: bookingData.additionalSelection.wheelchair || 0,
          additionalOption: bookingData.additionalSelection.additionalOptions
            .filter((opt) => opt.selected)
            .map((opt) => ({
              name: opt.name,
              price: opt.price,
              quantity: opt.quantity,
            })),
        },
      };

      // Sync data so we don't lose any
      syncPassengerData();

      // If user selects "card", open payment modal.
      // If "cash", directly finalize booking.
      if (paymentType === "card") {
        setShowPaymentModal(true);
        // Remove the old setTimeout approach here
      } else {
        await processBookingConfirmation();
        showAlert({
          title: "Booking Successful",
          description: bookingData.returnBooking
            ? "Your outbound + return booking was created successfully!"
            : "Your booking was created successfully!",
          type: "success",
          onConfirm: () => {
            window.location.reload();
          },
        });
      }

      return true;
    } catch (error) {
      console.error("Error creating booking:", error);
      showAlert({
        title: "Booking Error",
        description: "Failed to create your booking. Please try again.",
        type: "error",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
      {/* Left side - Passenger details form */}
      <div className="lg:col-span-2">
        <Card className="overflow-hidden bg-white border rounded-xl">
          <CardContent className="p-6">
            <h2 className="mb-6 text-xl font-bold text-gray-800">
              Passenger Information
            </h2>

            {/* Passenger details */}
            <div className="p-4 mb-8 space-y-5 bg-[#F5F6FA] rounded-lg">
              <div>
                <label className="flex items-center mb-2 text-sm font-medium text-gray-700">
                  <UserCircle className="w-4 h-4 mr-2 text-primary" />
                  Full Name
                </label>
                <Input
                  value={formData.passengerName}
                  onChange={(e) =>
                    handleInputChange("passengerName", e.target.value)
                  }
                  placeholder="Enter full name"
                  className="bg-white border-gray-300 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="flex items-center mb-2 text-sm font-medium text-gray-700">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  Phone Number
                </label>
                <Input
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  placeholder="Enter phone number"
                  className="bg-white border-gray-300 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="flex items-center mb-2 text-sm font-medium text-gray-700">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  Email Address
                </label>
                <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
                  <Input
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter email address"
                    className="flex-1 bg-white border-gray-300 focus:ring-primary focus:border-primary"
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="send-email"
                      checked={formData.sendSmsToEmail}
                      onCheckedChange={(checked) =>
                        handleInputChange("sendSmsToEmail", checked)
                      }
                    />
                    <Label
                      htmlFor="send-email"
                      className="text-sm text-gray-600 cursor-pointer whitespace-nowrap"
                    >
                      Send confirmation
                    </Label>
                  </div>
                </div>
              </div>

              <div>
                <label className="flex items-center mb-2 text-sm font-medium text-gray-700">
                  <Car className="w-4 h-4 mr-2 text-primary" />
                  Selected Vehicle
                </label>
                <div className="p-3 bg-white border border-gray-200 rounded-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">
                        {bookingData.vehicleType}
                      </p>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <Users className="w-3.5 h-3.5 mr-1" />
                        <span>{bookingData.passengerCount} passengers</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-primary">
                        £{priceDetails.basePrice.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">Base price</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional services */}
            <div className="mb-8 space-y-5 bg-white rounded-md">
              <h2 className="mb-6 text-xl font-bold text-gray-800">
                Additional Services Information
              </h2>
              <div className="flex items-center mb-4 space-x-2">
                <Checkbox
                  id="additional-services"
                  checked={formData.additionalCharging}
                  onCheckedChange={(checked) =>
                    handleInputChange("additionalCharging", checked)
                  }
                />
                <Label
                  htmlFor="additional-services"
                  className="text-sm font-medium text-gray-700 cursor-pointer"
                >
                  Additional Services
                </Label>
              </div>

              {formData.additionalCharging && additionalChargeData && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 space-y-4 rounded-lg bg-[#F5F6FA]"
                >
                  <h3 className="mb-3 font-semibold text-gray-700 text-md">
                    Select Additional Services
                  </h3>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {/* Booster Seat */}
                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Booster Seat
                      </label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => {
                            const current =
                              formData.additionalSelection.boosterSeat;
                            if (current > 0) {
                              handleAdditionalServiceChange(
                                "boosterSeat",
                                current - 1
                              );
                            }
                          }}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                          disabled={
                            formData.additionalSelection.boosterSeat <= 0
                          }
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 mx-3 text-center">
                          {formData.additionalSelection.boosterSeat}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const current =
                              formData.additionalSelection.boosterSeat;
                            handleAdditionalServiceChange(
                              "boosterSeat",
                              current + 1
                            );
                          }}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="ml-auto text-sm text-gray-600">
                          £{additionalChargeData.boosterSeat || 0} each
                        </span>
                      </div>
                    </div>

                    {/* Child Seat */}
                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Child Seat
                      </label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => {
                            const current =
                              formData.additionalSelection.childSeat;
                            if (current > 0) {
                              handleAdditionalServiceChange(
                                "childSeat",
                                current - 1
                              );
                            }
                          }}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                          disabled={formData.additionalSelection.childSeat <= 0}
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 mx-3 text-center">
                          {formData.additionalSelection.childSeat}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const current =
                              formData.additionalSelection.childSeat;
                            handleAdditionalServiceChange(
                              "childSeat",
                              current + 1
                            );
                          }}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="ml-auto text-sm text-gray-600">
                          £{additionalChargeData.childSeat || 0} each
                        </span>
                      </div>
                    </div>

                    {/* Infant Seat */}
                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Infant Seat
                      </label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => {
                            const current =
                              formData.additionalSelection.infantSeat;
                            if (current > 0) {
                              handleAdditionalServiceChange(
                                "infantSeat",
                                current - 1
                              );
                            }
                          }}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                          disabled={
                            formData.additionalSelection.infantSeat <= 0
                          }
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 mx-3 text-center">
                          {formData.additionalSelection.infantSeat}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const current =
                              formData.additionalSelection.infantSeat;
                            handleAdditionalServiceChange(
                              "infantSeat",
                              current + 1
                            );
                          }}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="ml-auto text-sm text-gray-600">
                          £{additionalChargeData.infantSeat || 0} each
                        </span>
                      </div>
                    </div>

                    {/* Meet & Greet */}
                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Meet & Greet
                      </label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => {
                            const current =
                              formData.additionalSelection.meetAndGreet;
                            if (current > 0) {
                              handleAdditionalServiceChange(
                                "meetAndGreet",
                                current - 1
                              );
                            }
                          }}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                          disabled={
                            formData.additionalSelection.meetAndGreet <= 0
                          }
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 mx-3 text-center">
                          {formData.additionalSelection.meetAndGreet}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const current =
                              formData.additionalSelection.meetAndGreet;
                            handleAdditionalServiceChange(
                              "meetAndGreet",
                              current + 1
                            );
                          }}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="ml-auto text-sm text-gray-600">
                          £{additionalChargeData.meetAndGreet || 0} each
                        </span>
                      </div>
                    </div>

                    {/* Waiting After Landing */}
                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Waiting After Landing
                      </label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => {
                            const current =
                              formData.additionalSelection
                                .waitingTimeAfterLanding;
                            if (current > 0) {
                              handleAdditionalServiceChange(
                                "waitingTimeAfterLanding",
                                current - 1
                              );
                            }
                          }}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                          disabled={
                            formData.additionalSelection
                              .waitingTimeAfterLanding <= 0
                          }
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 mx-3 text-center">
                          {formData.additionalSelection.waitingTimeAfterLanding}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const current =
                              formData.additionalSelection
                                .waitingTimeAfterLanding;
                            handleAdditionalServiceChange(
                              "waitingTimeAfterLanding",
                              current + 1
                            );
                          }}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="ml-auto text-sm text-gray-600">
                          £{additionalChargeData.waitingTimeAfterLanding || 0}{" "}
                          each
                        </span>
                      </div>
                    </div>

                    {/* Wheelchair */}
                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Wheelchair
                      </label>
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => {
                            const current =
                              formData.additionalSelection.wheelchair;
                            if (current > 0) {
                              handleAdditionalServiceChange(
                                "wheelchair",
                                current - 1
                              );
                            }
                          }}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                          disabled={
                            formData.additionalSelection.wheelchair <= 0
                          }
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 mx-3 text-center">
                          {formData.additionalSelection.wheelchair}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const current =
                              formData.additionalSelection.wheelchair;
                            handleAdditionalServiceChange(
                              "wheelchair",
                              current + 1
                            );
                          }}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="ml-auto text-sm text-gray-600">
                          £{additionalChargeData.wheelchair || 0} each
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Additional options */}
                  {formData.additionalSelection.additionalOptions?.length >
                    0 && (
                    <div className="mt-5">
                      <h4 className="mb-3 text-sm font-medium text-gray-700">
                        Other Additional Options
                      </h4>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {formData.additionalSelection.additionalOptions.map(
                          (option, index) => (
                            <div
                              key={option._id}
                              className="flex items-center p-3 bg-white border border-gray-200 rounded-md"
                            >
                              <Checkbox
                                id={`option-${option._id}`}
                                checked={option.selected}
                                onCheckedChange={(checked) =>
                                  handleAdditionalOptionChange(
                                    index,
                                    "selected",
                                    checked
                                  )
                                }
                              />
                              <label
                                htmlFor={`option-${option._id}`}
                                className="flex-grow ml-2 text-sm cursor-pointer"
                              >
                                {option.name}(£{option.price})
                              </label>
                              {option.selected && (
                                <div className="flex items-center ml-2">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (option.quantity > 1) {
                                        handleAdditionalOptionChange(
                                          index,
                                          "quantity",
                                          option.quantity - 1
                                        );
                                      }
                                    }}
                                    className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                                    disabled={option.quantity <= 1}
                                  >
                                    <Minus className="w-3 h-3 text-gray-600" />
                                  </button>
                                  <span className="mx-2 text-sm">
                                    {option.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      handleAdditionalOptionChange(
                                        index,
                                        "quantity",
                                        option.quantity + 1
                                      );
                                    }}
                                    className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                                  >
                                    <Plus className="w-3 h-3 text-gray-600" />
                                  </button>
                                </div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Driver notes */}
            <div className="mb-8 p-4 space-y-5 bg-[#F5F6FA]  rounded-lg">
              <label className="flex items-center mb-2 text-sm font-medium text-gray-700">
                <Notebook className="w-4 h-4 mr-2 text-primary" />
                Driver Notes(Optional)
              </label>
              <Textarea
                value={formData.driverNotes}
                onChange={(e) =>
                  handleInputChange("driverNotes", e.target.value)
                }
                placeholder="Any special instructions for the driver..."
                className="bg-white border-gray-300 focus:ring-primary focus:border-primary min-h-24"
              />
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={goToPrevStep}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </div>

      {/* Right side - Price summary and payment option */}
      <div className="space-y-4 md:space-y-6">
        <div className="space-y-6">
          <Card className="overflow-hidden bg-white border rounded-xl">
            <CardContent className="p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-800 md:text-xl md:mb-6">
                Payment Breakdown
              </h2>

              <div className="flex items-center justify-between py-2 md:py-3">
                {priceDetails.paymentMethodFee > 0 && (
                  <div className="flex justify-between py-2 w-full">
                    <span className="text-gray-600">Card payment fee:</span>
                    <span className="font-medium">
                      £{priceDetails.paymentMethodFee.toFixed(2)}
                    </span>
                  </div>
                )}
              </div>

              {bookingData.returnBooking && (
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Return journey:</span>
                  <span className="text-gray-600">Included</span>
                </div>
              )}

              <div className="flex justify-between p-4 space-y-5 bg-[#F5F6FA] rounded-lg">
                <span className="text-base font-semibold md:text-lg">
                  Total Price
                </span>
                <span className="text-base font-bold text-primary md:text-lg">
                  £{priceDetails.totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="mt-3 text-xs text-gray-500 md:text-sm md:mt-4">
                This is an approximate estimate. The trip cost and travel time
                may differ due to traffic, route taken, and waiting time.
              </p>
            </CardContent>
          </Card>

          {/* Payment Method Selection */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 sm:mb-6 text-gray-800">
              Payment Method
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {/* Pay by Card */}
              <div
                className={`flex items-center p-3 sm:p-4 border rounded-xl transition-colors duration-200 relative bg-white ${
                  paymentType === "card"
                    ? "border-blue-400 ring-2 ring-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <input
                  type="radio"
                  id="card-payment"
                  name="payment-method"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 focus:ring-blue-400"
                  checked={paymentType === "card"}
                  onChange={() => setPaymentType("card")}
                />
                <label
                  htmlFor="card-payment"
                  className="ml-3 flex items-center w-full cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10H22" />
                      <path d="M6 15H8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">
                      Pay by card
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Credit or debit card
                    </p>
                  </div>
                </label>
              </div>

              {/* Pay in Cash */}
              <div
                className={`flex items-center p-3 sm:p-4 border rounded-xl transition-colors duration-200 relative bg-white ${
                  paymentType === "cash"
                    ? "border-blue-400 ring-2 ring-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <input
                  type="radio"
                  id="cash-payment"
                  name="payment-method"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 focus:ring-blue-400"
                  checked={paymentType === "cash"}
                  onChange={() => setPaymentType("cash")}
                />
                <label
                  htmlFor="cash-payment"
                  className="ml-3 flex items-center w-full cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M2 10C2 7.79086 3.79086 6 6 6H18C20.2091 6 22 7.79086 22 10V14C22 16.2091 20.2091 18 18 18H6C3.79086 18 2 16.2091 2 14V10Z" />
                      <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
                      <path d="M17 10C17 8.89543 16.1046 8 15 8C13.8954 8 13 8.89543 13 10" />
                      <path d="M7 14C7 15.1046 7.89543 16 9 16C10.1046 16 11 15.1046 11 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">
                      Pay in cash
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Pay directly to driver
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Confirm and Book */}
          <div className="flex justify-between pt-4">
            <Button
              onClick={async () => {
                if (!validateForm()) return;
                const bookingSuccess = await handleCreateBooking(formData);
                // If paymentType === "card", bookingSuccess just triggers the modal
                // If "cash", bookingSuccess finalizes immediately.
                if (!bookingSuccess) {
                  // Show error or handle accordingly
                }
              }}
            >
              Confirm and Book
            </Button>
          </div>
        </div>

        {showPaymentModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all"
              role="dialog"
              aria-modal="true"
              aria-labelledby="payment-modal-title"
            >
              {/* Accessible Close Button */}
              <button
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Close payment modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-col md:flex-row">
                {/* LEFT SIDE: Branding & Details */}
                <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                  <img
                    src="/path/to/car-image.jpg"
                    alt="Car Image"
                    className="w-40 h-auto mb-6 rounded shadow-md"
                  />
                  <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
                    Subscribe to ReCar Rental
                  </h2>
                  <p className="text-xl text-gray-700 font-semibold mb-1">
                    €203.20
                  </p>
                  <p className="text-sm text-gray-500">Billed monthly</p>
                </div>
                {/* RIGHT SIDE: Payment Content */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <CreditCard
                      className="h-12 w-12 text-blue-600 mx-auto mb-4"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Stripe Payment Form */}
                  <div className="flex justify-center">
                    <StripePaymentWrapper
                      amount={Math.round(priceDetails.totalPrice * 100)}
                      onSuccess={(result) => {
                        handlePaymentSuccess(result);
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PassengerDetails;
