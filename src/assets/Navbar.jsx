import React, { useState, useEffect } from "react";
import Marqee from "./Marqee";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    if (isAuthenticated && user) {
      const encodedUserId = encodeURIComponent(user.sub);
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/wishlist/${encodedUserId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.items) {
            setWishlistCount(data.items.length);
          }
        })
        .catch((error) => console.error("Error fetching wishlist count:", error));
    }
  }, [isAuthenticated, user]);

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <Marqee />

      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start flex items-center">
          <img className="h-10" src="/image.png" alt="Logo" />
          <a className="text-[rgb(95,15,42)] font-semibold ml-2">SHOPBRAZE</a>
        </div>

        <div className="navbar-end flex items-center gap-3">
          {/* 🔍 Search Button */}
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* ❤️ Wishlist Button with Count */}
          <a href="/wishes" className="relative">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.001 4.529a6 6 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464m6.826 1.641a4 4 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a4 4 0 0 0-5.686 5.605L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454"></path>
              </svg>
            </button>

            {/* Wishlist Count */}
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[rgb(95,15,42)] text-white text-xs px-1 py-0.5 rounded-full">
                {wishlistCount}
              </span>
            )}
          </a>

          {/* 🔒 Auth Buttons */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <img
                src={user.picture}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <button
                className="btn btn-sm btn-outline"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="btn btn-sm btn-primary"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
