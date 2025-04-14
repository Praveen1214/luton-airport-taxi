"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Briefcase, Check, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { calculateTotalPrice } from "../calculations/calculateTotalPrice";

const VehicleSelection = ({
  bookingData,
  updateBookingData,
  vehicles,
  distanceSlots,
  fixedPrice,
  surcharges,
  nightSurchargeSettings,
  parkingCharges,
  additionalChargeData,
  goToNextStep,
  goToPrevStep,
  showAlert,
}) => {
  const [vehiclePrices, setVehiclePrices] = useState([]);
  const [selectedVehicleIndex, setSelectedVehicleIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  // Calculate prices for all vehicle types
  useEffect(() => {
    const calculatePricesForVehicles = async () => {
      setIsLoading(true);
      try {
        if (
          !bookingData.pickups[0]?.location ||
          !bookingData.dropoff?.location ||
          !vehicles.length
        ) {
          return;
        }

        console.log("pricex", distanceSlots);

        const calculatedPrices = vehicles.map((vehicle) => {
          // Calculate price for this vehicle type
          const totalPrice = calculateTotalPrice(
            distanceSlots,
            parseFloat(bookingData.miles),
            vehicle.type,
            bookingData.pickups.map((p) => ({
              location: p.location,
              zone: p.zone,
            })),
            {
              location: bookingData.dropoff.location,
              zone: bookingData.dropoff.zone,
            },
            fixedPrice,
            nightSurchargeSettings,
            bookingData.selectedDate,
            surcharges,
            parkingCharges,
            additionalChargeData,
            {
              boosterSeat: 0,
              childSeat: 0,
              infantSeat: 0,
              meetAndGreet: 0,
              waitingTimeAfterLanding: 0,
              waypoint: 0,
              wheelchair: 0,
              additionalOptions: [],
            },
            false, // No additional charges yet
            "cash", // Default to cash for initial price calculation
            bookingData.returnBooking,
            bookingData.returnBooking
              ? bookingData.returnPickups.map((p) => ({
                  location: p.location,
                  zone: p.zone,
                }))
              : [],
            bookingData.returnBooking
              ? {
                  location: bookingData.returnDropoff.location,
                  zone: bookingData.returnDropoff.zone,
                }
              : { location: "", zone: "" },
            bookingData.returnBooking ? parseFloat(bookingData.returnMiles) : 0,
            bookingData.returnBooking ? bookingData.returnSelectedDate : null
          );

          return {
            ...vehicle,
            calculatedPrice: parseFloat(totalPrice),
          };
        });

        setVehiclePrices(calculatedPrices);
        // Auto-select the standard/default vehicle option if none is selected
        if (selectedVehicleIndex === -1 && calculatedPrices.length > 0) {
          const defaultIndex = calculatedPrices.findIndex((v) =>
            v.type.toLowerCase().includes("standard")
          );
          setSelectedVehicleIndex(defaultIndex !== -1 ? defaultIndex : 0);
        }
      } catch (error) {
        console.error("Error calculating vehicle prices:", error);
        showAlert({
          title: "Calculation Error",
          description:
            "An error occurred while calculating prices. Please try again.",
          type: "error",
        });
      } finally {
        setIsLoading(false);
      }
    };

    calculatePricesForVehicles();
  }, [
    bookingData.pickups,
    bookingData.dropoff,
    bookingData.miles,
    bookingData.returnMiles,
    bookingData.selectedDate,
    bookingData.returnSelectedDate,
    bookingData.returnBooking,
    vehicles,
  ]);

  // Handle vehicle selection
  const handleVehicleSelect = (index) => {
    setSelectedVehicleIndex(index);

    if (index >= 0 && index < vehiclePrices.length) {
      const selectedVehicle = vehiclePrices[index];

      updateBookingData({
        vehicleType: selectedVehicle.type,
        price: selectedVehicle.calculatedPrice.toFixed(2),
        totalPrice: selectedVehicle.calculatedPrice.toFixed(2),
        passengerCount: selectedVehicle.seats.toString(),
        selectedVehicleIndex: index,
      });
    }
  };

  // Handle continue button click
  const handleContinue = () => {
    if (selectedVehicleIndex === -1) {
      showAlert({
        title: "Vehicle Selection Required",
        description: "Please select a vehicle type to continue.",
        type: "warning",
      });
      return;
    }

    goToNextStep();
  };

  // Determine most popular and best value vehicles
  const getMostPopularIndex = () => {
    // In a real app, this could come from analytics or be set by admin
    // For now, we'll just mark the second vehicle (or first if only one) as most popular
    return vehiclePrices.length > 1 ? 1 : 0;
  };

  // const getBestValueIndex = () => {
  //   // We'll consider the vehicle with the lowest price per seat as the best value
  //   if (vehiclePrices.length === 0) return -1;

  //   let bestIndex = 0;
  //   let bestPricePerSeat =
  //     vehiclePrices[0].calculatedPrice / vehiclePrices[0].seats;

  //   vehiclePrices.forEach((vehicle, index) => {
  //     const pricePerSeat = vehicle.calculatedPrice / vehicle.seats;
  //     if (pricePerSeat < bestPricePerSeat) {
  //       bestPricePerSeat = pricePerSeat;
  //       bestIndex = index;
  //     }
  //   });

  //   return bestIndex;
  // };

  const mostPopularIndex = getMostPopularIndex();
  // const bestValueIndex = getBestValueIndex();

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden">
      <CardContent className="p-6">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Select Your Vehicle
        </h2>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-12 h-12 border-b-2 border-blue-600 rounded-full animate-spin">
              {" "}
            </div>
          </div>
        ) : (
          <>
            {/* 
            {/* Vehicle options */}
            <div className="mb-10 space-y-6">
              {vehiclePrices.map((vehicle, index) => {
                const isSelected = index === selectedVehicleIndex;
                const isMostPopular = index === mostPopularIndex;
                //  const isBestValue = index === bestValueIndex;

                return (
                  <motion.div
                    key={vehicle._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`border rounded-2xl p-5 shadow-sm transition-all cursor-pointer hover:shadow-md  ${
                      isSelected
                        ? "border-blue-500 ring-2 ring-blue-200 bg-blue-50"
                        : "border-gray-200 bg-white"
                    }`}
                    onClick={() => handleVehicleSelect(index)}
                  >
                    <div className="bg-white rounded-xl relative p-6 shadow-sm">
                      {/* Most Popular Badge - Top Right (Desktop only) */}
                      {isMostPopular && (
                        <div className="absolute top-4 right-4 hidden md:block">
                          <div className="flex items-center px-3 py-1 text-sm font-medium text-amber-700 rounded-full border">
                            <Badge className="text-amber-700 bg-amber-100 border-amber-200">
                              Most Popular
                            </Badge>
                          </div>
                        </div>
                      )}

                      {/* Desktop Layout */}
                      <div className="hidden md:flex md:items-center">
                        {/* Vehicle Image - Left */}
                        <div className="w-1/4 flex justify-center">
                          <div className="relative h-24 w-40">
                            <Image
                              src={
                                vehicle.image
                                  ? `${process.env.NEXT_PUBLIC_API_URL}/${vehicle.image}`
                                  : "/placeholder-vehicle.jpg"
                              }
                              alt={vehicle.type}
                              fill
                              className="object-contain"
                              sizes="160px"
                            />
                          </div>
                        </div>

                        {/* Vehicle Info - Center */}
                        <div className="w-2/4 pl-4">
                          {/* Title */}
                          <h3 className="text-lg font-bold text-gray-900 mb-4 text-left">
                            {vehicle.type}
                          </h3>

                          {/* Features */}
                          <div className="space-y-3">
                            {/* Passenger & Luggage Row */}
                            <div className="flex space-x-8 text-gray-600">
                              <div className="flex items-center">
                                <span className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full mr-2">
                                  <Users className="h-4 w-4 text-gray-400" />
                                </span>
                                <span>{vehicle.seats} Passengers</span>
                              </div>
                              <div className="flex items-center">
                                <span className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full mr-2">
                                  <Briefcase className="h-4 w-4 text-gray-400" />
                                </span>
                                <span>
                                  {vehicle.luggage || vehicle.seats} Suitcases
                                </span>
                              </div>
                            </div>

                            {/* Waiting Time */}
                            <div className="flex items-center text-gray-600">
                              <Check className="h-5 w-5 text-gray-500 mr-2" />
                              <span>Free Waiting Time Included</span>
                            </div>

                            {/* Cancellation */}
                            <div className="flex items-center text-gray-600">
                              <Check className="h-5 w-5 text-gray-500 mr-2" />
                              <span>Cancelling Cover</span>
                            </div>
                          </div>
                        </div>

                        {/* Price - Right */}
                        <div className="w-1/4 text-right">
                          <div className="text-3xl font-bold text-indigo-900">
                            £{vehicle.calculatedPrice?.toFixed(2) || "75.00"}
                          </div>
                        </div>
                      </div>

                      {/* Mobile Layout - Updated to exactly match the design */}
                      <div className="flex flex-col md:hidden">
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          Standard Service
                        </h3>

                        {/* Vehicle Image */}
                        <div className="w-full mb-6">
                          <div className="relative h-36 w-full">
                            <Image
                              src={
                                vehicle.image
                                  ? `${process.env.NEXT_PUBLIC_API_URL}/${vehicle.image}`
                                  : "/placeholder-vehicle.jpg"
                              }
                              alt={vehicle.type}
                              fill
                              className="object-contain"
                              sizes="100%"
                            />
                          </div>
                        </div>

                        {/* Bottom Area - Features and Button in same row */}
                        <div className="flex justify-between items-center">
                          {/* Features Column */}
                          <div className="flex flex-col space-y-4">
                            <div className="flex items-center text-gray-600">
                              <span className="text-blue-500 mr-4">
                                <Users className="h-5 w-5" />
                              </span>
                              <span>{vehicle.seats} max passengers</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <span className="text-blue-500 mr-4">
                                <Briefcase className="h-5 w-5" />
                              </span>
                              <span>
                                {vehicle.luggage || vehicle.seats} max suitcase
                              </span>
                            </div>
                          </div>

                          {/* Select Button */}
                          <button
                            className={`rounded-lg py-2 px-6 text-center flex flex-col items-center ${
                              isSelected
                                ? "bg-blue-600"
                                : "border border-gray-200"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleVehicleSelect(index);
                            }}
                          >
                            <div
                              className={`font-medium ${
                                isSelected ? "text-white" : "text-gray-800"
                              }`}
                            >
                              Select
                            </div>
                            <div
                              className={`font-bold text-xl ${
                                isSelected ? "text-white" : "text-gray-800"
                              }`}
                            >
                              £{vehicle.calculatedPrice?.toFixed(2) || "75.00"}
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={goToPrevStep}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              <Button
                onClick={handleContinue}
                className="flex items-center text-white bg-primary hover:bg-btn-hover"
                disabled={selectedVehicleIndex === -1}
              >
                Book Now
                {/* <ArrowRight className="w-4 h-4 ml-2" /> */}
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default VehicleSelection;
