import React from "react";
import { useParams, useNavigate } from 'react-router-dom';

function Buybar(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex fixed bottom-0 left-0 gap-4 w-full items-center justify-around bg-white p-3 z-50">
        {/* Add to Bag Button */}
        <button className="w-1/2 h-12 flex justify-center items-center gap-2 bg-[rgb(95,15,42)] text-white px-6 py-2 rounded-lg font-light text-sm hover:opacity-80 transition">
          <svg
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.505 2h11a1 1 0 0 1 .8.4l2.7 3.6v15a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4m12.5 6h-14v12h14zm-.5-2-1.5-2h-10l-1.5 2zm-9.5 4v2a3 3 0 1 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2z"></path>
          </svg>
          Add to Bag
        </button>

        {/* Buy Now Button */}
        <button className="w-1/2 h-12 flex justify-center items-center gap-2 border-2 border-[rgb(95,15,42)] text-[rgb(95,15,42)] px-6 py-2 rounded-lg font-light text-sm hover:bg-[rgb(242,235,244)] transition" onClick={() => navigate(`/checkout/${props.id}/address`)}>
          <svg
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.004 6.417.762 3.174 2.176 1.76l3.243 3.242H20.66a1 1 0 0 1 .958 1.288l-2.4 8a1 1 0 0 1-.958.712H6.004v2h11v2h-12a1 1 0 0 1-1-1zm2 .585v6h11.512l1.8-6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
          </svg>
          Buy Now
        </button>
      </div>
    </>
  );
}

export default Buybar;
