/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InstantQuote from "./steps/InstantQuote";
import VehicleSelection from "./steps/VehicleSelection";
import PassengerDetails from "./steps/PassengerDetails";
import Confirmation from "./steps/Confirmation";
import StepIndicator from "./steps/StepIndicator";
import AlertToast from "@/components/alertToast";
import Loader from "@/components/common/Loader";
import Services from "@/components/landing/Services";
import BookingSteps from "@/components/landing/BookingSteps";
import Stress from "@/components/landing/Stress";
import OurServices from "@/components/landing/OurServices";
import SaveUp from "@/components/landing/SaveUp";
import SaveUp2 from "@/components/landing/SaveUp2";
import LAirPort from "@/components/landing/LAirPort";
import Specialist from "@/components/landing/Specialist";

const BookingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState({
    // Trip details
    pickups: [{ id: 1, location: "", locationDetails: undefined, zone: "" }],
    dropoff: { id: 0, location: "", locationDetails: undefined, zone: "" },
    selectedDate: new Date(),
    returnBooking: false,
    returnPickups: [
      { id: 1, location: "", locationDetails: undefined, zone: "" },
    ],
    returnDropoff: {
      id: 0,
      location: "",
      locationDetails: undefined,
      zone: "",
    },
    returnSelectedDate: null,

    // Distance and pricing
    miles: "0",
    returnMiles: "0",
    vehicleType: "",
    price: "0",
    returnPrice: "0",
    totalPrice: "0",

    // Passenger details
    passengerName: "",
    passengerCount: "",
    phoneNumber: "",
    email: "",
    sendSmsToEmail: true,

    // Payment
    paymentType: "cash",

    // Additional
    driverNotes: "",
    driverCharge: "0",
    additionalCharging: false,
    additionalSelection: {
      boosterSeat: 0,
      childSeat: 0,
      infantSeat: 0,
      meetAndGreet: 0,
      waitingTimeAfterLanding: 0,
      waypoint: 0,
      wheelchair: 0,
      additionalOptions: [],
    },

    // Vehicle data for selection
    selectedVehicleIndex: -1,
    vehicleOptions: [],
  });

  const [alertConfig, setAlertConfig] = useState({
    isOpen: false,
    title: "",
    description: "",
    type: "warning",
    onConfirm: () => {},
  });

  // API data states
  const [zones, setZones] = useState([]);
  const [distanceSlots, setDistanceSlots] = useState([]);
  const [fixedPrice, setFixedPrice] = useState([]);
  const [surcharges, setSurcharges] = useState([]);
  const [nightSurchargeSettings, setNightSurchargeSettings] = useState(null);
  const [parkingCharges, setParkingCharges] = useState([]);
  const [additionalChargeData, setAdditionalChargeData] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  // Show alert toast
  const showAlert = ({ title, description, type, onConfirm }) => {
    setAlertConfig({
      isOpen: true,
      title,
      description,
      type,
      onConfirm: onConfirm || (() => {}),
    });
  };

  // Close alert toast
  const closeAlert = () => {
    setAlertConfig((prev) => ({ ...prev, isOpen: false }));
  };

  // Handle moving to next step
  const goToNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle moving to previous step
  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // Update booking data
  const updateBookingData = (newData) => {
    setBookingData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  // Load all required data from APIs
  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      try {
        // Import and execute all API fetch functions
        const {
          fetchZones,
          fetchAllPricing,
          fetchFixedPrices,
          fetchHolidaySurcharges,
          fetchNightSurchargeSettings,
          fetchParkingCharges,
          fetchAdditionalCharges,
          fetchVehicles,
        } = await import("./api/apiServices");

        // Fetch all data in parallel
        const [
          zonesData,
          pricingData,
          fixedPricesData,
          holidaySurchargesData,
          nightSurchargeData,
          parkingChargesData,
          additionalChargesData,
          vehiclesData,
        ] = await Promise.all([
          fetchZones(),
          fetchAllPricing(),
          fetchFixedPrices(),
          fetchHolidaySurcharges(),
          fetchNightSurchargeSettings(),
          fetchParkingCharges(),
          fetchAdditionalCharges(),
          fetchVehicles(),
        ]);

        console.log("price", pricingData);

        // Set all data to state
        setZones(zonesData.data || []);
        setDistanceSlots(pricingData || []);
        setFixedPrice(fixedPricesData || []);
        setSurcharges(holidaySurchargesData || []);
        setNightSurchargeSettings(nightSurchargeData || null);
        setParkingCharges(parkingChargesData || []);
        setAdditionalChargeData(additionalChargesData || null);
        setVehicles(vehiclesData || []);

        // Initialize additional options if available
        if (additionalChargesData?.additionalOptions?.length) {
          const mappedOpts = additionalChargesData.additionalOptions.map(
            (opt) => ({
              _id: opt._id,
              name: opt.name,
              price: opt.price,
              selected: false,
              quantity: 1,
            })
          );

          updateBookingData({
            additionalSelection: {
              ...bookingData.additionalSelection,
              additionalOptions: mappedOpts,
            },
          });
        }
      } catch (error) {
        console.error("Error loading initial data:", error);
        showAlert({
          title: "Data Loading Error",
          description:
            "Failed to load necessary data. Please refresh the page.",
          type: "error",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // Render appropriate step component based on current step
  const renderStep = () => {
    const commonProps = {
      bookingData,
      updateBookingData,
      zones,
      distanceSlots,
      fixedPrice,
      surcharges,
      nightSurchargeSettings,
      parkingCharges,
      additionalChargeData,
      vehicles,
      goToNextStep,
      goToPrevStep,
      showAlert,
    };

    switch (currentStep) {
      case 1:
        return <InstantQuote {...commonProps} />;
      case 2:
        return <VehicleSelection {...commonProps} />;
      case 3:
        return <PassengerDetails {...commonProps} />;
      case 4:
        return <Confirmation {...commonProps} />;
      default:
        return <InstantQuote {...commonProps} />;
    }
  };

  if (isLoading) return <Loader />;

  const steps = [
    { number: 1, label: "Booking" },
    { number: 2, label: "Quotation" },
    { number: 3, label: "Passenger Details" },
    { number: 4, label: "Confirm" },
  ];

  return (
    <>
      <div className="relative min-h-screen bg-off-white">
        <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none bg-gradient-to-l from-blue-50 to-transparent">
          {" "}
        </div>
        <div className="relative py-6 mx-auto sm:px-6 lg:px-8">
          {currentStep !== 1 && (
            <StepIndicator steps={steps} currentStep={currentStep} />
          )}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="bg-[#F5F7FB]">
          <div className="container relative w-full px-4 mx-auto md:px-6 lg:px-8">
            <Services />
          </div>
        </div>
        <div className="container relative w-full px-4 mx-auto md:px-6 lg:px-8">
          <BookingSteps />
        </div>
        <div className="container relative w-full px-4 mx-auto md:px-6 lg:px-8">
          <Stress />
        </div>
        <div className="container relative w-full px-4 mx-auto md:px-6 lg:px-8">
          <OurServices />
        </div>
        <div className="container relative w-full px-4 mx-auto md:px-6 lg:px-8">
          <SaveUp />
        </div>
        <div className="container relative w-full px-4 mx-auto md:px-6 lg:px-8">
          <SaveUp2 />
        </div>
        <div className="container relative w-full px-4 mx-auto md:px-6 lg:px-8">
          <LAirPort />
        </div>
        <div className="container relative w-full px-4 mx-auto md:px-6 lg:px-8">
          <Specialist />
        </div>
        {alertConfig.isOpen && (
          <AlertToast
            open={alertConfig.isOpen}
            onOpenChange={closeAlert}
            title={alertConfig.title}
            description={alertConfig.description}
            type={alertConfig.type}
            onConfirm={alertConfig.onConfirm}
          />
        )}
      </div>
    </>
  );
};

export default BookingFlow;
