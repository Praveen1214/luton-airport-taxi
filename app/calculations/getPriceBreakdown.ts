// app/calculations/getPriceBreakdown.ts

import { calculateDistanceBasedPrice }     from "./distanceBasePrice";
import { tryGetFixedPrice }                from "./fixedPrice";
import { calculateBookingNightSurcharge }  from "./nightCharge";
import { calculateHolidaySurcharge }       from "./holidayCharge";
import { calculateParkingChargeForRoute }  from "./parkingCharges";
import { calculateAdditionalCharges }      from "./additionalCharge";
import { getPaymentMethodCharges }         from "./paymentMethodCharges";
import { calculateReturnCharge }           from "./returnCharge";

export interface PriceBreakdown {
  baseOrFixed : number;
  night       : number;
  holiday     : number;
  parking     : number;
  additional  : number;
  paymentFee  : number;
  returnLeg   : number;
  total       : number;
}

export function getPriceBreakdown(
  distanceSlots          : unknown[],
  miles                  : number,
  vehicleType            : string,
  pickups                : { location: string; zone: string }[],
  dropoff                : { location: string; zone: string },
  fixedPriceList         : unknown[],
  nightSurchargeSettings : unknown,
  travelDate             : Date | null,
  surcharges             : unknown[],
  parkingCharges         : unknown[],
  additionalChargeData   : unknown,
  additionalSelection    : {
    boosterSeat   : number;
    childSeat     : number;
    infantSeat    : number;
    meetAndGreet  : number;
    waitingTimeAfterLanding: number;
    waypoint      : number;
    wheelchair    : number;
    additionalOptions: Array<{
      _id      : string;
      name     : string;
      price    : number;
      selected : boolean;
      quantity : number;
    }>;
  },
  additionalCharging     : boolean,
  paymentType            : string,
  returnBooking          : boolean,
  returnPickups          : unknown[],
  returnDropoff          : unknown,
  returnMiles            : number,
  returnDate             : Date | null
): PriceBreakdown {
  const bd: PriceBreakdown = {
    baseOrFixed : 0,
    night       : 0,
    holiday     : 0,
    parking     : 0,
    additional  : 0,
    paymentFee  : 0,
    returnLeg   : 0,
    total       : 0,
  };

  // Step 1: Base or Fixed Price
  const fixedPrice = tryGetFixedPrice(pickups, dropoff, vehicleType, fixedPriceList ?? []);
  const basePrice = fixedPrice !== null
    ? parseFloat(fixedPrice.toFixed(2))
    : parseFloat(calculateDistanceBasedPrice(distanceSlots, miles, vehicleType).toFixed(2));
  bd.baseOrFixed = basePrice;

  let running = basePrice;

  // Step 2: Night Surcharge (based on basePrice)
  const afterNight = calculateBookingNightSurcharge(
    basePrice,
    nightSurchargeSettings,
    travelDate,
    vehicleType,
    false
  );
  bd.night = parseFloat((afterNight - basePrice).toFixed(2));
  running = afterNight;

  // Step 3: Holiday Surcharge (also based ONLY on basePrice)
  const afterHoliday = calculateHolidaySurcharge(
    basePrice,
    surcharges,
    travelDate,
    false
  );
  bd.holiday = parseFloat((afterHoliday - basePrice).toFixed(2));
  running += bd.holiday;

  // Step 4: Parking Charges
  bd.parking = calculateParkingChargeForRoute(parkingCharges, pickups, dropoff);
  running += bd.parking;

  // Step 5: Payment Method Fee
  bd.paymentFee = getPaymentMethodCharges(paymentType, running);
  running += bd.paymentFee;

  // Step 6: Additional Charges (if applicable)
  if (additionalCharging) {
    bd.additional = calculateAdditionalCharges(additionalChargeData, additionalSelection);
    running += bd.additional;
  }

  // Step 7: Return Leg (if applicable)
  if (returnBooking) {
    bd.returnLeg = calculateReturnCharge(
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
    running += bd.returnLeg;
  }

  // Final Total
  bd.total = parseFloat(running.toFixed(2));
  return bd;
}
