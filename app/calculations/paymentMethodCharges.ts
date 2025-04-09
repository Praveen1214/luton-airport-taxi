import paymentMethodCharges from "../payment/paymentmethods/paymentMethodCharges.json";

export function getPaymentMethodCharges(
  paymentMethod: string,
  totalPrice: number
): number {
  // Find an active payment method entry that matches the given paymentType.
  const method = paymentMethodCharges.find(
    (item) =>
      item.paymentType.toLowerCase() === paymentMethod.toLowerCase() &&
      item.isActive
  );

  // If no active method is found, no extra charge applies.
  if (!method) {
    return 0;
  }

  // Extract the percentage value from the paymentCharge string (e.g., "2.9%").
  const percentageString = method.paymentCharge;
  const percentage = parseFloat(percentageString.replace("%", ""));

  // Calculate the charge: (totalPrice * percentage / 100).
  const charge = totalPrice * (percentage / 100);
  const totalCharge = totalPrice + charge;

  console.log(
    "Payment method charges: (",
    percentage + "%" + " * ",
    totalPrice.toFixed(2) + ") + " + totalPrice.toFixed(2) + " = ",
    totalCharge.toFixed(2)
  );
  return charge;
}
