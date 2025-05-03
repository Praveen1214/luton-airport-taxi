// calculations/nightCharge.ts

/**
 * Applies night surcharge factor if travel time falls in any active night-surcharge window.
 */
export function calculateBookingNightSurcharge(
  basePrice: number,
  nightSurchargeSettings: unknown,
  travelDate: Date | null,
  vehicleType: string,
  returnBooking: boolean
): number {
  if (!travelDate) return basePrice;
  if (!nightSurchargeSettings?.isActive) return basePrice;

  const surchargesArray = nightSurchargeSettings.surcharges || [];
  if (!surchargesArray.length) return basePrice;

  let finalPrice = basePrice;
  const bookingDay = travelDate.toLocaleString("en-GB", { weekday: "short" });
  const bookingHour = travelDate.getHours();
  const bookingMin = travelDate.getMinutes();
  const bookingTimeOfDay = bookingHour * 60 + bookingMin; // e.g. 23:50 => 1430

  function parseTimeToMinutes(timeStr: string): number {
    const [hh, mm] = timeStr.split(":");
    const h = parseInt(hh, 10) || 0;
    const m = parseInt(mm, 10) || 0;
    return h * 60 + m;
  }

  for (const ns of surchargesArray) {
    // Must match the day of week
    if (!ns.days.includes(bookingDay)) continue;

    // Must match vehicle (or be "All")
    if (ns.vehicle !== "All" && ns.vehicle !== vehicleType) continue;

    const start = parseTimeToMinutes(ns.startTime);
    const end = parseTimeToMinutes(ns.endTime);
    const factor = parseFloat(ns.surchargeFactor) || 1;

    let isInRange = false;
    if (start < end) {
      // e.g. 22:00 - 06:00 but same day
      if (bookingTimeOfDay >= start && bookingTimeOfDay < end) {
        isInRange = true;
      }
    } else {
      // e.g. 22:00 => 05:00 next day
      if (bookingTimeOfDay >= start || bookingTimeOfDay < end) {
        isInRange = true;
      }
    }

    if (isInRange) {
      finalPrice *= factor;
      if (!returnBooking) {
        console.log(
          "Night surcharge price: ",
          factor + " * ",
          basePrice.toFixed(2) + " = ",
          finalPrice.toFixed(2)
        );
      } else {
        // console.log(
        //   "Return Night surcharge price: ",
        //   factor + " * ",
        //   basePrice.toFixed(2) + " = ",
        //   finalPrice.toFixed(2)
        // );
      }
    }
    if (!isInRange) {
      // console.log("No night surcharge applied.");
    }
  }
  return finalPrice;
}
