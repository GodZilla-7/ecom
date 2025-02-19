import React, { useState } from "react";

function ProductCard({ img, title, description, price, compareAtPrice }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (

    <div className="card ml-4 w-64 bg-white rounded-xl border border-gray-200">
      {/* Product Image */}
      <div className="h-80 overflow-hidden relative rounded-xl">
        <img
          src={img || "/i1.webp"} // Fallback image
          alt={title}
          className="object-cover w-full h-full"
        />

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-2xl flex items-center gap-1 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 text-green-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 .288l2.833 8.718h9.167l-7.416 5.386 2.833 8.718-7.417-5.387-7.417 5.387 2.833-8.718-7.416-5.386h9.167z" />
          </svg>
          <span className="text-xs font-semibold text-gray-800">4.7</span>
          <span className="text-xs text-gray-400">(6.3K)</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-3">
      <h2 className="text-xs font-medium mt-2 truncate w-full">{title}</h2>


        {/* Price Section */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline">
            <span className="text-md font-semibold text-gray-900">
              ₹{price}
            </span>
            {compareAtPrice && (
              <>
                <span className="text-xs line-through text-gray-400 ml-2">
                  ₹{compareAtPrice}
                </span>
                <span className="text-xs text-green-500 ml-2">
                  -{Math.round(
                    ((compareAtPrice - price) / compareAtPrice) * 100
                  )}
                  %
                </span>
              </>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            className="btn btn-ghost btn-circle hover:bg-red-100"
            onClick={handleLikeClick}
          >
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
                fill={isLiked ? "red" : "grey"}
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
