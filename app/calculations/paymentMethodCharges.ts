import  paymentMethodCharges  from "../payment/paymentmethods/paymentMethodsChargers";

export function getPaymentMethodCharges(
  paymentMethod: string,
  totalPrice: number
): number {
  // Find an active payment method entry that matches the given paymentType.
  const method = paymentMethodCharges().find(
    (item) =>
      item.name.toLowerCase() === paymentMethod.toLowerCase() && item.isActive
  );

  // If no active method is found, no extra charge applies.
  if (!method) {
    return 0;
  }

  // Extract the percentage value from the paymentCharge string (e.g., "2.9%").
  const percentageString = method.paymentCharge;

  // Validate if paymentCharge contains a percentage sign and parse the number
  let percentage = 0;
  if (percentageString && percentageString.includes("%")) {
    percentage = parseFloat(percentageString.replace("%", "").trim());
  }

  // If percentage is not valid, return 0 as no charge
  if (isNaN(percentage) || percentage <= 0) {
    return 0;
  }

  // Calculate the charge: (totalPrice * percentage / 100).
  const charge = totalPrice * (percentage / 100);

  // Optional: Rounding charge to two decimal places for precision
  return Math.round(charge * 100) / 100;
}
