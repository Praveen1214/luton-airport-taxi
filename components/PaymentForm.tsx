'use client';

import React, { useState } from 'react';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckCircle, AlertCircle, CreditCard, Lock } from 'lucide-react';
import type { StripeCardElementChangeEvent } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key (ensure NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is set)
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

interface PaymentStatus {
  type: 'success' | 'error' | 'processing' | 'idle';
  message: string;
}

// StripePaymentWrapper wraps your payment form with the Elements provider.
export function StripePaymentWrapper({
  amount,
  onSuccess,
}: {
  amount: number; // amount in cents
  onSuccess?: (paymentIntentId: string) => void;
}) {
  return (
    <Elements stripe={stripePromise}>
      <StripePaymentForm amount={amount} onSuccess={onSuccess} />
    </Elements>
  );
}

// StripePaymentForm collects card details and processes payment.
function StripePaymentForm({
  amount,
  onSuccess,
}: {
  amount: number;
  onSuccess?: (paymentIntentId: string) => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState<PaymentStatus>({ type: 'idle', message: '' });
  const [loading, setLoading] = useState(false);
  const [cardComplete, setCardComplete] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || !cardComplete) return;

    setLoading(true);
    setStatus({ type: 'processing', message: 'Processing your payment...' });

    try {
      // Create a payment intent by calling your backend API
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/payment/stripe/create-payment-intent`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount,
            currency: 'usd',
            metadata: { orderTimestamp: new Date().toISOString() },
          }),
        }
      );

      if (!res.ok) throw new Error('Network response was not ok');

      const { clientSecret } = await res.json();

      // Confirm the payment with card details
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (result.error) {
        setStatus({
          type: 'error',
          message:
            result.error.message ||
            'Payment was declined. Please try a different card.',
        });
      } else if (result.paymentIntent?.status === 'succeeded') {
        setStatus({
          type: 'success',
          message: 'Payment successful! Your transaction has been processed.',
        });
        if (onSuccess && result.paymentIntent.id) {
          onSuccess(result.paymentIntent.id);
        }
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Payment error:', error);
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCardChange = (event: StripeCardElementChangeEvent) => {
    setCardComplete(event.complete);
    if (event.error) {
      setStatus({ type: 'error', message: event.error.message || 'Invalid card details' });
    } else {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount / 100);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Complete Your Payment</h3>
        <p className="text-gray-600">
          Amount: <span className="font-medium">{formatAmount(amount)}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="mb-3 flex items-center">
            <CreditCard className="h-5 w-5 text-gray-500 mr-2" />
            <label className="text-sm font-medium text-gray-700">Card Information</label>
          </div>

          <div className="p-3 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': { color: '#aab7c4' },
                  },
                  invalid: { color: '#9e2146' },
                },
              }}
              onChange={handleCardChange}
            />
          </div>

          <div className="mt-2 flex items-center text-xs text-gray-500">
            <Lock className="h-3 w-3 mr-1" />
            <span>Your payment information is secured with SSL encryption</span>
          </div>
        </div>

        {status.message && (
          <div
            className={`p-3 rounded-md flex items-start ${
              status.type === 'error'
                ? 'bg-red-50 text-red-700 border border-red-200'
                : status.type === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-blue-50 text-blue-700 border border-blue-200'
            }`}
          >
            {status.type === 'error' && <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />}
            {status.type === 'success' && <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />}
            {status.type === 'processing' && (
              <svg className="animate-spin h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            <span>{status.message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || loading || !cardComplete}
          className={`w-full py-3 px-4 flex justify-center items-center rounded-md text-white font-medium transition ${
            !stripe || loading || !cardComplete ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            <>Pay {formatAmount(amount)}</>
          )}
        </button>
      </form>
    </div>
  );
}
