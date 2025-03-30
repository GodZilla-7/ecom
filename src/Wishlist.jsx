import React, { useState, useEffect, useMemo } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./assets/ProductCard";

const WishlistPage = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const [wishlistItems, setWishlistItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔄 Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  // 🔄 Fetch wishlist & products in parallel for speed
  useEffect(() => {
    if (isAuthenticated && user) {
      const encodedUserId = encodeURIComponent(user.sub);

      const fetchWishlist = fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/wishlist/${encodedUserId}`
      )
        .then((res) => res.json())
        .then((data) => data.items || [])
        .catch((err) => {
          console.error("❌ Wishlist Fetch Error:", err);
          setError("Failed to load wishlist.");
          return [];
        });

      const fetchProducts = fetch(
        "https://kalira-store.myshopify.com/products.json?limit=100"
      )
        .then((res) => res.json())
        .then((data) => data.products || [])
        .catch((err) => {
          console.error("❌ Product Fetch Error:", err);
          setError("Failed to load products.");
          return [];
        });

      // ✅ Run both fetches in parallel
      Promise.all([fetchWishlist, fetchProducts]).then(([wishlist, products]) => {
        setWishlistItems(wishlist);
        setProducts(products);
        setLoading(false);
      });
    }
  }, [isAuthenticated, user]);

  // 🏎️ Memoized filtering for performance
  const wishlistProducts = useMemo(() => {
    const wishlistProductIds = new Set(
      wishlistItems.map((item) => String(item.productId).trim())
    );

    return products.filter((product) =>
      wishlistProductIds.has(String(product.id).trim())
    );
  }, [wishlistItems, products]);

  // 🔄 Show loader while fetching
  if (isLoading || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">❌ {error}</div>;
  }

  return (
    <>
      {/* Header */}
      <div className="fixed top-0 w-full z-50 bg-[rgb(242,235,244)] px-4 py-2 flex justify-between items-center">
        <button className="btn btn-ghost btn-circle" onClick={() => navigate(-1)}>
          <svg width="28px" height="28px" viewBox="0 0 1024 1024" fill="#5f0f2a">
            <path d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z" />
            <path d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z" />
          </svg>
        </button>
        <div className="flex items-center">
          <img width="40px" src="/image.png" alt="ShopBraze Logo" />
          <span className="ml-2 font-semibold">My Wishlist</span>
        </div>
        <div></div>
      </div>

      {/* Wishlist Content */}
      <div className="container mt-16 mx-auto px-4 sm:px-6 py-8">
        {wishlistProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <p className="text-gray-500 text-lg md:text-xl text-center">
              Your wishlist is empty. Start adding your favorite items!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                img={product.images[0]?.src || "/placeholder.jpg"}
                title={product.title}
                description={product.product_type}
                price={product.variants[0]?.price}
                compareAtPrice={product.variants[0]?.compare_at_price}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default WishlistPage;
