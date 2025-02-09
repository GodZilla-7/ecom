import React from "react";

function Divider() {
  return (
    <div className="flex items-center justify-center my-2 mb-4">
      <div className="h-[1px] bg-red-700 w-[30%]"></div>
      <div className="relative w-3 h-3 border-1 border-red-700  bg-white rotate-45 flex items-center justify-center">
        <div className="absolute w-2 h-2 bg-red-700"></div>
      </div>
      <div className="h-[1px] bg-red-700 w-[30%] "></div>
    </div>
  );
}

export default Divider;
