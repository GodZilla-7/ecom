import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProgressBar from "./progressbar";
import { useCheckout } from "./CheckoutContext";

const AddressForm = () => {
  const { setCheckoutData } = useCheckout();
  const [form, setForm] = useState({ name: "", street: "", city: "", zip: "" });
  const navigate = useNavigate();
  const { productId } = useParams();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleNext = () => {
    setCheckoutData((prev) => ({ ...prev, address: form }));
    navigate(`/checkout/${productId}/payment`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <ProgressBar currentStep={1} />
      <h2 className="text-xl font-semibold text-center mb-4">Enter Shipping Address</h2>

      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full px-4 py-2 mb-2 border rounded-md focus:ring-2 focus:ring-blue-500" required />
      <input type="text" name="street" placeholder="Street Address" onChange={handleChange} className="w-full px-4 py-2 mb-2 border rounded-md focus:ring-2 focus:ring-blue-500" required />
      <input type="text" name="city" placeholder="City" onChange={handleChange} className="w-full px-4 py-2 mb-2 border rounded-md focus:ring-2 focus:ring-blue-500" required />
      <input type="text" name="zip" placeholder="ZIP Code" onChange={handleChange} className="w-full px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-500" required />

      <button onClick={handleNext} className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300">
        Next
      </button>
    </div>
  );
};

export default AddressForm;
