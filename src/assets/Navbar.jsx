import React from "react";

function Navbar(){
    return(
      <div className="fixed top-0 left-0 z-50 w-full">
      <div className="relative overflow-hidden bg-[rgb(95,15,42)] text-white">
  <div className="flex justify-between animate-[marquee_10s_linear_infinite] whitespace-nowrap text-sm">
    <span>Limited Time Offer!</span>
    <span>FREE Pouch on first order above ₹999</span>
  </div>
</div>


<div className="navbar bg-base-100 shadow-sm ">


  <div className="navbar-start">
    <img className="h-10" src="/image.png" />
    <a className="text-[rgb(95,15,42)] font-semibold">SHOPBRAZE</a>
  </div>

  <div className="navbar-end">

    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
    </button>

    
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  
  



   
</div>
</div>
</div>
    )
}

export default Navbar;


