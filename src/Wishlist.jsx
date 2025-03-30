import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './assets/ProductCard'; 

const WishlistPage = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  // States for wishlist items and products
  const [wishlistItems, setWishlistItems] = useState([]);
  const [products, setProducts] = useState([]);
  
  // Separate loading states for wishlist and products
  const [loadingWishlist, setLoadingWishlist] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState(null);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  // Fetch wishlist data for the current user from your backend
  useEffect(() => {
    if (isAuthenticated && user) {
      const encodedUserId = encodeURIComponent(user.sub);
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/wishlist/${encodedUserId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Wishlist data:", data);
          setWishlistItems(data.items || []);
          setLoadingWishlist(false);
        })
        .catch((err) => {
          console.error("Error fetching wishlist:", err);
          setError(err.message);
          setLoadingWishlist(false);
        });
    }
  }, [isAuthenticated, user]);

  // Fetch all products from Shopify JSON API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://kalira-store.myshopify.com/products.json?limit=100'
        );
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  // Wait until Auth0, wishlist, and products are loaded
  if (isLoading || loadingWishlist || loadingProducts) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Sort wishlist items by addedAt descending (most recent first)
  const sortedWishlistItems = [...wishlistItems].sort((a, b) => {
    return new Date(b.addedAt) - new Date(a.addedAt);
  });

  // Convert wishlist product IDs to trimmed strings
  const wishlistProductIds = sortedWishlistItems.map(item => String(item.productId).trim());

  // Filter products whose id (as string) exists in the wishlist
  const wishlistProducts = products.filter(product =>
    wishlistProductIds.includes(String(product.id).trim())
  );

  return (


    <>
    <div className='fixed top-0 w-full z-150'>
<div className='w-full flex justify-between items-center px-4 py-2 bg-[rgb(242,235,244)]'>
                    <button className="btn btn-ghost btn-circle" onClick={() => navigate(-1)}>
                        <svg width="28px" height="28px" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg" fill="#5f0f2a" stroke="#5f0f2a">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#5f0f2a" d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z" />
                                <path fill="#5f0f2a" d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z" />
                            </g>
                        </svg>
                    </button>
                    <div className='flex justify-between items-center'>
                        <img width="40px" src='/image.png' alt="ShopBraze Logo" />
                        My Wishlist
                    </div>
                    <div></div>
                </div>
                </div>
  <div className="container mt-8 mx-auto px-4 sm:px-6 py-8">
    

    {wishlistProducts.length === 0 ? (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-gray-500 text-lg md:text-xl text-center">
          Your wishlist is empty. Start adding your favorite items!
        </p>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center">
        {wishlistProducts.map((product) => (
          <div key={product.id} className="w-full max-w-[280px] md:max-w-[320px]">
            <ProductCard
              id={product.id}
              img={product.images[0]?.src || "/placeholder.jpg"}
              title={product.title}
              description={product.product_type}
              price={product.variants[0]?.price}
              compareAtPrice={product.variants[0]?.compare_at_price}
            />
          </div>
        ))}
      </div>
    )}
  </div>
  </>
);
  
};

export default WishlistPage;
