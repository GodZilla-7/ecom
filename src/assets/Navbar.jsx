import React from "react";
import Marqee from "./Marqee";
function Navbar(){
    return(
      <div className="fixed top-0 left-0 z-50 w-full">
<Marqee/>

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

       
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.001 4.529a6 6 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464m6.826 1.641a4 4 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a4 4 0 0 0-5.686 5.605L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454"></path></svg>
     

    </button>
    <button className="btn btn-ghost btn-circle">

       
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="transparent" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.997 11.125v-5a3 3 0 1 1 6 0v5m-8.669-3h11.34a2 2 0 0 1 1.976 2.304l-1.255 8.152a3 3 0 0 1-2.966 2.544H8.571a3 3 0 0 1-2.965-2.544l-1.255-8.152a2 2 0 0 1 1.977-2.304"></path></svg>

    </button>
  
  



   
</div>
</div>
</div>
    )
}

export default Navbar;


