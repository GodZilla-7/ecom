import React from 'react'

function Marqee() {
  return (
    <div className="relative overflow-hidden bg-[rgb(95,15,42)] text-white">
    <div className="flex justify-between animate-[marquee_10s_linear_infinite] whitespace-nowrap text-sm">
      <span>Limited Time Offer!</span>
      <span>FREE Pouch on first order above ₹999</span>
    </div>
  </div>
  
  )
}

export default Marqee;