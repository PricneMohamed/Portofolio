import React from "react";
import ProductCard from "./ProductCard";

export default function ProductContainer() {
  return (
    <div className="ProductContainer flex  w-[100%] flex-col">
      <h1
        className="lg:text-3xl sm:text-2xl text-xl font-bold m-20 "
        style={{ direction: "rtl" }}
      >
        Choose Your Product
      </h1>
      <ProductCard />
    </div>
  );
}
