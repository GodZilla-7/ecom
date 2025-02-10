import React from "react";
import ProductCard from "./ProductCard";
function Printtype(props) {
  return (
    <>


      <div className="flex flex-col items-center justify-between mt-12">
        <img className="mb-4" src={props.img} />
        <div className="carousel rounded-box flex items-center justify-around gap-4 overflow-x-scroll no-scrollbar w-full">
                  <div className="carousel-item">
                    <ProductCard img="/i1.webp" />
                  </div>
                  <div className="carousel-item">
                  <ProductCard img="/i2.webp" />
                  </div>
                  <div className="carousel-item">
                  <ProductCard img="/i3.webp" />
                  </div>
                  <div className="carousel-item">
                  <ProductCard img="/i4.webp" />
                  </div>
                  <div className="carousel-item">
                  <ProductCard img="/i1.webp" />
                  </div>
                </div>

      </div>
    </>
  )
}
export default Printtype;