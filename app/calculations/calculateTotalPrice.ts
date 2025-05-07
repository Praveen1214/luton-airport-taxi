// calculations/calculateTotalPrice.ts
import { calculateDistanceBasedPrice } from "./distanceBasePrice";
import { tryGetFixedPrice } from "./fixedPrice";
import { calculateBookingNightSurcharge } from "./nightCharge";
import { calculateHolidaySurcharge } from "./holidayCharge";
import { calculateParkingChargeForRoute } from "./parkingCharges";
import { calculateAdditionalCharges } from "./additionalCharge";
import { getPaymentMethodCharges } from "./paymentMethodCharges";
import { calculateReturnCharge } from "./returnCharge";

export function calculateTotalPrice(
  distanceSlots: unknown[],
  miles: number,
  vehicleType: string,
  pickups: { location: string; zone: string }[],
  dropoff: { location: string; zone: string },
  fixedPriceList: unknown[],
  nightSurchargeSettings: unknown,
  travelDate: Date | null,
  surcharges: unknown[],
  parkingCharges: unknown[],
  additionalChargeData: unknown,
  additionalSelection: {
    boosterSeat: number;
    childSeat: number;
    infantSeat: number;
    meetAndGreet: number;
    waitingTimeAfterLanding: number;
    waypoint: number;
    wheelchair: number;
    additionalOptions: Array<{
      _id: string;
      name: string;
      price: number;
      selected: boolean;
      quantity: number;
    }>;
  },
  additionalCharging: boolean,
  paymentType: string,
  returnBooking: boolean,
  returnPickups: unknown[],
  returnDropoff: unknown,
  returnMiles: number,
  returnDate: Date | null
) {
  let totalPrice = 0;
  let basePrice = 0; // ✅ NEW: store base price separately

  const fixedPrice = tryGetFixedPrice(
    pickups,
    dropoff,
    vehicleType,
    fixedPriceList
  );

  if (fixedPrice !== null) {
    console.log("Fixed price: ", fixedPrice.toFixed(2));
    basePrice = parseFloat(fixedPrice.toFixed(2)); // ✅ store it
    totalPrice = basePrice;
  } else {
    const calculatedBase = calculateDistanceBasedPrice(
      distanceSlots,
      miles,
      vehicleType
    );
    basePrice = parseFloat(calculatedBase.toFixed(2)); // ✅ store it
    totalPrice = basePrice;
    // console.log("Base price: ", basePrice.toFixed(2));
  }

  const nightSurchargePrice = calculateBookingNightSurcharge(
    totalPrice,
    nightSurchargeSettings,
    travelDate,
    vehicleType,
    false
  );
  totalPrice = parseFloat(nightSurchargePrice.toFixed(2));

  // ✅ FIXED: Use basePrice (not nightSurchargePrice) for holiday calculation
  const holidaySurchargePrice = calculateHolidaySurcharge(
    basePrice, // ✅ corrected line
    surcharges,
    travelDate,
    false
  );
  totalPrice += parseFloat((holidaySurchargePrice - basePrice).toFixed(2)); // ✅ add only the surcharge portion

  const parkingCharge = calculateParkingChargeForRoute(
    parkingCharges,
    pickups,
    dropoff,
    totalPrice,
    false
  );
  totalPrice =
    parseFloat(totalPrice.toFixed(2)) + parseFloat(parkingCharge.toFixed(2));

  const paymentCharge = getPaymentMethodCharges(paymentType, totalPrice);
  totalPrice =
    parseFloat(totalPrice.toFixed(2)) + parseFloat(paymentCharge.toFixed(2));

  if (additionalCharging) {
    const additionalCharge = calculateAdditionalCharges(
      additionalChargeData,
      additionalSelection,
      totalPrice
    );
    totalPrice += parseFloat(additionalCharge.toFixed(2));
  }

  if (returnBooking) {
    const returnBasePrice = calculateReturnCharge(
      returnBooking,
      returnPickups,
      returnDropoff,
      returnMiles,
      returnDate,
      vehicleType,
      fixedPriceList,
      distanceSlots,
      nightSurchargeSettings,
      surcharges,
      parkingCharges
    );
    totalPrice += parseFloat(returnBasePrice.toFixed(2));
  }

  // console.log("Total price: ", totalPrice.toFixed(2));
  return totalPrice.toFixed(2);
}
