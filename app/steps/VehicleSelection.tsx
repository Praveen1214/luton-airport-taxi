"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Briefcase,
  Check,
  ArrowLeft,
  ArrowRight,
  Clock,
  Info,
  BarChart4,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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

  const getBestValueIndex = () => {
    // We'll consider the vehicle with the lowest price per seat as the best value
    if (vehiclePrices.length === 0) return -1;

    let bestIndex = 0;
    let bestPricePerSeat =
      vehiclePrices[0].calculatedPrice / vehiclePrices[0].seats;

    vehiclePrices.forEach((vehicle, index) => {
      const pricePerSeat = vehicle.calculatedPrice / vehicle.seats;
      if (pricePerSeat < bestPricePerSeat) {
        bestPricePerSeat = pricePerSeat;
        bestIndex = index;
      }
    });

    return bestIndex;
  };

  const mostPopularIndex = getMostPopularIndex();
  const bestValueIndex = getBestValueIndex();

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center w-full max-w-md">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-xs mt-1 text-blue-600 font-medium">Booking</span>
            </div>
            <div className="flex-1 h-1 bg-blue-600 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-white text-gray-500 border-2 border-gray-300 rounded-full flex items-center justify-center">
                2
              </div>
              <span className="text-xs mt-1 text-gray-500">Quotation</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-white text-gray-500 border-2 border-gray-300 rounded-full flex items-center justify-center">
                3
              </div>
              <span className="text-xs mt-1 text-gray-500">Confirm</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Select Your Vehicle
            </h2>

            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <>
                {/* Journey Details */}
                <div className="mb-6">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-gray-800">Journey Details</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {bookingData.returnBooking ? "Round-trip journey" : "One-way journey"}
                        </p>
                      </div>

                      <div className="flex items-center mt-2 sm:mt-0">
                        <Clock className="h-4 w-4 text-gray-600 mr-1" />
                        <span className="text-sm text-gray-600">
                          {bookingData.selectedDate.toLocaleDateString("en-US", {
                            weekday: "short",
                            day: "numeric",
                            month: "short",
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-medium">From</p>
                        <p className="text-sm text-gray-800">{bookingData.pickups[0]?.location}</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 uppercase font-medium">To</p>
                        <p className="text-sm text-gray-800">{bookingData.dropoff?.location}</p>
                      </div>

                      {bookingData.returnBooking && (
                        <>
                          <div className="col-span-2 border-t border-gray-200 pt-3 mt-1"></div>

                          <div>
                            <div className="flex items-center">
                              <p className="text-xs text-gray-500 uppercase font-medium">Return From</p>
                              <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Return</span>
                            </div>
                            <p className="text-sm text-gray-800">{bookingData.returnPickups[0]?.location}</p>
                          </div>

                          <div>
                            <p className="text-xs text-gray-500 uppercase font-medium">Return To</p>
                            <p className="text-sm text-gray-800">{bookingData.returnDropoff?.location}</p>

                            <div className="flex items-center mt-2">
                              <Clock className="h-4 w-4 text-gray-600 mr-1" />
                              <span className="text-xs text-gray-600">
                                {bookingData.returnSelectedDate.toLocaleDateString("en-US", {
                                  weekday: "short",
                                  day: "numeric",
                                  month: "short",
                                  hour: "numeric",
                                  minute: "2-digit",
                                })}
                              </span>
                            </div>
                          </div>
                        </>
                      )}

                      <div className="col-span-1 md:col-span-2 mt-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <BarChart4 className="h-4 w-4 text-blue-600 mr-1" />
                            <span className="text-gray-700">Total Distance:</span>
                          </div>
                          <span className="font-medium">
                            {bookingData.returnBooking
                              ? `${(parseFloat(bookingData.miles) + parseFloat(bookingData.returnMiles)).toFixed(2)} miles (round-trip)`
                              : `${bookingData.miles} miles`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vehicle options */}
                <div className="space-y-4 mb-10">
                  {vehicles.map((vehicle, index) => {
                    const isSelected = index === selectedVehicleIndex;
                    const tagColor = vehicle.tag === "Most Popular" 
                      ? "bg-orange-100 text-orange-800 border-orange-200"
                      : vehicle.tag === "Best Value"
                        ? "bg-blue-100 text-blue-800 border-blue-200"
                        : vehicle.tag === "Luxury"
                          ? "bg-purple-100 text-purple-800 border-purple-200"
                          : "bg-green-100 text-green-800 border-green-200";

                    return (
                      <motion.div
                        key={vehicle.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`border rounded-lg p-4 shadow-sm transition-all cursor-pointer hover:shadow-md ${
                          isSelected
                            ? "border-blue-500 ring-2 ring-blue-200"
                            : "border-gray-200"
                        }`}
                        onClick={() => handleVehicleSelect(index)}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          {/* Vehicle Image */}
                          <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-gray-200 bg-white flex-shrink-0">
                            <div className="absolute inset-0 bg-gray-100" />
                          </div>

                          {/* Vehicle Info */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-base font-semibold text-gray-900">{vehicle.type}</h3>
                              {vehicle.tag && (
                                <span className={`px-2 py-0.5 text-xs font-medium rounded border ${tagColor}`}>
                                  {vehicle.tag}
                                </span>
                              )}
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-gray-600 text-xs">
                              <div className="flex items-center">
                                <Users className="h-3 w-3 mr-1 text-gray-400" />
                                {vehicle.seats} Passengers
                              </div>
                              <div className="flex items-center">
                                <Briefcase className="h-3 w-3 mr-1 text-gray-400" />
                                {vehicle.suitcases} Suitcases
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-gray-600">
                              <div className="flex items-center">
                                <Check className="h-3 w-3 text-green-500 mr-1" />
                                Free Waiting Time
                              </div>
                              <div className="flex items-center">
                                <Check className="h-3 w-3 text-green-500 mr-1" />
                                Cancelling Cover
                              </div>
                            </div>
                          </div>

                          {/* Price */}
                          <div className="sm:text-right flex sm:flex-col items-center sm:items-end justify-between sm:justify-start mt-2 sm:mt-0">
                            <div className="text-xl font-bold text-gray-900">£{vehicle.price.toFixed(2)}</div>
                            <button
                              className={`px-4 py-1 text-sm font-medium rounded-md mt-1 ${
                                isSelected 
                                  ? "bg-blue-600 text-white" 
                                  : "border border-blue-600 text-blue-600"
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleVehicleSelect(index);
                              }}
                            >
                              {isSelected ? "Selected" : "Select"}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Total and navigation */}
                <div className="border-t border-gray-200 pt-4 mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-xl font-bold">
                      £{selectedVehicleIndex >= 0 ? vehicles[selectedVehicleIndex].price.toFixed(2) : "0.00"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <button 
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 flex items-center"
                      onClick={goToPrevStep}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </button>

                    <button 
                      className={`px-6 py-2 rounded-md bg-blue-600 text-white flex items-center ${
                        selectedVehicleIndex === -1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                      }`}
                      disabled={selectedVehicleIndex === -1}
                      onClick={handleContinue}
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  

export default VehicleSelection;
