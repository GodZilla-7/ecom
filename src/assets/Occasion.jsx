import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import Divider from "./Divider";
import ResponsiveTabs from "./Responsivetabs";
import ProductCard from "./ProductCard";

function Occasion() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    fetch("https://kalira-store.myshopify.com/products.json?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        filterProducts(1, data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Filter products based on tab selection
  const filterProducts = (tabIndex, allProducts) => {
    let category = "";
    if (tabIndex === 1) category = "Pink";
    else if (tabIndex === 2) category = "Blue";
    else if (tabIndex === 3) category = "Green";

    const filtered = allProducts.filter((product) =>
      product.title.includes(category)
    );

    setFilteredProducts(filtered);
  };

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
    filterProducts(tabIndex, products);
  };

  return (
    <>
      <Heading Heading="Shop By Color" />
      <Divider />
      <ResponsiveTabs
        t1="PINK"
        t2="BLUE"
        t3="GREEN"
        onTabChange={handleTabChange}
      />

      <div className="flex flex-col items-center justify-around">
        {/* Carousel Container */}
        <div className="carousel rounded-box flex items-center justify-around overflow-x-scroll no-scrollbar w-full">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="carousel-item" key={product.id}>
                <ProductCard
                id={product.id}
                  img={product.images[0]?.src || "/placeholder.jpg"}
                  title={product.title}
                  description={product.product_type}
                  price={product.variants[0]?.price}
                  compareAtPrice={product.variants[0]?.compare_at_price}
                />
              </div>
            ))
          ) : (
            <>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-44 w-full"></div>
              <div className="skeleton h-6 w-28"></div>
              <div className="skeleton h-6 w-full"></div>
              <div className="skeleton h-6 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-44 w-full"></div>
              <div className="skeleton h-6 w-28"></div>
              <div className="skeleton h-6 w-full"></div>
              <div className="skeleton h-6 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-44 w-full"></div>
              <div className="skeleton h-6 w-28"></div>
              <div className="skeleton h-6 w-full"></div>
              <div className="skeleton h-6 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-44 w-full"></div>
              <div className="skeleton h-6 w-28"></div>
              <div className="skeleton h-6 w-full"></div>
              <div className="skeleton h-6 w-full"></div>
            </div>
            </>
          )}
        </div>

        {/* View All Button */}
        <button className="btn mt-8 bg-white border-[rgb(95,15,42)] w-[80vw] py-6 rounded-lg text-[rgb(95,15,42)] font-normal">
          View All
          <svg
            fill="rgb(95, 15, 42)"
            height="10px"
            width="10px"
            viewBox="0 0 330 330"
          >
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
    </>
  );
}

export default Occasion;
