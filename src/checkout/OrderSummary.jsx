import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./progressbar";
import { useCheckout } from "./CheckoutContext";

const OrderSummary = () => {
  const navigate = useNavigate();
  const { checkoutData } = useCheckout();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <ProgressBar currentStep={3} />
      <h2 className="text-xl font-semibold text-center mb-4">Order Summary</h2>

      <div className="border rounded-md p-4 mb-4">
        <p className="text-gray-700"><span className="font-semibold">Shipping Address:</span> {checkoutData.address.name}, {checkoutData.address.street}, {checkoutData.address.city}, {checkoutData.address.zip}</p>
        <p className="text-gray-700"><span className="font-semibold">Payment Method:</span> {checkoutData.paymentMethod}</p>
      </div>

      <button onClick={() => navigate("/checkout/confirmation")} className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300">
        Confirm Order
      </button>
    </div>
  );
};

export default OrderSummary;
