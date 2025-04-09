// distanceBasePrice.ts

export function calculateDistanceBasedPrice(
  distanceSlots: [],      // the array you're currently sending
  milesNumber: number,       // total miles
  vehicleType: string        // e.g. "Access", "Executive", etc.
): number {
  // 1) Quick checks
  if (!distanceSlots?.length || !vehicleType || milesNumber <= 0) {
    return 0;
  }

  // 2) **Unwrap** if the first element is the top-level object containing a `.distanceSlots` array
  //    This avoids having to fix it in other files.
  if (
    distanceSlots.length === 1 &&
    Array.isArray(distanceSlots[0]?.distanceSlots)
  ) {
    distanceSlots = distanceSlots[0].distanceSlots;
  }

  let totalPrice = 0;

  // 3) Iterate over each slot in distanceSlots
  for (const slot of distanceSlots) {
    if (!slot?.distanceRange) {
      continue;
    }

    const { min, max } = slot.distanceRange;
    // If min/max aren’t numeric, skip
    if (typeof min !== "number" || typeof max !== "number") {
      continue;
    }

    // 4) Find the rate in categories based on vehicleType
    const rate = slot.categories?.[vehicleType];
    // If rate is 0, undefined, or null, skip
    if (!rate) {
      continue;
    }

    // 5) If entire journey is below this slot, we’re done
    if (milesNumber < min) {
      break;
    }

    // 6) Figure out how many miles fall within [min, max], clipped by milesNumber
    const distanceStart = Math.max(min, 0);
    const distanceEnd = Math.min(max, milesNumber);

    if (distanceEnd > distanceStart) {
      const distanceInRange = distanceEnd - distanceStart;
      totalPrice += distanceInRange * rate;
    }

    // 7) If we’ve already covered all requested miles, stop
    if (milesNumber <= max) {
      break;
    }
  }
  return totalPrice;
}
