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
} from "lucide-react";
import { Label } from "@/components/ui/label";

const PassengerDetails = ({
  bookingData,
  updateBookingData,
  // distanceSlots,
  // fixedPrice,
  // nightSurchargeSettings,
  // surcharges,
  // parkingCharges,
  additionalChargeData,
  goToNextStep,
  goToPrevStep,
  showAlert,
}) => {
  // const [isLoading, setIsLoading] = useState(false);

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

  const [priceDetails, setPriceDetails] = useState({
    basePrice: 0,
    additionalServicesPrice: 0,
    paymentMethodFee: 0,
    totalPrice: 0,
  });

  // Update price calculation when form data changes
  useEffect(() => {
    calculateUpdatedPrice();
  }, [
    formData.additionalCharging,
    formData.additionalSelection,
    formData.paymentType,
  ]);

  const calculateUpdatedPrice = () => {
    // Start with the base price
    const basePrice = parseFloat(bookingData.price) || 0;
    let additionalServicesPrice = 0;
    let paymentMethodFee = 0;

    // Calculate additional services cost if enabled
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

    // Apply payment method fee
    if (formData.paymentType === "card") {
      // Assuming a 2.5% fee for card payments
      paymentMethodFee = (basePrice + additionalServicesPrice) * 0.025;
    }

    // Calculate total price
    const totalPrice = basePrice + additionalServicesPrice + paymentMethodFee;

    // Update price details state
    setPriceDetails({
      basePrice,
      additionalServicesPrice,
      paymentMethodFee,
      totalPrice,
    });

    // Update total price in booking data
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

  const handleSubmit = () => {
    if (!validateForm()) return;

    // Update the booking data with passenger details
    updateBookingData({
      passengerName: formData.passengerName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      sendSmsToEmail: formData.sendSmsToEmail,
      additionalCharging: formData.additionalCharging,
      additionalSelection: formData.additionalSelection,
      driverNotes: formData.driverNotes,
      paymentType: formData.paymentType,
    });

    // Move to the next step
    goToNextStep();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* Left side - Passenger details form */}
      <div className="lg:col-span-2">
        <Card className="bg-white shadow-md rounded-xl overflow-hidden">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              {" "}
              Passenger Information{" "}
            </h2>

            {/* Passenger details */}
            <div className="space-y-5 mb-8">
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center mb-2">
                  <UserCircle className="w-4 h-4 mr-2 text-blue-600" />
                  Full Name
                </label>
                <Input
                  value={formData.passengerName}
                  onChange={(e) =>
                    handleInputChange("passengerName", e.target.value)
                  }
                  placeholder="Enter full name"
                  className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center mb-2">
                  <Phone className="w-4 h-4 mr-2 text-blue-600" />
                  Phone Number
                </label>
                <Input
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  placeholder="Enter phone number"
                  className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center mb-2">
                  <Mail className="w-4 h-4 mr-2 text-blue-600" />
                  Email Address
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <Input
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter email address"
                    className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 flex-1"
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
                <label className="text-sm font-medium text-gray-700 flex items-center mb-2">
                  <Car className="w-4 h-4 mr-2 text-blue-600" />
                  Selected Vehicle
                </label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">
                        {" "}
                        {bookingData.vehicleType}{" "}
                      </p>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Users className="w-3.5 h-3.5 mr-1" />
                        <span>{bookingData.passengerCount} passengers </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-blue-600">
                        £{priceDetails.basePrice.toFixed(2)}{" "}
                      </p>
                      <p className="text-xs text-gray-500"> Base price </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional services */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
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
                  className="p-4 border border-gray-200 rounded-lg bg-gray-50 space-y-4"
                >
                  <h3 className="text-md font-semibold text-gray-700 mb-3">
                    {" "}
                    Select Additional Services{" "}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Child seats */}
                    <div className="bg-white p-3 rounded-md border border-gray-200">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {" "}
                        Booster Seat{" "}
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
                          <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="mx-3 w-8 text-center">
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
                          <Plus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="ml-auto text-sm text-gray-600">
                          £{additionalChargeData.boosterSeat || 0} each
                        </span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-md border border-gray-200">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {" "}
                        Child Seat{" "}
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
                          <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="mx-3 w-8 text-center">
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
                          <Plus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="ml-auto text-sm text-gray-600">
                          £{additionalChargeData.childSeat || 0} each
                        </span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-md border border-gray-200">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {" "}
                        Infant Seat{" "}
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
                          <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="mx-3 w-8 text-center">
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
                          <Plus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="ml-auto text-sm text-gray-600">
                          £{additionalChargeData.infantSeat || 0} each
                        </span>
                      </div>
                    </div>

                    {/* Other services */}
                    <div className="bg-white p-3 rounded-md border border-gray-200">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {" "}
                        Meet & Greet{" "}
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
                          <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="mx-3 w-8 text-center">
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
                          <Plus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="ml-auto text-sm text-gray-600">
                          £{additionalChargeData.meetAndGreet || 0} each
                        </span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-md border border-gray-200">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {" "}
                        Waiting After Landing{" "}
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
                          <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="mx-3 w-8 text-center">
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
                          <Plus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="ml-auto text-sm text-gray-600">
                          £{additionalChargeData.waitingTimeAfterLanding || 0}{" "}
                          each
                        </span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-md border border-gray-200">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {" "}
                        Wheelchair{" "}
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
                          <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="mx-3 w-8 text-center">
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
                          <Plus className="h-4 w-4 text-gray-600" />
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
                      <h4 className="text-sm font-medium text-gray-700 mb-3">
                        {" "}
                        Other Additional Options{" "}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {formData.additionalSelection.additionalOptions.map(
                          (option, index) => (
                            <div
                              key={option._id}
                              className="bg-white p-3 rounded-md border border-gray-200 flex items-center"
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
                                className="text-sm ml-2 flex-grow cursor-pointer"
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
                                    <Minus className="h-3 w-3 text-gray-600" />
                                  </button>
                                  <span className="mx-2 text-sm">
                                    {" "}
                                    {option.quantity}{" "}
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
                                    <Plus className="h-3 w-3 text-gray-600" />
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
            <div className="mb-8">
              <label className="text-sm font-medium text-gray-700 flex items-center mb-2">
                <Notebook className="w-4 h-4 mr-2 text-blue-600" />
                Driver Notes(Optional)
              </label>
              <Textarea
                value={formData.driverNotes}
                onChange={(e) =>
                  handleInputChange("driverNotes", e.target.value)
                }
                placeholder="Any special instructions for the driver..."
                className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 min-h-24"
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
          <Card className="bg-white shadow-md rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-gray-800">
                Payment Breakdown
              </h2>

              <div className="flex justify-between items-center py-2 md:py-3 border-b">
                

                {priceDetails.paymentMethodFee > 0 && (
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600"> Card payment fee: </span>
                    <span className="font-medium">
                      £{priceDetails.paymentMethodFee.toFixed(2)}{" "}
                    </span>
                  </div>
                )}

                {bookingData.returnBooking && (
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600"> Return journey: </span>
                    <span className="text-gray-600"> Included </span>
                  </div>
                )}

                
              </div>
              <div className="flex justify-between items-center pt-3 md:pt-4 mt-1 md:mt-2">
                <span className="font-semibold text-base md:text-lg">
                  Total Price
                </span>
                <span className="font-bold text-base md:text-lg text-blue-600">
                  £{priceDetails.totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
                This is an approximate estimate.The trip cost and travel time
                may differ due to traffic, route taken and waiting time.
              </p>

              {/* Service Guarantee - More visible on mobile */}
              <div className="bg-blue-50 rounded-lg p-4 md:p-6 border border-blue-100 mt-5">
                <div className="flex items-start space-x-3">
                  <div className="text-blue-600 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm md:text-base">
                      Our Service Guarantee
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">
                      Fixed price, no hidden fees.Clean vehicles with
                      professional drivers. 24 / 7 customer support.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <button
              onClick={handleSubmit}
              className="w-full px-6 py-3 md:px-8 bg-[#000000] text-white font-medium rounded-md hover:bg-gray-800 transition-colors text-sm md:text-base mt-5"
            >
              Continue Booking
            </button>
          </Card>

          {/* <Card className="bg-white shadow-md rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {" "}
                Payment Method{" "}
              </h2>

              <RadioGroup
                value={formData.paymentType}
                onValueChange={(value) =>
                  handleInputChange("paymentType", value)
                }
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="cash" id="payment-cash" />
                  <Label
                    htmlFor="payment-cash"
                    className="flex items-center cursor-pointer flex-1"
                  >
                    <Banknote className="w-5 h-5 mr-3 text-green-600" />
                    <div>
                      <p className="font-medium"> Cash </p>
                      <p className="text-sm text-gray-500">
                        {" "}
                        Pay in cash to the driver{" "}
                      </p>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="card" id="payment-card" />
                  <Label
                    htmlFor="payment-card"
                    className="flex items-center cursor-pointer flex-1"
                  >
                    <CreditCard className="w-5 h-5 mr-3 text-blue-600" />
                    <div>
                      <p className="font-medium"> Card Payment </p>
                      <p className="text-sm text-gray-500">
                        {" "}
                        2.5 % processing fee applies{" "}
                      </p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card> */}

         
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
