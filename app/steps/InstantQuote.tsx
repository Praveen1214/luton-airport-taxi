"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  MapPin,
  ArrowRight,
  Plus,
  X,
  ArrowRightLeft,
  User2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { Select, SelectTrigger } from "@radix-ui/react-select";
import { SelectContent, SelectValue } from "@/components/ui/select";
import { SelectItem } from "@/components/ui/select";

const InstantQuote = ({
  bookingData,
  updateBookingData,
  zones,
  goToNextStep,
  showAlert,
}) => {
  const pickupRefs = useRef([]);
  const dropoffRef = useRef(null);
  const returnPickupRefs = useRef([]);
  const returnDropoffRef = useRef(null);

  const [localData, setLocalData] = useState({
    pickups: bookingData.pickups,
    dropoff: bookingData.dropoff,
    selectedDate: bookingData.selectedDate,
    returnBooking: bookingData.returnBooking,
    returnPickups: bookingData.returnPickups,
    returnDropoff: bookingData.returnDropoff,
    returnSelectedDate: bookingData.returnSelectedDate,
  });

  const updateLocalData = (newData) => {
    setLocalData((prev) => ({ ...prev, ...newData }));
  };

  // Load Google Maps script & initialize Autocomplete
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Autocomplete for each pickup
      localData.pickups.forEach((_, index) => {
        if (pickupRefs.current[index]) {
          const autocomplete = new google.maps.places.Autocomplete(
            pickupRefs.current[index],
            { types: ["geocode"], componentRestrictions: { country: "gb" } }
          );
          autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            handlePickupSelect(place, index);
          });
        }
      });

      // Autocomplete for dropoff
      if (dropoffRef.current) {
        const autocomplete = new google.maps.places.Autocomplete(
          dropoffRef.current,
          { types: ["geocode"], componentRestrictions: { country: "gb" } }
        );
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          handleDropoffSelect(place);
        });
      }

      // Autocomplete for return pickups
      if (localData.returnBooking) {
        localData.returnPickups.forEach((_, index) => {
          if (returnPickupRefs.current[index]) {
            const autocomplete = new google.maps.places.Autocomplete(
              returnPickupRefs.current[index],
              { types: ["geocode"], componentRestrictions: { country: "gb" } }
            );
            autocomplete.addListener("place_changed", () => {
              const place = autocomplete.getPlace();
              handleReturnPickupSelect(place, index);
            });
          }
        });

        // Autocomplete for return dropoff
        if (returnDropoffRef.current) {
          const autocomplete = new google.maps.places.Autocomplete(
            returnDropoffRef.current,
            { types: ["geocode"], componentRestrictions: { country: "gb" } }
          );
          autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            handleReturnDropoffSelect(place);
          });
        }
      }
    };

    return () => {
      document.body.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localData.pickups, localData.returnPickups, localData.returnBooking]);

  // Haversine formula to compute distance in meters
  function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371000; // Earth's radius in meters
    const toRad = (val) => (val * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  // Determine zone for lat/lon
  function getZoneForLocation(lat, lon, zoneList) {
    for (const z of zoneList) {
      const distance = haversineDistance(lat, lon, z.center.lat, z.center.lng);
      if (distance <= z.radius) {
        return z.name;
      }
    }
    return "zone not found";
  }

  // Handle pickup selection
  const handlePickupSelect = (place, index) => {
    if (!place.geometry) return;

    const locationDetails = {
      name: place.formatted_address || "",
      lat: place.geometry.location?.lat() || 0,
      lon: place.geometry.location?.lng() || 0,
    };

    const zoneName = getZoneForLocation(
      locationDetails.lat,
      locationDetails.lon,
      zones
    );

    updateLocalData({
      pickups: localData.pickups.map((pickup, i) =>
        i === index
          ? {
              ...pickup,
              location: locationDetails.name,
              locationDetails,
              zone: zoneName,
            }
          : pickup
      ),
    });
  };

  // Handle dropoff selection
  const handleDropoffSelect = (place) => {
    if (!place.geometry) return;

    const locationDetails = {
      name: place.formatted_address || "",
      lat: place.geometry.location?.lat() || 0,
      lon: place.geometry.location?.lng() || 0,
    };

    const zoneName = getZoneForLocation(
      locationDetails.lat,
      locationDetails.lon,
      zones
    );

    updateLocalData({
      dropoff: {
        ...localData.dropoff,
        location: locationDetails.name,
        locationDetails,
        zone: zoneName,
      },
    });
  };

  // Handle return pickup selection
  const handleReturnPickupSelect = (place, index) => {
    if (!place.geometry) return;

    const locationDetails = {
      name: place.formatted_address || "",
      lat: place.geometry.location?.lat() || 0,
      lon: place.geometry.location?.lng() || 0,
    };

    const zoneName = getZoneForLocation(
      locationDetails.lat,
      locationDetails.lon,
      zones
    );

    updateLocalData({
      returnPickups: localData.returnPickups.map((pickup, i) =>
        i === index
          ? {
              ...pickup,
              location: locationDetails.name,
              locationDetails,
              zone: zoneName,
            }
          : pickup
      ),
    });
  };

  // Handle return dropoff selection
  const handleReturnDropoffSelect = (place) => {
    if (!place.geometry) return;

    const locationDetails = {
      name: place.formatted_address || "",
      lat: place.geometry.location?.lat() || 0,
      lon: place.geometry.location?.lng() || 0,
    };

    const zoneName = getZoneForLocation(
      locationDetails.lat,
      locationDetails.lon,
      zones
    );

    updateLocalData({
      returnDropoff: {
        ...localData.returnDropoff,
        location: locationDetails.name,
        locationDetails,
        zone: zoneName,
      },
    });
  };

  // Convert meters to miles
  function metersToMiles(m) {
    return m / 1609.344;
  }

  // Calculate distance for outbound journey
  async function calculateTotalDistance() {
    if (
      !localData.pickups.length ||
      !localData.pickups[0].locationDetails ||
      !localData.dropoff.locationDetails
    )
      return;

    const origin = {
      lat: localData.pickups[0].locationDetails.lat,
      lng: localData.pickups[0].locationDetails.lon,
    };

    const waypoints = localData.pickups.slice(1).map((p) => ({
      location: { lat: p.locationDetails?.lat, lng: p.locationDetails?.lon },
      stopover: true,
    }));

    const destination = {
      lat: localData.dropoff.locationDetails.lat,
      lng: localData.dropoff.locationDetails.lon,
    };

    try {
      const directionsService = new google.maps.DirectionsService();
      const response = await directionsService.route({
        origin,
        destination,
        waypoints,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      if (response?.routes?.length) {
        const route = response.routes[0];
        let totalMeters = 0;
        route.legs.forEach((leg) => {
          totalMeters += leg.distance?.value || 0;
        });

        const miles = metersToMiles(totalMeters).toFixed(2);
        updateBookingData({ miles });
      }
    } catch (err) {
      console.error("Directions request failed:", err);
    }
  }

  // Calculate distance for return journey
  async function calculateReturnDistance() {
    if (
      !localData.returnPickups.length ||
      !localData.returnPickups[0].locationDetails ||
      !localData.returnDropoff.locationDetails
    ) {
      return;
    }

    const origin = {
      lat: localData.returnPickups[0].locationDetails.lat,
      lng: localData.returnPickups[0].locationDetails.lon,
    };

    const waypoints = localData.returnPickups.slice(1).map((p) => ({
      location: { lat: p.locationDetails?.lat, lng: p.locationDetails?.lon },
      stopover: true,
    }));

    const destination = {
      lat: localData.returnDropoff.locationDetails.lat,
      lng: localData.returnDropoff.locationDetails.lon,
    };

    try {
      const directionsService = new google.maps.DirectionsService();
      const response = await directionsService.route({
        origin,
        destination,
        waypoints,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      if (response?.routes?.length) {
        const route = response.routes[0];
        let totalMeters = 0;
        route.legs.forEach((leg) => {
          totalMeters += leg.distance?.value || 0;
        });

        const returnMiles = metersToMiles(totalMeters).toFixed(2);
        updateBookingData({ returnMiles });
      }
    } catch (err) {
      console.error("Return directions request failed:", err);
    }
  }

  // Recompute distances if relevant data changes
  useEffect(() => {
    if (
      typeof google !== "undefined" &&
      google.maps &&
      localData.pickups.length &&
      localData.pickups[0].locationDetails &&
      localData.dropoff.locationDetails
    ) {
      calculateTotalDistance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localData.pickups, localData.dropoff]);

  useEffect(() => {
    if (
      typeof google !== "undefined" &&
      google.maps &&
      localData.returnBooking &&
      localData.returnPickups.length &&
      localData.returnPickups[0].locationDetails &&
      localData.returnDropoff.locationDetails
    ) {
      calculateReturnDistance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    localData.returnPickups,
    localData.returnDropoff,
    localData.returnBooking,
  ]);

  // Add/remove pickup fields
  // const addPickupLocation = () => {
  //   updateLocalData({
  //     pickups: [
  //       ...localData.pickups,
  //       {
  //         id: localData.pickups.length + 1,
  //         location: "",
  //         locationDetails: null,
  //         zone: "",
  //       },
  //     ],
  //   });
  // };

  const removePickupLocation = (index) => {
    if (localData.pickups.length > 1) {
      updateLocalData({
        pickups: localData.pickups.filter((_, i) => i !== index),
      });
    }
  };

  // Add/remove return pickup fields
  const addReturnPickupLocation = () => {
    updateLocalData({
      returnPickups: [
        ...localData.returnPickups,
        {
          id: localData.returnPickups.length + 1,
          location: "",
          locationDetails: null,
          zone: "",
        },
      ],
    });
  };

  const removeReturnPickupLocation = (index) => {
    if (localData.returnPickups.length > 1) {
      updateLocalData({
        returnPickups: localData.returnPickups.filter((_, i) => i !== index),
      });
    }
  };

  // Toggle return booking
  const toggleReturnBooking = (checked) => {
    updateLocalData({
      returnBooking: checked,
      returnSelectedDate: checked
        ? localData.returnSelectedDate || new Date()
        : null,
    });
  };

  // Validate & go next
  const handleSearch = () => {
    if (!localData.pickups[0].location) {
      showAlert({
        title: "Pickup Location Required",
        description: "Please enter at least one pickup location.",
        type: "warning",
      });
      return;
    }

    if (!localData.dropoff.location) {
      showAlert({
        title: "Dropoff Location Required",
        description: "Please enter a dropoff location.",
        type: "warning",
      });
      return;
    }

    if (!localData.selectedDate) {
      showAlert({
        title: "Date & Time Required",
        description: "Please select a date and time for your journey.",
        type: "warning",
      });
      return;
    }

    if (localData.returnBooking && !localData.returnSelectedDate) {
      showAlert({
        title: "Return Date & Time Required",
        description: "Please select a date and time for your return journey.",
        type: "warning",
      });
      return;
    }

    // Update parent
    updateBookingData({
      pickups: localData.pickups,
      dropoff: localData.dropoff,
      selectedDate: localData.selectedDate,
      returnBooking: localData.returnBooking,
      returnPickups: localData.returnPickups,
      returnDropoff: localData.returnDropoff,
      returnSelectedDate: localData.returnSelectedDate,
    });

    goToNextStep();
  };

  return (
<div className="space-y-6 px-3 sm:px-4 py-4 sm:space-y-6 md:space-y-8 lg:px-6">
{/* Example heading & subheading (optional) */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Book your airport taxi
        </h1>
        <p className="text-sm text-gray-500">
          Easy airport transfers to and from your accommodation
        </p>
      </div>

      {/* Journey Type Radio Buttons */}
      <div className="flex items-center space-x-6">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="journeyType"
            checked={!localData.returnBooking}
            onChange={() => toggleReturnBooking(false)}
            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700">One-Way</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="journeyType"
            checked={localData.returnBooking}
            onChange={() => toggleReturnBooking(true)}
            className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700">Return</span>
        </label>
      </div>

      {/* BOOKING BAR */}

      <div className="flex flex-col md:flex-row border-2 border-yellow-400 rounded-md overflow-hidden">
        {/* Pickup(s) */}
        <div className="min-w-[180px] flex-grow p-3">
          <div className="space-y-2">
            {localData.pickups.map((pickup, index) => (
              <div key={pickup.id} className="flex items-center gap-2">
                <Input
                  ref={(el) => (pickupRefs.current[index] = el)}
                  type="text"
                  placeholder="Enter pick-up location"
                  value={pickup.location}
                  onChange={(e) =>
                    updateLocalData({
                      pickups: localData.pickups.map((p, i) =>
                        i === index ? { ...p, location: e.target.value } : p
                      ),
                    })
                  }
                  className="border-2 p-2 bg-white text-gray-800 text-sm focus:ring-0 placeholder-gray-400 w-full"
                />
                <ArrowRightLeft className="w-4 h-4 text-gray-400 mx-2 hidden md:block" />

                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removePickupLocation(index)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                    aria-label="Remove pickup location"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dropoff */}
        <div className="min-w-[180px] flex-grow p-3 md:border-l border-gray-200">
          <Input
            ref={dropoffRef}
            type="text"
            placeholder="Enter destination"
            value={localData.dropoff.location}
            onChange={(e) =>
              updateLocalData({
                dropoff: {
                  ...localData.dropoff,
                  location: e.target.value,
                },
              })
            }
            className="border-2 bg-white p-2 text-gray-800 text-sm focus:ring-0 placeholder-gray-400 w-full"
          />
        </div>

        {/* Outbound Date & Time */}
        <div className="min-w-[150px] p-3 md:border-l border-gray-200">
          {/* <span className="text-sm font-semibold text-gray-700 mb-2 block">
            {localData.returnBooking ? "Outbound" : "Date&Time"}
          </span> */}
          <DatePicker
            selected={localData.selectedDate}
            onChange={(date) => updateLocalData({ selectedDate: date })}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="EEE, MMM d - h:mm aa"
            placeholderText="Select date/time"
            className="border-2 p-2 text-gray-800 text-sm focus:ring-0 placeholder-gray-400 w-full rounded-lg"
            minDate={new Date()}
          />
        </div>

        {/* If Return is selected, show a quick "Add return" label or a second date/time inline (optional) */}
        {localData.returnBooking && (
          <div className="min-w-[150px] p-3 md:border-l border-gray-200">
            
            <DatePicker
              selected={localData.returnSelectedDate}
              onChange={(date) => updateLocalData({ returnSelectedDate: date })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="EEE, MMM d - h:mm aa"
              placeholderText="Add a return"
              className="border-2 p-2 text-gray-800 text-sm focus:ring-0 placeholder-gray-400 w-full rounded-lg"
              minDate={localData.selectedDate || new Date()}
            />
          </div>
        )}

        {/* Passengers selector */}
        <div className="p-3 md:border-l border-gray-200 md:w-32">
          <div className="flex items-center bg-white">
            <User2 className="w-4 h-4 text-gray-400 mr-2" />
            <Select defaultValue="2">
              <SelectTrigger className="p-2 text-gray-800 text-sm focus:ring-0 rounded-lg">
                <SelectValue placeholder="2" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <SelectItem
                    key={num}
                    value={num.toString()}
                    className="bg-white hover:bg-gray-100 w-full"
                  >
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Search button */}
        <div className="flex items-center p-2 md:p-3 rounded-xl ">
          <Button
            onClick={handleSearch}
            className="bg-[#000000] text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors h-full rounded-none"
          >
            Search
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* FULL RETURN JOURNEY SECTION (Optional):
          If you still need the expanded fields for multiple return pickups, etc.,
          you can show them here. */}
      {localData.returnBooking && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border border-gray-200 rounded-lg bg-gray-50 p-4"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Return Journey Details
          </h3>
          {/* Return Pickup(s) */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                Return Pickup
              </label>
              <Button
                variant="outline"
                size="sm"
                onClick={addReturnPickupLocation}
                className="text-blue-600 border-blue-600 hover:bg-blue-50 flex items-center"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Pickup
              </Button>
            </div>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {localData.returnPickups.map((pickup, index) => (
                <div
                  key={pickup.id}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center"
                >
                  <div className="sm:col-span-6">
                    <Input
                      ref={(el) => (returnPickupRefs.current[index] = el)}
                      type="text"
                      placeholder="Enter return pickup location"
                      value={pickup.location}
                      onChange={(e) =>
                        updateLocalData({
                          returnPickups: localData.returnPickups.map((p, i) =>
                            i === index ? { ...p, location: e.target.value } : p
                          ),
                        })
                      }
                      className="w-full border-gray-300 rounded-lg text-sm"
                    />
                  </div>

                  {index > 0 && (
                    <div className="sm:col-span-1 flex justify-end">
                      <button
                        type="button"
                        onClick={() => removeReturnPickupLocation(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                        aria-label="Remove return pickup location"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Return Dropoff */}
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center mb-2">
              <MapPin className="w-4 h-4 mr-2 text-blue-600" />
              Return Dropoff
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
              <div className="sm:col-span-6">
                <Input
                  ref={returnDropoffRef}
                  type="text"
                  placeholder="Enter return dropoff location"
                  value={localData.returnDropoff.location}
                  onChange={(e) =>
                    updateLocalData({
                      returnDropoff: {
                        ...localData.returnDropoff,
                        location: e.target.value,
                      },
                    })
                  }
                  className="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default InstantQuote;
