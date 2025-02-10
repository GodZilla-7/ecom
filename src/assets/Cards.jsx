import React from "react";

function Cards(props) {
  return (
    <div>
    <div className="w-60 h-60 bg-white rounded-xl shadow-md relative overflow-hidden">
      {/* Image */}
      <img
        src={props.img} // Replace with the actual image URL
        alt="Fabric"
        className="object-cover w-full h-full"
      />
   
    </div>
    <div className="text-center mt-4 text-[rgb(95,15,42)]">
        <h3 className="text-md font-semibold">Premium Fabrics</h3>
        <p className="text-xs ">
          Experience the ultimate comfort all day long
        </p>
      </div>
    </div>
  );
}

export default Cards;
