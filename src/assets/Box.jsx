import React from "react";

const cardData = [
  { header: "FREE RETURNS", subtext: "Within 14 Days" },
  { header: "FAST DELIVERY", subtext: "2-3 Business Days" },
  { header: "SECURE PAYMENT", subtext: "100% Safe Transactions" },
];

function Box() {
  return (
    <div className="flex gap-1 sm:gap-3">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-[rgb(246,242,242)] border-b-2 border-[rgb(217,184,183)] w-28 sm:w-48 flex items-center justify-center p-1 sm:p-2 rounded-md"
        >
          <div>
            <h2 className="text-[10px] sm:text-[14px] font-semibold">
              {card.header}
            </h2>
            <p className="text-[8px] sm:text-[12px]">{card.subtext}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Box;
