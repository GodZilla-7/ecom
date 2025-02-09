import React from "react";
function Catagory(){
    return(
        <div className="flex flex-col items-center justify-between">
               <h1>Shop by category</h1>
<div className="carousel rounded-box flex items-center justify-around gap-4">
 
  <div className="carousel-item">
    <img className="rounded-box"
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img className="rounded-box"
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img className="rounded-box"
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Burger" />
  </div>

</div>
        </div>
    )
}
export default Catagory;