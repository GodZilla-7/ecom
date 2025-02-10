import React from "react";
import Heading from "./Heading";
import Divider from "./Divider";
import Cards from "./Cards";
function Why(){
  return(
    <>
    
      <Heading Heading="Why People Love Us"/>
      <Divider/>
        <div className="flex flex-col items-center justify-between px-4">
      
<div className="carousel rounded-box flex items-center justify-around gap-4 overflow-x-scroll scrollbar w-full">
          <div className="carousel-item">
            <Cards img="r1.webp"/>
          </div>
          <div className="carousel-item">
           <Cards img="r2.webp"/>
          </div>
          <div className="carousel-item">
           <Cards img="r3.webp"/>
          </div>
         
     
         
        </div>
        </div>
        </>
    )
}
export default Why;