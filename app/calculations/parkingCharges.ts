// calculations/parkingCharges.ts

/**
 * Calculates parking charges for either outbound or return route,
 * depending on the pickups & dropoff provided.
 */
export function calculateParkingChargeForRoute(
  parkingCharges: any[] = [], // ← default to empty array
  pickups: { location: string }[] = [],
  dropoff: { location: string } = { location: "" }
): number {
  let total = 0;

  if (!Array.isArray(parkingCharges)) {
    console.warn("Invalid parkingCharges passed to calculateParkingChargeForRoute");
    return 0;
  }

  for (const pc of parkingCharges) {
    if (pc.status !== "Active") continue;

    const chargeAddresses: string[] = pc.address || [];
    const locType = pc.locationType;
    const pcPrice = parseFloat(pc.price) || 0;

    const pickupLocation = pickups[0]?.location || "";
    const dropoffLocation = dropoff?.location || "";

    const doesPickupMatch = chargeAddresses.some((addr) =>
      pickupLocation.includes(addr)
    );
    const doesDropoffMatch = chargeAddresses.some((addr) =>
      dropoffLocation.includes(addr)
    );

    if (
      (locType === "Any" && (doesPickupMatch || doesDropoffMatch)) ||
      (locType === "Pickup" && doesPickupMatch) ||
      (locType === "Dropoff" && doesDropoffMatch)
    ) {
      total += pcPrice;
    }
  }

  console.log("Parking charge: ", total.toFixed(2));
  return total;
}

