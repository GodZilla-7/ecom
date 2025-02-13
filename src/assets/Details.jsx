import React, { useState } from "react";

function Details() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const ChevronDown = () => (
    <svg
      fill="#000000"
      height="12px"
      width="12px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
    >
      <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
    </svg>
  );

  const ChevronUp = () => (
    <svg
      fill="#000000"
      height="12px"
      width="12px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
    >
      <path d="M325.607,250.607c-5.857,5.857-15.355,5.858-21.213-0.001L165.004,111.213L25.607,250.607 c-5.857,5.857-15.355,5.858-21.213-0.001c-5.858-5.858-5.858-15.355,0-21.213l150.004-150c2.813-2.813,6.628-4.393,10.606-4.393 s7.794,1.581,10.606,4.394l149.996,150C331.465,235.251,331.465,244.749,325.607,250.607z" />
    </svg>
  );

  return (
    <div className="mb-4">
      <div className="my-12">
        {/* Product Details */}
        <div className="border-b border-gray-300">
          <button
            onClick={() => toggleFAQ(1)}
            className="w-full text-left py-4 px-6 flex justify-between items-center"
          >
            <span className="text-md flex items-center gap-4 text-[rgb(95,15,42)]">
            <svg height="25px" width="25px" xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24"><path d="M8.5 9.625a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 9.625a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 7.125v3.859c0 .537.213 1.052.593 1.432l8.116 8.116a2.023 2.023 0 0 0 2.864 0l4.834-4.834a2.023 2.023 0 0 0 0-2.864L12.29 4.718a2.03 2.03 0 0 0-1.431-.593H7a3 3 0 0 0-3 3"></path></svg>        Product Details</span>
            <span className="text-xl">
              {openIndex === 1 ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>
          {openIndex === 1 && (
            <div className="px-6 pb-4 text-gray-600 text-sm">
              Our return policy allows returns within 30 days of purchase with a valid receipt.
            </div>
          )}
        </div>

        {/* Return & Refunds */}
        <div className="border-b border-gray-300">
          <button
            onClick={() => toggleFAQ(2)}
            className="w-full text-left py-4 px-6 flex justify-between items-center"
          >
            <span className="text-md flex items-center gap-4 text-[rgb(95,15,42)]">
            <svg height="25px" width="25px"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20 11.126a8.1 8.1 0 0 0-15.5-2m-.5-4v4h4m-4 4a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path></svg>      Return & Refunds</span>


            <span className="text-xl">
              {openIndex === 2 ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>
          {openIndex === 2 && (
            <div className="px-6 pb-4 text-gray-600 text-sm">
              You can return your order through our website or at a store location.
            </div>
          )}
        </div>

        {/* Wash Care */}
        <div className="border-b border-gray-300">
          <button
            onClick={() => toggleFAQ(3)}
            className="w-full text-left py-4 px-6 flex justify-between items-center"
          >

            <span className="text-md flex items-center gap-4 text-[rgb(95,15,42)]">
            <svg height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.486 9.09q.253.031.514.035c.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.539.18 2 .5.461.322 1.21.509 2 .5.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.539.18 2 .5.461.322 1.21.509 2 .5q.256-.002.503-.034M3 6.125l1.721 10.329a2 2 0 0 0 1.973 1.671h10.612a2 2 0 0 0 1.973-1.671L21 6.125"></path></svg>
            Wash Care</span>
            <span className="text-xl">
              {openIndex === 3 ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>
          {openIndex === 3 && (
            <div className="px-6 pb-4 text-gray-600 text-sm">
              Aramya uses hand-printed fabric which may release colour in the first 3 washes. Please wash separately to prevent colour transfer.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
