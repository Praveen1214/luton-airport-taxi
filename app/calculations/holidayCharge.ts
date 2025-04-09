// calculations/holidayCharge.ts

/**
 * Applies holiday surcharges (Add or Multiply) if the trip date
 * falls within any holiday surcharge range.
 */
export function calculateHolidaySurcharge(
  basePrice: number,
  surcharges: [],
  travelDate: Date | null,
  returnBooking: boolean
): number {
  if (!travelDate || !surcharges || surcharges.length === 0) return basePrice;

  let finalPrice = basePrice;
  const bookingTime = travelDate.getTime();

  for (const sc of surcharges) {
    const fromDate = new Date(sc.from);
    const toDate = new Date(sc.to);

    if (bookingTime >= fromDate.getTime() && bookingTime <= toDate.getTime()) {
      const factorVal = parseFloat(sc.factorValue) || 1;
      if (sc.action === "Add") {
        finalPrice += factorVal;
        if (!returnBooking) {
          console.log(
            "Holiday surcharge price: ",
            factorVal + " + ",
            basePrice.toFixed(2) + " = ",
            finalPrice.toFixed(2)
          );
        } else {
          console.log(
            "Return Holiday surcharge price: ",
            factorVal + " + ",
            basePrice.toFixed(2) + " = ",
            finalPrice.toFixed(2)
          );
        }
      } else if (sc.action === "Multiply") {
        finalPrice *= factorVal;
        if (!returnBooking) {
          console.log(
            "Holiday surcharge price: ",
            factorVal + " * ",
            basePrice.toFixed(2) + " = ",
            finalPrice.toFixed(2)
          );
        } else {
          console.log(
            "Return Holiday surcharge price: ",
            factorVal + " * ",
            basePrice.toFixed(2) + " = ",
            finalPrice.toFixed(2)
          );
        }
      }
    } else {
      console.log("No holiday surcharge applied.");
      
    }
  }
  return finalPrice;
}
