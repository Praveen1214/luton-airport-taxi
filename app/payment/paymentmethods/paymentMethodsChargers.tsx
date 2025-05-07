import { useState, useEffect } from 'react';

function PaymentMethodsChargers() {
  const [methods, setMethods] = useState([]);

  // Fetching payment methods using useEffect to ensure it only runs once after the component mounts
  useEffect(() => {
    const getPaymentCharges = async () => {
      try {
        const response = await fetch('/api/payment-methods-charges');
        if (!response.ok) {
          throw new Error('Failed to fetch payment methods');
        }
        const data = await response.json();
        setMethods(data); // Store the data in the state
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getPaymentCharges(); // Call the function to fetch data
  }, []); // Empty array ensures this runs only once when the component mounts

  return methods; // Directly return the methods array (same format as the API response)
}

export default PaymentMethodsChargers;
