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
            <Cards img="https://cdn.shopify.com/s/files/1/0803/1807/1063/files/why-us-fabric_688x.png"/>
          </div>
          <div className="carousel-item">
           <Cards img="https://cdn.shopify.com/s/files/1/0803/1807/1063/files/why-us-fit_688x.png"/>
          </div>
          <div className="carousel-item">
           <Cards img="https://cdn.shopify.com/s/files/1/0803/1807/1063/files/why-us-design_688x.png"/>
          </div>
         




        </div>
        </div>
        </>
    )
}
export default Why;