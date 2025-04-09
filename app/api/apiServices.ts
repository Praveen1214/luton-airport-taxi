// apiServices.js
import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL;

/**
 * Fetch all available zones
 * @returns {Promise<Object>} - Zone data
 */
export const fetchZones = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/zone`);
    return response.data;
  } catch (error) {
    console.error("Error fetching zones:", error);
    return { data: [] };
  }
};

/**
 * Fetch all distance-based pricing rules
 * @returns {Promise<Array>} - Array of pricing rules
 */
export const fetchAllPricing = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/pricing`);

    console.log("Pricing",response.data);
    return response.data|| [];

  } catch (error) {
    console.error("Error fetching pricing data:", error);
    return [];
  }
};

/**
 * Fetch fixed price rules between specific locations
 * @returns {Promise<Array>} - Array of fixed price rules
 */
export const fetchFixedPrices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/fixed-prices`);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching fixed prices:", error);
    return [];
  }
};

/**
 * Fetch holiday surcharge settings
 * @returns {Promise<Array>} - Array of holiday surcharge rules
 */
export const fetchHolidaySurcharges = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/holiday-surcharges`
    );
    return response.data || [];
  } catch (error) {
    console.error("Error fetching holiday surcharges:", error);
    return [];
  }
};

/**
 * Fetch night surcharge settings
 * @returns {Promise<Object>} - Night surcharge configuration
 */
export const fetchNightSurchargeSettings = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/night-surcharge`
    );
    return response.data || null;
  } catch (error) {
    console.error("Error fetching night surcharges:", error);
    return null;
  }
};

/**
 * Fetch parking charge settings
 * @returns {Promise<Array>} - Array of parking charge rules
 */
export const fetchParkingCharges = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/parking-charges`);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching parking charges:", error);
    return [];
  }
};

/**
 * Fetch additional charges
 * @returns {Promise<Object>} - Additional charges configuration
 */
export const fetchAdditionalCharges = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/additional-charges`
    );
    return response.data || null;
  } catch (error) {
    console.error("Error fetching additional charges:", error);
    return null;
  }
};

/**
 * Fetch available vehicles
 * @returns {Promise<Array>} - Array of vehicle types
 */
export const fetchVehicles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/vehicles`);
    console.log("vehi",response.data);

    return response.data || [];
  } catch (error) {
    console.error("Error fetching vehicles:", error);
  }
};

/**
 * Create a new booking
 * @param {Object} bookingData - Booking data
 * @returns {Promise<Object>} - Created booking response
 */
export const createBooking = async (bookingData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/booking/addbooking`,
      bookingData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};
