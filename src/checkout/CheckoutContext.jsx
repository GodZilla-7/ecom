import React, { createContext, useContext, useState } from "react";

// Create the checkout context
const CheckoutContext = createContext();

// Custom hook for using the checkout context
export const useCheckout = () => useContext(CheckoutContext);

// Checkout provider component
export const CheckoutProvider = ({ children }) => {
  const [checkoutData, setCheckoutData] = useState({
    address: {},
    paymentMethod: "",
  });

  return (
    <CheckoutContext.Provider value={{ checkoutData, setCheckoutData }}>
      {children}
    </CheckoutContext.Provider>
  );
};
