// calculations/parkingCharges.ts

/**
 * Calculates parking charges for either outbound or return route,
 * depending on the pickups & dropoff provided.
 */
export function calculateParkingChargeForRoute(
  parkingCharges: [],
  pickups: { location: string }[],
  dropoff: { location: string },
  // totalPrice: number,
  // returnBooking: boolean
): number {
  let total = 0;

  for (const pc of parkingCharges) {
    if (pc.status !== "Active") continue;

    const chargeAddresses: string[] = pc.address || [];
    const locType = pc.locationType;
    const pcPrice = parseFloat(pc.price) || 0;

    const pickupLocation = pickups[0].location;
    const dropoffLocation = dropoff.location;

    const doesPickupMatch = chargeAddresses.some((parkingAddr) =>
      pickupLocation.includes(parkingAddr)
    );
    const doesDropoffMatch = chargeAddresses.some((parkingAddr) =>
      dropoffLocation.includes(parkingAddr)
    );

    if (locType === "Any") {
      if (doesPickupMatch || doesDropoffMatch) {
        total += pcPrice;
      }
    } else if (locType === "Pickup") {
      if (doesPickupMatch) {
        total += pcPrice;
      }
    } else if (locType === "Dropoff") {
      if (doesDropoffMatch) {
        total += pcPrice;
      }
    }
  }
  console.log("Parking charge: ", total.toFixed(2));
  
  

  return total;
}
