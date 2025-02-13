import React from "react";
import Heading from "./Heading";
import Divider from "./Divider";
import ResponsiveTabs from "./Responsivetabs";
import ProductCard from "./ProductCard";

function Occasion() {
  return (
    <>
      <Heading Heading="Shop By Occasion" />
      <Divider />
      <ResponsiveTabs t1="DAILY WEAR" t2="OFFICE WEAR" t3="OCCASION WEAR" />
      <div className="flex flex-col items-center justify-between">
        {/* Carousel Container */}
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
        {/* View All Button */}
        <button className="btn mt-8 bg-white border-[rgb(95,15,42)] w-[80vw] py-6 rounded-lg text-[rgb(95,15,42)] font-normal">
          View All
          <svg
            fill="rgb(95, 15, 42)"
            height="10px"
            width="10px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
        c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
        C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
        C255,161.018,253.42,157.202,250.606,154.389z"
              stroke="rgb(95, 15, 42)"
              strokeWidth="10"
              fill="rgb(95, 15, 42)"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Occasion;
