import React from "react";
import Heading from "./Heading";
import Divider from "./Divider";
function Catagory(){
    return(
    <div className="mb-7">
      <Heading Heading="Shop by Category" />
      <Divider/>
        <div className="flex flex-col items-center justify-between">
      
<div className="carousel rounded-box flex justify-around gap-4 m-4">
 
  <div className="carousel-item">
    <img className="rounded-box w-72"
      src="cat1.png"
      alt="KURTA SETS" />
  </div>
  <div className="carousel-item">
    <img className="rounded-box w-72"
      src="cat2.webp"
      alt="BOTTOMS" />
  </div>
  <div className="carousel-item">
    <img className="rounded-box w-72"
     src="cat3.webp"
      alt="DUPATTA" />
  </div>

</div>
        </div>
        </div>
    )
}
export default Catagory;