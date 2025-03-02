import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProgressBar from "./progressbar";
import { useCheckout } from "./CheckoutContext";

const PaymentForm = () => {
  const { setCheckoutData } = useCheckout();
  const [method, setMethod] = useState("");
  const navigate = useNavigate();
  const { productId } = useParams();

  const handleNext = () => {
    setCheckoutData((prev) => ({ ...prev, paymentMethod: method }));
    navigate(`/checkout/${productId}/summary`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <ProgressBar currentStep={2} />
      <h2 className="text-xl font-semibold text-center mb-4">Select Payment Method</h2>

      <div className="flex flex-col space-y-2">
        {["Credit Card", "UPI", "Cash on Delivery"].map((option) => (
          <button key={option} onClick={() => setMethod(option)} className={`w-full py-2 border rounded-md ${method === option ? "bg-blue-500 text-white" : "bg-gray-100"}`}>
            {option}
          </button>
        ))}
      </div>

      {method && (
        <button onClick={handleNext} className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300">
          Next
        </button>
      )}
    </div>
  );
};

export default PaymentForm;
