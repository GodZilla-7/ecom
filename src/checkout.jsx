import React from "react";
import { Outlet } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <Outlet /> {/* This will render the child routes (address, payment, summary) */}
    </div>
  );
};

export default Checkout;
