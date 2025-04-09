// calculations/returnDistance.ts
import { tryGetFixedPrice } from "./fixedPrice";
import { calculateDistanceBasedPrice } from "./distanceBasePrice";
import { calculateBookingNightSurcharge } from "./nightCharge";
import { calculateHolidaySurcharge } from "./holidayCharge";
import { calculateParkingChargeForRoute } from "./parkingCharges";
export function calculateReturnCharge(
  returnBooking: boolean,
  returnPickups: [],
  returnDropoff: unknown,
  returnMiles: number,
  returnDate: Date | null,
  vehicleType: string,
  fixedPriceList:[],
  distanceSlots: ""[],
  nightSurchargeSettings: "",
  surcharges: [],
  parkingCharges: []
) {
  let totalPrice = 0;
  const fixedPrice = tryGetFixedPrice(
    returnPickups,
    returnDropoff,
    vehicleType,
    fixedPriceList
  );

  if (fixedPrice !== null) {
    console.log("Return Fixed price: ", fixedPrice.toFixed(2));
    totalPrice = parseFloat(fixedPrice.toFixed(2));
    // return Math.round(fixedPrice * 100) / 100;
  } else {
    // Compute base price from the distance-based logic
    const basePrice = calculateDistanceBasedPrice(
      distanceSlots,
      returnMiles,
      vehicleType
    );
    totalPrice = parseFloat(basePrice.toFixed(2));
    console.log("Return Base price: ", basePrice.toFixed(2));
    // return Math.round(basePrice * 100) / 100;
  }

  const nightSurchargePrice = calculateBookingNightSurcharge(
    totalPrice,
    nightSurchargeSettings,
    returnDate,
    vehicleType,
    returnBooking
  );
  totalPrice = parseFloat(nightSurchargePrice.toFixed(2));

  const holidaySurchargePrice = calculateHolidaySurcharge(
    totalPrice,
    surcharges,
    returnDate,
    returnBooking
  );
  totalPrice = parseFloat(holidaySurchargePrice.toFixed(2));

  const parkingCharge = calculateParkingChargeForRoute(
    parkingCharges,
    returnPickups,
    returnDropoff,
    totalPrice,
    returnBooking
  );
  totalPrice =
    parseFloat(totalPrice.toFixed(2)) + parseFloat(parkingCharge.toFixed(2));

  return totalPrice.toFixed(2);
}
