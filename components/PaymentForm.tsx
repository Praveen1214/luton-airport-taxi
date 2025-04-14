'use client';

import React, { useState } from 'react';
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckCircle, AlertCircle, Lock, ArrowRight, Shield } from 'lucide-react';
import type { StripeElementChangeEvent } from '@stripe/stripe-js';
import  MasterCard  from '@/assets/images/shopping.png';
import  Visa  from '@/assets/images/visa.png';
import  Amex  from '@/assets/images/american-express.png';
import Image from 'next/image';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

interface PaymentStatus {
  type: 'success' | 'error' | 'processing' | 'idle';
  message: string;
}

interface CardState {
  number: boolean;
  expiry: boolean;
  cvc: boolean;
  postalCode: boolean;
  name: boolean;
}

// StripePaymentWrapper wraps your payment form with the Elements provider
export function StripePaymentWrapper({
  amount,
  onSuccess,
}: {
  amount: number; // amount in cents
  onSuccess?: (paymentIntentId: string, paymentDetails: any) => void;
}) {
  return (
    <Elements 
      stripe={stripePromise} 
      options={{
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#3b82f6',
            colorBackground: '#ffffff',
            colorText: '#1f2937',
            colorDanger: '#ef4444',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            spacingUnit: '4px',
            borderRadius: '8px',
          },
        },
      }}
    >
      <CreditCardPaymentForm amount={amount} onSuccess={onSuccess} />
    </Elements>
  );
}

// Individual credit card payment form
function CreditCardPaymentForm({
  amount,
  onSuccess,
}: {
  amount: number;
  onSuccess?: (paymentIntentId: string, paymentDetails: any) => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState<PaymentStatus>({ type: 'idle', message: '' });
  const [loading, setLoading] = useState(false);
  const [cardName, setCardName] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [cardState, setCardState] = useState<CardState>({
    number: false,
    expiry: false,
    cvc: false,
    postalCode: false,
    name: false,
  });

  const isComplete = 
    cardState.number && 
    cardState.expiry && 
    cardState.cvc && 
    cardState.postalCode && 
    cardState.name;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || !isComplete) return;

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
            metadata: { 
              orderTimestamp: new Date().toISOString(),
              cardholderName: cardName
            },
          }),
        }
      );

      if (!res.ok) throw new Error('Network response was not ok');

      const { clientSecret } = await res.json();

      // Confirm the payment with card details
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement)!,
          billing_details: {
            name: cardName,
            address: {
              postal_code: postalCode,
            }
          }
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
          // Pass back the payment details along with the ID
          onSuccess(result.paymentIntent.id, {
            last4: result.paymentIntent.payment_method_details?.card?.last4 || '',
            cardBrand: result.paymentIntent.payment_method_details?.card?.brand || '',
            cardholderName: cardName,
            postalCode: postalCode
          });
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

  const handleCardNumberChange = (event: StripeElementChangeEvent) => {
    setCardState(prev => ({ ...prev, number: event.complete }));
    if (event.error) {
      setStatus({ type: 'error', message: event.error.message || 'Invalid card number' });
    } else {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const handleCardExpiryChange = (event: StripeElementChangeEvent) => {
    setCardState(prev => ({ ...prev, expiry: event.complete }));
    if (event.error) {
      setStatus({ type: 'error', message: event.error.message || 'Invalid expiry date' });
    }
  };

  const handleCardCvcChange = (event: StripeElementChangeEvent) => {
    setCardState(prev => ({ ...prev, cvc: event.complete }));
    if (event.error) {
      setStatus({ type: 'error', message: event.error.message || 'Invalid CVC code' });
    }
  };

  const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardName(value);
    setCardState(prev => ({ ...prev, name: value.trim().length > 0 }));
  };
  
  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPostalCode(value);
    setCardState(prev => ({ ...prev, postalCode: value.trim().length > 0 }));
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount / 100);
  };

  // Define common styles for Stripe elements
  const stripeElementStyle = {
    style: {
      base: {
        fontSize: '16px',
        color: '#1f2937',
        '::placeholder': { color: '#9ca3af' },
        iconColor: '#3b82f6',
      },
      invalid: { 
        color: '#ef4444', 
        iconColor: '#ef4444' 
      },
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Card Payment</h3>
        <div className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
          {formatAmount(amount)}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-5">
            {/* Card holder name */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cardholder Name
              </label>
              <input
                type="text"
                value={cardName}
                onChange={handleCardNameChange}
                placeholder="Name on card"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>
            
            {/* Card number */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <div className="px-4 py-3 rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white transition-all">
                <CardNumberElement 
                  options={stripeElementStyle}
                  onChange={handleCardNumberChange}
                />
              </div>
            </div>
            
            {/* Two columns for expiry and CVC */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiration Date
                </label>
                <div className="px-4 py-3 rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white transition-all">
                  <CardExpiryElement 
                    options={stripeElementStyle}
                    onChange={handleCardExpiryChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVC
                </label>
                <div className="px-4 py-3 rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white transition-all">
                  <CardCvcElement 
                    options={stripeElementStyle}
                    onChange={handleCardCvcChange}
                  />
                </div>
              </div>
            </div>
            
            {/* Postal Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postal Code
              </label>
              <input
                type="text"
                value={postalCode}
                onChange={handlePostalCodeChange}
                placeholder="Postal Code"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>
          </div>
          
          {/* Card issuers and security info */}
          <div className="bg-gray-50 px-5 py-4 flex items-center justify-between border-t border-gray-200">
            <div className="flex items-center space-x-2">

              <Image src={Visa} alt="Visa" width={24} height={24} className="h-5 w-5" />
              <Image src={MasterCard} alt="MasterCard" width={24} height={24} className="h-5 w-5" />
              <Image src={Amex} alt="American Express" width={24} height={24} className="h-5 w-5" />
              
             
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Lock className="h-3 w-3 mr-1 text-green-500" />
              <span>Secure Transaction</span>
            </div>
          </div>
        </div>

        {status.message && (
          <div
            className={`p-4 rounded-lg flex items-start ${
              status.type === 'error'
                ? 'bg-red-50 text-red-700'
                : status.type === 'success'
                ? 'bg-green-50 text-green-700'
                : 'bg-blue-50 text-blue-700'
            }`}
          >
            {status.type === 'error' && <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />}
            {status.type === 'success' && <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />}
            {status.type === 'processing' && (
              <svg className="animate-spin h-5 w-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            <span className="text-sm">{status.message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || loading || !isComplete}
          className={`w-full py-4 px-6 flex justify-center items-center rounded-lg text-white font-medium transition-all duration-200 ${
            !stripe || loading || !isComplete 
              ? 'bg-gray-400 cursor-not-allowed opacity-70' 
              : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
            <>
              <span>Pay {formatAmount(amount)}</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
        
        {/* Trust badges */}
        <div className="flex justify-center items-center space-x-4 pt-2">
          <div className="flex items-center text-xs text-gray-500">
            <Shield className="h-3 w-3 mr-1 text-gray-400" />
            <span>256-bit SSL Encryption</span>
          </div>
          <div className="text-gray-300">|</div>
          <div className="flex items-center text-xs text-gray-500">
            <Lock className="h-3 w-3 mr-1 text-gray-400" />
            <span>Secure Payment</span>
          </div>
        </div>
      </form>
    </div>
  );
}