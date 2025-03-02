import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Order Confirmed! 🎉</h2>
        <p className="text-gray-700 mb-4">
          Thank you for your purchase! Your order has been placed successfully.
        </p>
        <p className="text-gray-500">You will receive a confirmation email shortly.</p>
        
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => navigate("/")}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
