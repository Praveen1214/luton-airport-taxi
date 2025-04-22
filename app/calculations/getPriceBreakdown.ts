// app/calculations/getPriceBreakdown.ts
import { calculateDistanceBasedPrice }     from "./distanceBasePrice";
import { tryGetFixedPrice }                from "./fixedPrice";
import { calculateBookingNightSurcharge }  from "./nightCharge";
import { calculateHolidaySurcharge }       from "./holidayCharge";
import { calculateParkingChargeForRoute }  from "./parkingCharges";
import { calculateAdditionalCharges }      from "./additionalCharge";
import { getPaymentMethodCharges }         from "./paymentMethodCharges";
import { calculateReturnCharge }           from "./returnCharge";

/** Shape of the data your React component will render */
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

/**
 * Build a full price breakdown.
 * Pass the **same arguments** you currently forward to `calculateTotalPrice`.
 */
export function getPriceBreakdown(
  distanceSlots        : unknown[],
  miles                : number,
  vehicleType          : string,
  pickups              : { location: string; zone: string }[],
  dropoff              : { location: string; zone: string },
  fixedPriceList       : unknown[],
  nightSurchargeSettings: unknown,
  travelDate           : Date | null,
  surcharges           : unknown[],
  parkingCharges       : unknown[],
  additionalChargeData : unknown,
  additionalSelection  : {
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
  additionalCharging   : boolean,
  paymentType          : string,
  returnBooking        : boolean,
  returnPickups        : unknown[],
  returnDropoff        : unknown,
  returnMiles          : number,
  returnDate           : Date | null
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

  /* ----------  fixed or base price ---------- */
  const fixedPrice = tryGetFixedPrice(pickups, dropoff, vehicleType,   fixedPriceList ?? [] 
  );

  if (fixedPrice !== null) {
    bd.baseOrFixed = parseFloat(fixedPrice.toFixed(2));
  } else {
    const base = calculateDistanceBasedPrice(distanceSlots, miles, vehicleType);
    bd.baseOrFixed = parseFloat(base.toFixed(2));
  }
  let running = bd.baseOrFixed;

  /* ----------  night surcharge ---------- */
  const afterNight = calculateBookingNightSurcharge(
    running, nightSurchargeSettings, travelDate, vehicleType, false
  );
  bd.night  = parseFloat((afterNight - running).toFixed(2));
  running   = afterNight;

  /* ----------  holiday surcharge ---------- */
  const afterHoliday = calculateHolidaySurcharge(
    running, surcharges, travelDate, false
  );
  bd.holiday = parseFloat((afterHoliday - running).toFixed(2));
  running    = afterHoliday;

  /* ----------  parking charge ---------- */
  bd.parking = calculateParkingChargeForRoute(parkingCharges, pickups, dropoff);
  running   += bd.parking;

  /* ----------  payment method fee ---------- */
  bd.paymentFee = getPaymentMethodCharges(paymentType, running);
  running      += bd.paymentFee;

  /* ----------  additional items ---------- */
  if (additionalCharging) {
    bd.additional = calculateAdditionalCharges(additionalChargeData, additionalSelection);
    running      += bd.additional;
  }

  /* ----------  return leg ---------- */
  if (returnBooking) {
    bd.returnLeg = calculateReturnCharge(
      returnBooking, returnPickups, returnDropoff, returnMiles, returnDate,
      vehicleType, fixedPriceList, distanceSlots, nightSurchargeSettings,
      surcharges, parkingCharges
    );
    running += bd.returnLeg;
  }

  bd.total = parseFloat(running.toFixed(2));
  return bd;
}
