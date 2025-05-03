// calculations/additionalCharge.ts

/**
 * Calculates the total price of any selected additional items (child seats, meet & greet, etc.).
 */
export function calculateAdditionalCharges(
  additionalChargeData: {
    boosterSeat?: number;
    childSeat?: number;
    infantSeat?: number;
    meetAndGreet?: number;
    waitingTimeAfterLanding?: number;
    waypoint?: number;
    wheelchair?: number;
  },
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
  // totalPrice: number
): number {
  if (!additionalChargeData) return 0;

  let total = 0;

  // Simple numeric fields
  total +=
    (additionalSelection.boosterSeat || 0) *
    (additionalChargeData.boosterSeat ?? 0);

  total +=
    (additionalSelection.childSeat || 0) *
    (additionalChargeData.childSeat ?? 0);

  total +=
    (additionalSelection.infantSeat || 0) *
    (additionalChargeData.infantSeat ?? 0);

  total +=
    (additionalSelection.meetAndGreet || 0) *
    (additionalChargeData.meetAndGreet ?? 0);

  total +=
    (additionalSelection.waitingTimeAfterLanding || 0) *
    (additionalChargeData.waitingTimeAfterLanding ?? 0);

  total +=
    (additionalSelection.waypoint || 0) * (additionalChargeData.waypoint ?? 0);

  total +=
    (additionalSelection.wheelchair || 0) *
    (additionalChargeData.wheelchair ?? 0);

  // Additional options array
  additionalSelection.additionalOptions.forEach((opt) => {
    if (opt.selected) {
      const q = opt.quantity || 1;
      total += opt.price * q;
    }
  });
  // console.log(
  //   "Additional charges: "
   
  // );
  return total;
}
