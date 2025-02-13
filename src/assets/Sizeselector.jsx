import React, { useState } from "react";

const SizeSelector = () => {
  const sizes = ["M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL", "7XL", "8XL", "9XL", "10XL"];
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h3 className="font-semibold">Size</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {sizes.map((size, index) => (
            <button
              key={index}
              className={`btn btn-outline h-12 w-12 ${selectedSize === size ? "bg-[rgb(95,15,42)] text-white" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      {selectedSize && (
        <p className="text-sm text-gray-700">Selected Size: {selectedSize}</p>
      )}

    </div>
  );
};

export default SizeSelector;
