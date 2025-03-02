import React from "react";

const ProgressBar = ({ currentStep }) => {
  const steps = ["Address", "Payment", "Summary"];

  return (
    <div className="flex items-center justify-center my-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-semibold
              ${currentStep === index + 1 ? "bg-blue-500" : "bg-gray-300"}
            `}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-16 h-1 ${currentStep > index + 1 ? "bg-blue-500" : "bg-gray-300"}`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
