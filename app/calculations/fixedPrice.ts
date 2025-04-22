// calculations/fixedPrice.ts

/**
 * Attempts to locate a fixed price for the given route.
 * Returns a price if matched, or null if no fixed price rule applies.
 */
export function tryGetFixedPrice(
    pickups: { location: string; zone: string }[],
    dropoff: { location: string; zone: string },
    vehicleType: string,
    fixedPriceList: any,                 // keep the same signature
): number | null {
    // For example, your code often checks if there's exactly 1 pickup
    if (!Array.isArray(fixedPriceList) || fixedPriceList.length === 0) {
        return null;
      }
      
    if (pickups.length !== 1) return null;

    const pickupZone = pickups[0].zone;
    const pickupLoc = pickups[0].location;
    const dropoffZone = dropoff.zone;
    const dropoffLoc = dropoff.location;

    // If both are "zone not found," fallback to matching by address
    if (pickupZone === "zone not found" && dropoffZone === "zone not found") {
        // If addresses are missing, skip
        if (!pickupLoc || !dropoffLoc) return null;

        for (const item of fixedPriceList) {
            const directionType = item.directionType; // "One-way" or "Both-ways"
            const fromList = item.from || [];
            const toList = item.to || [];

            const fromToMatch =
                fromList.includes(pickupLoc) && toList.includes(dropoffLoc);
            const bothWaysReverse =
                directionType === "Both-ways" &&
                fromList.includes(dropoffLoc) &&
                toList.includes(pickupLoc);

            if (directionType === "One-way" && fromToMatch) {
                const vehiclePrice = item.categories?.[vehicleType];
                if (vehiclePrice !== undefined) return parseFloat(vehiclePrice);
            }

            if (directionType === "Both-ways" && (fromToMatch || bothWaysReverse)) {
                const vehiclePrice = item.categories?.[vehicleType];
                if (vehiclePrice !== undefined) return parseFloat(vehiclePrice);
            }
        }
        return null;
    } else {
        // If zone is recognized, check zone-based logic
        for (const item of fixedPriceList) {
            const directionType = item.directionType;
            const fromList = item.from || [];
            const toList = item.to || [];

            const fromToMatch =
                fromList.includes(pickupZone) && toList.includes(dropoffZone);
            const bothWaysReverse =
                directionType === "Both-ways" &&
                fromList.includes(dropoffZone) &&
                toList.includes(pickupZone);

            if (directionType === "One-way" && fromToMatch) {
                const vehiclePrice = item.categories?.[vehicleType];
                if (vehiclePrice !== undefined) return parseFloat(vehiclePrice);
            }

            if (directionType === "Both-ways" && (fromToMatch || bothWaysReverse)) {
                const vehiclePrice = item.categories?.[vehicleType];
                if (vehiclePrice !== undefined) return parseFloat(vehiclePrice);
            }
        }
        return null;
    }
}
