// types/priceBreakdown.ts
export interface PriceBreakdown {
    baseFare: number;               // pure mileage / fixed‑price fare
    additionalCharges: number;      // seats, meet & greet, …
    holidaySurcharge: number;       // +£ / *factor difference
    nightSurcharge: number;         // idem
    parkingCharge: number;          // flat £
    paymentMethodCharge: number;    // 0 until a payment type is chosen
    total: number;                  // grand total
  }
  