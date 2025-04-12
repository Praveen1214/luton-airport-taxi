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
    <Card className="w-full max-w-4xl mx-auto overflow-hidden bg-white shadow-md rounded-xl">
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
            <div className="mb-6">
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex flex-col justify-between mb-3 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {" "}
                      Journey Details{" "}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {bookingData.returnBooking
                        ? "Round-trip journey"
                        : "One-way journey"}
                    </p>
                  </div>

                  <div className="flex items-center mt-2 sm:mt-0">
                    <Clock className="w-4 h-4 mr-1 text-gray-600" />
                    <span className="text-sm text-gray-600">
                      {bookingData.selectedDate?.toLocaleDateString("en-US", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase">
                      {" "}
                      From{" "}
                    </p>
                    <p className="text-sm text-gray-800">
                      {" "}
                      {bookingData.pickups[0]?.location}{" "}
                    </p>
                    {bookingData.pickups.length > 1 && (
                      <p className="mt-1 text-xs text-blue-600">
                        +{bookingData.pickups.length - 1} additional pickup
                        {bookingData.pickups.length > 2 ? "s" : ""}
                      </p>
                    )}
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase">
                      {" "}
                      To{" "}
                    </p>
                    <p className="text-sm text-gray-800">
                      {" "}
                      {bookingData.dropoff?.location}{" "}
                    </p>
                  </div>

                  {bookingData.returnBooking && (
                    <>
                      <div className="col-span-2 pt-3 mt-1 border-t border-gray-200">
                        {" "}
                      </div>

                      <div>
                        <div className="flex items-center">
                          <p className="text-xs font-medium text-gray-500 uppercase">
                            {" "}
                            Return From{" "}
                          </p>
                          <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                            {" "}
                            Return{" "}
                          </span>
                        </div>
                        <p className="text-sm text-gray-800">
                          {" "}
                          {bookingData.returnPickups[0]?.location}{" "}
                        </p>
                        {bookingData.returnPickups.length > 1 && (
                          <p className="mt-1 text-xs text-blue-600">
                            +{bookingData.returnPickups.length - 1} additional
                            pickup
                            {bookingData.returnPickups.length > 2 ? "s" : ""}
                          </p>
                        )}
                      </div>

                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase">
                          {" "}
                          Return To{" "}
                        </p>
                        <p className="text-sm text-gray-800">
                          {" "}
                          {bookingData.returnDropoff?.location}{" "}
                        </p>

                        <div className="flex items-center mt-2">
                          <Clock className="w-4 h-4 mr-1 text-gray-600" />
                          <span className="text-xs text-gray-600">
                            {bookingData.returnSelectedDate?.toLocaleDateString(
                              "en-US",
                              {
                                weekday: "short",
                                day: "numeric",
                                month: "short",
                                hour: "numeric",
                                minute: "2-digit",
                              }
                            )}
                          </span>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="col-span-1 mt-2 md:col-span-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <BarChart4 className="w-4 h-4 mr-1 text-blue-600" />
                        <span className="text-gray-700"> Total Distance: </span>
                      </div>
                      <span className="font-medium">
                        {bookingData.returnBooking
                          ? `${(
                              parseFloat(bookingData.miles) +
                              parseFloat(bookingData.returnMiles)
                            ).toFixed(2)} miles (round-trip)`
                          : `${bookingData.miles} miles`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle options */}
            <div className="mb-10 space-y-6">
              {vehiclePrices.map((vehicle, index) => {
                const isSelected = index === selectedVehicleIndex;
                const isMostPopular = index === mostPopularIndex;
                const isBestValue = index === bestValueIndex;

                return (
                  <motion.div
                    key={vehicle._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`border rounded-2xl p-5 shadow-sm transition-all cursor-pointer hover:shadow-md ${
                      isSelected
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-gray-200"
                    }`}
                    onClick={() => handleVehicleSelect(index)}
                  >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                      {/* Left Side */}
                      <div className="flex items-start flex-1 gap-5">
                        {/* Image */}
                        <div className="relative flex-shrink-0 h-20 overflow-hidden bg-white border border-gray-200 shadow-sm w-28 rounded-xl">
                          {/* <Image
                            src={
                              vehicle.image
                                ? `${process.env.NEXT_PUBLIC_API_URL}/${vehicle.image}`
                                : "/placeholder-vehicle.jpg"
                            }
                            alt={vehicle.type}
                            fill
                            className="object-cover"
                            sizes="112px"
                          /> */}
                        </div>

                        {/* Vehicle Info */}
                        <div className="flex-1">
                          {/* Header */}
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {vehicle.type}
                            </h3>
                            {isMostPopular && (
                              <Badge className="text-orange-800 bg-orange-100 border border-orange-200">
                                Most Popular
                              </Badge>
                            )}
                            {isBestValue && (
                              <Badge className="text-blue-800 bg-blue-100 border border-blue-200">
                                Best Value
                              </Badge>
                            )}
                          </div>

                          {/* Features */}
                          <div className="grid grid-cols-2 gap-3 mb-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1.5 text-gray-400" />
                              {vehicle.seats} Passengers
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1.5 text-gray-400" />
                              {vehicle.seats} Suitcases
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-5 gap-y-2">
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-1.5" />
                              Free Waiting Time
                            </div>
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-1.5" />
                              Free Cancellation (24h)
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side */}
                      <div className="flex flex-col items-end justify-between sm:min-w-[160px] gap-2">
                        {/* Price */}
                        <div className="text-right">
                          <div className="text-2xl font-bold leading-tight text-blue-600">
                            £{vehicle.calculatedPrice.toFixed(2)}
                          </div>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center justify-end mt-1 text-xs text-gray-500 transition-colors cursor-help hover:text-gray-700">
                                  <Info className="h-3.5 w-3.5 mr-1" />
                                  Price details
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="w-64 p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
                                <div className="space-y-1.5 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">
                                      Base fare:
                                    </span>
                                    <span className="font-medium">
                                      £
                                      {(vehicle.calculatedPrice * 0.85).toFixed(
                                        2
                                      )}
                                    </span>
                                  </div>
                                  {bookingData.returnBooking && (
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">
                                        Return fare:
                                      </span>
                                      <span className="font-medium">
                                        £
                                        {(
                                          vehicle.calculatedPrice * 0.15
                                        ).toFixed(2)}
                                      </span>
                                    </div>
                                  )}
                                  <div className="border-t border-gray-100 pt-1.5 mt-1.5" />
                                  <div className="flex justify-between font-semibold">
                                    <span>Total:</span>
                                    <span>
                                      £{vehicle.calculatedPrice.toFixed(2)}
                                    </span>
                                  </div>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>

                        {/* Button */}
                        <Button
                          variant={isSelected ? "default" : "outline"}
                          size="sm"
                          className={`w-full sm:w-auto ${
                            isSelected
                              ? "bg-blue-600 hover:bg-blue-700 text-white"
                              : "text-blue-600 border-blue-600 hover:bg-blue-50"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVehicleSelect(index);
                          }}
                        >
                          {isSelected ? "Selected" : "Select"}
                        </Button>
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
                className="flex items-center text-white bg-blue-600 hover:bg-blue-700"
                disabled={selectedVehicleIndex === -1}
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default VehicleSelection;
