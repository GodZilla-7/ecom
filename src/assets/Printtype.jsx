import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Printtype(props) {
  const [products, setProducts] = useState([]);
  const { print } = props; // Fabric type passed as a prop

  useEffect(() => {
    fetch("https://kalira-store.myshopify.com/products.json?limit=100")
      .then((response) => response.json())
      .then((data) => {
        // Check if fabric type is in tags or options
        const filteredProducts = data.products.filter((product) =>
          product.title.includes(print)
        );
        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [print]); // Re-run when print (fabric type) changes

  return (
    <div className="flex flex-col items-center justify-between mt-12">
      <img className="mb-4" src={props.img} alt="Category" />
      <div className="carousel rounded-box flex items-center justify-around gap-4 overflow-x-scroll no-scrollbar w-full">
        {products.length > 0 ? (
          products.slice(0, 5).map((product) => (
            <div className="carousel-item" key={product.id}>
              <ProductCard
                img={product.images[0]?.src || "/i1.webp"}
                title={product.title}
                description={product.body_html.replace(/<[^>]*>/g, "").substring(0, 50) + "..."}
                price={product.variants[0]?.price || "N/A"}
                compareAtPrice={product.variants[0]?.compare_at_price}
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products found for "{print}".</p>
        )}
      </div>
      <button className="btn mt-8 bg-white border-[rgb(95,15,42)] w-[80vw] py-6 rounded-lg text-[rgb(95,15,42)] font-normal">
        View All
        <svg fill="rgb(95, 15, 42)" height="10px" width="10px" version="1.1" viewBox="0 0 330 330">
          <path
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
  );
}

export default Printtype;
