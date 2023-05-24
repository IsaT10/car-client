import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h5 className="text-base font-bold text-orange uppercase">
          Popular Products
        </h5>
        <h2 className="text-5xl font-bold leading-tight mt-5">
          Browse Our Products
        </h2>
        <p className="py-2 text-gray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-24 justify-between gap-y-14 mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-16">
        <button className="border-2 border-orange px-6 py-3 text-lg text-orange font-bold rounded-md">
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
