"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapPin, ArrowRightLeft, Calendar, Clock, Flag } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  // const removePickupLocation = (index) => {
  //   if (localData.pickups.length > 1) {
  //     updateLocalData({
  //       pickups: localData.pickups.filter((_, i) => i !== index),
  //     });
  //   }
  // };

  // // Add/remove return pickup fields
  // const addReturnPickupLocation = () => {
  //   updateLocalData({
  //     returnPickups: [
  //       ...localData.returnPickups,
  //       {
  //         id: localData.returnPickups.length + 1,
  //         location: "",
  //         locationDetails: null,
  //         zone: "",
  //       },
  //     ],
  //   });
  // };

  // const removeReturnPickupLocation = (index) => {
  //   if (localData.returnPickups.length > 1) {
  //     updateLocalData({
  //       returnPickups: localData.returnPickups.filter((_, i) => i !== index),
  //     });
  //   }
  // };

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
    <div className="w-full overflow-hidden bg-white border-2 rounded-lg border-gray-5">
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold"> Instant Quote </h2>
      </div>

      <div className="p-4 space-y-4">
        {/* Pickup Location */}
        <div>
          <div className="flex items-center px-4 py-3 border border-gray-200 rounded-lg">
            <MapPin className="w-5 h-5 mr-2 text-gray-500" />
            <input
              ref={(el) => (pickupRefs.current[0] = el)}
              type="text"
              placeholder="Pickup Location"
              value={localData.pickups[0].location}
              onChange={(e) =>
                updateLocalData({
                  pickups: localData.pickups.map((p, i) =>
                    i === 0 ? { ...p, location: e.target.value } : p
                  ),
                })
              }
              className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Dropoff Location */}
        <div>
          <div className="flex items-center px-4 py-3 border border-gray-200 rounded-lg">
            <Flag className="w-5 h-5 mr-2 text-gray-500" />
            <input
              ref={dropoffRef}
              type="text"
              placeholder="Dropoff Location"
              value={localData.dropoff.location}
              onChange={(e) =>
                updateLocalData({
                  dropoff: {
                    ...localData.dropoff,
                    location: e.target.value,
                  },
                })
              }
              className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Date & Time - in a row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center px-4 py-3 border border-gray-200 rounded-lg">
              <Calendar className="w-5 h-5 mr-2 text-gray-500" />
              <DatePicker
                selected={localData.selectedDate}
                onChange={(date) => updateLocalData({ selectedDate: date })}
                dateFormat="yyyy-MM-dd"
                placeholderText="Date"
                className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center px-4 py-3 border border-gray-200 rounded-lg">
              <Clock className="w-5 h-5 mr-2 text-gray-500" />
              <DatePicker
                selected={localData.selectedDate}
                onChange={(date) => updateLocalData({ selectedDate: date })}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Time"
                className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
              />
            </div>
          </div>
        </div>

        {/* Add Return & Via Row */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <button
              onClick={() => toggleReturnBooking(!localData.returnBooking)}
              className="flex items-center text-gray-3"
            >
              <ArrowRightLeft className="w-4 h-4 mr-1" />
              <span className="text-sm">Add Return</span>
            </button>
          </div>
          {/* <div className="flex items-center">
            <span className="mr-1 text-sm text-gray-500">Via</span>
            <div className="flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-200 rounded-full">
              <button className="text-lg font-medium text-gray-500">+</button>
            </div>
          </div> */}
        </div>

        {/* Return Journey Fields (conditional) */}
        {localData.returnBooking && (
          <div className="space-y-4">
            {/* Return Pickup Location */}
            <div>
              <div className="flex items-center px-4 py-3 border border-gray-200 rounded-lg">
                <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                <input
                  ref={(el) => (returnPickupRefs.current[0] = el)}
                  type="text"
                  placeholder="Return Pickup Location"
                  value={localData.returnPickups[0].location}
                  onChange={(e) =>
                    updateLocalData({
                      returnPickups: localData.returnPickups.map((p, i) =>
                        i === 0 ? { ...p, location: e.target.value } : p
                      ),
                    })
                  }
                  className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* Return Dropoff Location */}
            <div>
              <div className="flex items-center px-4 py-3 border border-gray-200 rounded-lg">
                <Flag className="w-5 h-5 mr-2 text-gray-500" />
                <input
                  ref={returnDropoffRef}
                  type="text"
                  placeholder="Return Dropoff Location"
                  value={localData.returnDropoff.location}
                  onChange={(e) =>
                    updateLocalData({
                      returnDropoff: {
                        ...localData.returnDropoff,
                        location: e.target.value,
                      },
                    })
                  }
                  className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* Return Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center px-4 py-3 border border-gray-200 rounded-lg">
                  <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                  <DatePicker
                    selected={localData.returnSelectedDate}
                    onChange={(date) =>
                      updateLocalData({ returnSelectedDate: date })
                    }
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Return Date"
                    minDate={localData.selectedDate || new Date()}
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center px-4 py-3 border border-gray-200 rounded-lg">
                  <Clock className="w-5 h-5 mr-2 text-gray-500" />
                  <DatePicker
                    selected={localData.returnSelectedDate}
                    onChange={(date) =>
                      updateLocalData({ returnSelectedDate: date })
                    }
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    placeholderText="Return Time"
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full py-3 text-white transition-colors rounded-lg bg-primary hover:bg-btn-hover"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default InstantQuote;
