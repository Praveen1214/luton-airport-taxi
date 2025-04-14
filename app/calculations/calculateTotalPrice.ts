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
  
  const fixedPrice = tryGetFixedPrice(
    pickups,
    dropoff,
    vehicleType,
    fixedPriceList
  );

  if (fixedPrice !== null) {
    console.log("Fixed price: ", fixedPrice.toFixed(2));
    totalPrice = parseFloat(fixedPrice.toFixed(2));
    // return Math.round(fixedPrice * 100) / 100;
  } else {
    // Compute base price from the distance-based logic
    const basePrice = calculateDistanceBasedPrice(

      distanceSlots,
      miles,
      vehicleType
    );
    totalPrice = parseFloat(basePrice.toFixed(2));
    console.log("Base price: ", basePrice.toFixed(2));
    // return Math.round(basePrice * 100) / 100;
  }

  const nightSurchargePrice = calculateBookingNightSurcharge(
    totalPrice,
    nightSurchargeSettings,
    travelDate,
    vehicleType,
    false
  );
  totalPrice = parseFloat(nightSurchargePrice.toFixed(2));

  const holidaySurchargePrice = calculateHolidaySurcharge(
    totalPrice,

    surcharges,
    travelDate,
    false
  );
  totalPrice = parseFloat(holidaySurchargePrice.toFixed(2));

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
    totalPrice =
      parseFloat(totalPrice.toFixed(2)) +
      parseFloat(additionalCharge.toFixed(2));
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
      parkingCharges,
    );
    totalPrice =
      parseFloat(totalPrice.toFixed(2)) + parseFloat(returnBasePrice);
  }

  console.log("Total price: ", totalPrice.toFixed(2));
  return totalPrice.toFixed(2);
}
