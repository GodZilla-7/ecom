import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";

const ProductCard = memo(({ id, img, title, price, compareAtPrice }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      const encodedUserId = encodeURIComponent(user.sub);
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/wishlist/${encodedUserId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.items) {
            const found = data.items.some(
              (item) => String(item.productId).trim() === String(id).trim()
            );
            setIsLiked(found);
          }
        })
        .catch((error) => console.error("Error fetching wishlist:", error));
    }
  }, [user, isAuthenticated, id]);

  const handleLikeClick = async (e) => {
    e.stopPropagation();
    if (!isAuthenticated || !user) {
      toast.error("Please log in to manage your wishlist.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/wishlist`, {
        method: isLiked ? "DELETE" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.sub,
          productId: id,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsLiked((prev) => !prev);
        toast.success(isLiked ? "Removed from wishlist" : "Added to wishlist");
      } else {
        toast.error("Failed to update wishlist.");
      }
    } catch (error) {
      toast.error("Error updating wishlist.");
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="card ml-4 w-64 bg-white rounded-xl border border-gray-200 cursor-pointer z-100"
      onClick={handleCardClick}
    >
      <div className="h-80 overflow-hidden relative rounded-xl">
        <img
          src={img || "/i1.webp"}
          alt={title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      <div className="p-3">
        <h2 className="text-xs font-medium mt-2 truncate w-full">{title}</h2>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline">
            <span className="text-md font-semibold text-gray-900">₹{price}</span>
            {compareAtPrice && (
              <>
                <span className="text-xs line-through text-gray-400 ml-2">
                  ₹{compareAtPrice}
                </span>
                <span className="text-xs text-green-500 ml-2">
                  -{Math.round(((compareAtPrice - price) / compareAtPrice) * 100)}%
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
});

export default ProductCard;
