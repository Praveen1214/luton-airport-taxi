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
    <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
      {/* Left side - Passenger details form */}
      <div className="lg:col-span-2">
        <Card className="overflow-hidden bg-white border rounded-xl">
          <CardContent className="p-6">
            <h2 className="mb-6 text-xl font-bold text-gray-800">
              {" "}
              Passenger Information{" "}
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
                        {" "}
                        {bookingData.vehicleType}{" "}
                      </p>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <Users className="w-3.5 h-3.5 mr-1" />
                        <span>{bookingData.passengerCount} passengers </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-primary">
                        £{priceDetails.basePrice.toFixed(2)}{" "}
                      </p>
                      <p className="text-xs text-gray-500"> Base price </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional services */}
            <div className="mb-8 space-y-5 bg-white rounded-md">
              <h2 className="mb-6 text-xl font-bold text-gray-800">
                {" "}
                Additional Services Information{" "}
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
                    {" "}
                    Select Additional Services{" "}
                  </h3>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {/* Child seats */}
                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
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

                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
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

                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
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

                    {/* Other services */}
                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
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

                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
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

                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
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
                        {" "}
                        Other Additional Options{" "}
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
              <div className="flex justify-between p-4 space-y-5 bg-[#F5F6FA] rounded-lg">
                <span className="text-base font-semibold md:text-lg">
                  Total Price
                </span>
                <span className="text-base font-bold text-primary md:text-lg">
                  £{priceDetails.totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="mt-3 text-xs text-gray-500 md:text-sm md:mt-4">
                This is an approximate estimate.The trip cost and travel time
                may differ due to traffic, route taken and waiting time.
              </p>

              {/* Service Guarantee - More visible on mobile */}
              <div className="p-4 mt-5 border border-blue-100 rounded-lg bg-blue-50 md:p-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 md:h-6 md:w-6"
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
                    <h3 className="text-sm font-medium text-gray-900 md:text-base">
                      Our Service Guarantee
                    </h3>
                    <p className="mt-1 text-xs text-gray-600 md:text-sm">
                      Fixed price, no hidden fees.Clean vehicles with
                      professional drivers. 24 / 7 customer support.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <button
            onClick={handleSubmit}
            className="w-full px-6 py-3 mt-2 text-sm font-medium text-white transition-colors rounded-md md:px-8 bg-primary hover:bg-btn-hover md:text-base"
          >
            Continue Booking
          </button>

          {/* <Card className="overflow-hidden bg-white shadow-md rounded-xl">
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-800">
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
                <div className="flex items-center p-3 space-x-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="cash" id="payment-cash" />
                  <Label
                    htmlFor="payment-cash"
                    className="flex items-center flex-1 cursor-pointer"
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

                <div className="flex items-center p-3 space-x-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="card" id="payment-card" />
                  <Label
                    htmlFor="payment-card"
                    className="flex items-center flex-1 cursor-pointer"
                  >
                    <CreditCard className="w-5 h-5 mr-3 text-primary" />
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
