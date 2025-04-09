'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripePaymentForm from '@/components/PaymentForm';
import SquarePaymentForm from '@/components/PaymentFormSq';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function Checkout() {
  const [paymentProvider, setPaymentProvider] = useState<'stripe' | 'square' | null>(null);

  const handleProviderChange = (provider: 'stripe' | 'square') => {
    // Clear card containers to avoid overlapping
    document.getElementById('card-container')?.replaceChildren(); // Reset the container

    // Set the selected payment provider
    setPaymentProvider(provider);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Checkout</h1>

      <div className="space-x-4">
        <button onClick={() => handleProviderChange('stripe')}>Pay with Stripe</button>
        <button onClick={() => handleProviderChange('square')}>Pay with Square</button>
      </div>

      {paymentProvider === 'stripe' && (
        <Elements stripe={stripePromise}>
          <StripePaymentForm amount={2000} />
        </Elements>
      )}

      {paymentProvider === 'square' && <SquarePaymentForm />}
    </div>
  );
}
