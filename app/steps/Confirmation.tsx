"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { StripePaymentWrapper } from "@/components/PaymentForm";
import axios from "axios";
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  Car,
  Users,
  CreditCard,
  Banknote,
  ArrowLeft,
  Clipboard,
  UserCircle,
} from "lucide-react";
// import { useRouter } from "next/navigation";
// import axios from "axios";

interface BookingData {
  selectedDate: Date | null;
  returnSelectedDate?: Date | null;
  returnBooking: boolean;
  pickups: Array<{
    location: string;
    locationDetails?: { lat?: number; lon?: number };
    zone?: string;
  }>;
  dropoff: {
    location: string;
    locationDetails?: { lat?: number; lon?: number };
    zone?: string;
  };
  vehicleType: string;
  passengerName: string;
  passengerCount: string;
  phoneNumber: string;
  email: string;
  sendSmsToEmail: boolean;
  paymentType: "card" | "cash";
  miles: string;
  returnMiles?: string;
  totalPrice: number;
  driverNotes?: string;
  additionalCharging: boolean;
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
      price: number;
      quantity: number;
      selected: boolean;
    }>;
  };
  returnDropoff: {
    location: string;
    locationDetails?: { lat?: number; lon?: number };
    zone?: string;
  };
  returnPickups: Array<{
    location: string;
    locationDetails?: { lat?: number; lon?: number };
    zone?: string;
  }>;
}

interface ConfirmationProps {
  bookingData: BookingData;
  goToPrevStep: () => void;
  goToNextStep?: () => void;
  showAlert: (alert: {
    title: string;
    description: string;
    type: "success" | "error";
    onConfirm?: () => void;
  }) => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({
  bookingData,
  goToPrevStep,
  goToNextStep = () => {},
  showAlert,
}) => {
  // const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [, /*bookingReference*/ setBookingReference] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const [paymentType, setPaymentType] = useState<"card" | "cash">(
    bookingData.paymentType
  );
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const [priceDetails /*setPriceDetails*/] = useState({
    basePrice: bookingData.totalPrice,
    additionalServicesPrice: 0,
    paymentMethodFee: 0,
    totalPrice: bookingData.totalPrice,
  });

  const handlePaymentSuccess = (paymentIntentId: string) => {
    console.log("Payment succeeded with ID:", paymentIntentId);
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
  };

  // Process final booking submission
  const handleCreateBooking = async () => {
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
          name: bookingData.passengerName,
          count: parseInt(bookingData.passengerCount) || 1,
        },
        contact: {
          phone: bookingData.phoneNumber,
          email: bookingData.email,
          sendSmsToEmail: bookingData.sendSmsToEmail,
        },
        payment: {
          type: bookingData.paymentType,
          miles: bookingData.returnBooking
            ? (
                parseFloat(bookingData.miles) +
                parseFloat(bookingData.returnMiles || "0")
              ).toFixed(2)
            : bookingData.miles,
          price: bookingData.totalPrice,
        },
        driverNotes: bookingData.driverNotes,
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

      const processBookingConfirmation = async () => {
        // Uncomment and update for real API call
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/booking/addbooking`,
          formattedBookingData
        );

        console.log("Booking response:", response.data);

        // Simulate a successful booking by generating a random reference
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
      };

      if (paymentType === "card") {
        setShowPaymentModal(true);
        // Simulate payment processing
        setTimeout(() => {
          setShowPaymentModal(false);
          processBookingConfirmation();
        }, 3000);
      } else {
        processBookingConfirmation();
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

  // Handle redirection to bookings page
  const handleViewBookings = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (bookingComplete && countdown === 0) {
      handleViewBookings();
    }
  }, [countdown, bookingComplete]);

  // Format date for display
  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <>
      {bookingComplete ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Stripe Payment Component - Show only when card payment is selected */}
          {paymentType === "card" && (
            <div className="p-6 mx-auto mb-6 bg-white shadow-md rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Payment Details
                </h2>
                <div className="flex items-center">
                  <span className="mr-2 text-sm text-gray-500">
                    Secure Payment
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>

              {isProcessingPayment ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-12 h-12 mb-4 border-b-2 border-blue-600 rounded-full animate-spin"></div>
                  <p className="text-gray-600">Processing your payment...</p>
                </div>
              ) : (
                <>
                  <div className="p-4 mb-6 border border-blue-100 rounded-lg bg-blue-50">
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600 mr-2 mt-0.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                      <p className="text-sm text-blue-800">
                        Your card will be charged £
                        {priceDetails?.basePrice || 0} after confirming payment
                        details
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <StripePaymentWrapper
                      amount={Math.round(priceDetails?.basePrice * 100)}
                      onSuccess={(result) => {
                        setIsProcessingPayment(true);
                        handlePaymentSuccess(result);
                      }}
                    />
                  </div>
                </>
              )}

              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => goToPrevStep()}
                  className="flex items-center px-6 py-2 text-gray-700 transition-colors border border-gray-300 rounded-md hover:bg-gray-50"
                  disabled={isProcessingPayment}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                  Back
                </button>

                {!isProcessingPayment && (
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1 text-gray-400"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Payments are secure and encrypted
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      ) : (
        <Card className="w-full max-w-6xl mx-auto overflow-hidden bg-white shadow-md rounded-xl">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
              {/* Right Column - Payment Method & Navigation */}
              <div className="space-y-6">
                {/* Payment Method Selection */}
                <div className="p-4 bg-white shadow-sm rounded-xl sm:p-6">
                  <h2 className="mb-4 text-xl font-semibold text-gray-800 sm:mb-6">
                    Payment Method
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-3xl font-semibold">
                      Total Price:{" "}
                      <span className="text-primary">
                        £ {bookingData.totalPrice}
                      </span>{" "}
                    </h2>
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
                        className="w-4 h-4 text-blue-500 sm:w-5 sm:h-5 focus:ring-blue-400"
                        checked={paymentType === "card"}
                        onChange={() => setPaymentType("card")}
                      />
                      <label
                        htmlFor="card-payment"
                        className="flex items-center w-full ml-3 cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-8 h-8 mr-3 text-blue-500 rounded-full sm:w-10 sm:h-10 bg-blue-50">
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
                          <p className="text-sm font-medium text-gray-800 sm:text-base">
                            Pay by card
                          </p>
                          <p className="text-xs text-gray-500 sm:text-sm">
                            Credit or debit card
                          </p>
                        </div>
                      </label>
                    </div>

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
                        className="w-4 h-4 text-blue-500 sm:w-5 sm:h-5 focus:ring-blue-400"
                        checked={paymentType === "cash"}
                        onChange={() => setPaymentType("cash")}
                      />
                      <label
                        htmlFor="cash-payment"
                        className="flex items-center w-full ml-3 cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-8 h-8 mr-3 text-green-500 rounded-full sm:w-10 sm:h-10 bg-green-50">
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
                          <p className="text-sm font-medium text-gray-800 sm:text-base">
                            Pay in cash
                          </p>
                          <p className="text-xs text-gray-500 sm:text-sm">
                            Pay directly to driver
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={goToPrevStep}
                    className="flex items-center"
                    disabled={isSubmitting}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                    Back
                  </Button>
                  <Button
                    className="w-full px-6 py-6 md:px-8 bg-[#000000] text-white font-medium rounded-md hover:bg-gray-800 transition-colors text-md md:text-base"
                    onClick={async () => {
                      const bookingSuccess = await handleCreateBooking();
                      if (bookingSuccess) {
                        if (paymentType === "card") {
                          goToNextStep();
                        } else if (paymentType === "cash") {
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
                      }
                    }}
                  >
                    Confirm and Book
                  </Button>
                </div>
              </div>
            </div>

            {/* Payment Modal */}
            {showPaymentModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2.5 }}
                  className="w-full max-w-md p-6 mx-4 bg-white rounded-xl"
                >
                  <div className="mb-6 text-center">
                    <CreditCard
                      className="w-10 h-10 mx-auto mb-4 text-blue-600"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-bold text-gray-800">
                      Processing Payment
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Please wait while we process your payment...
                    </p>
                  </div>

                  <div className="flex justify-center mb-6">
                    <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5 }}
                        className="h-full bg-blue-600"
                      ></motion.div>
                    </div>
                  </div>

                  <div className="text-sm text-center text-gray-500">
                    <p>Amount: £{bookingData.totalPrice}</p>
                    <p>Do not close this window</p>
                  </div>
                </motion.div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Confirmation;
