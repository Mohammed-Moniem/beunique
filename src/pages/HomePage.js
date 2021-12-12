import React from "react";
import Hero from "../Components/Hero";
import ProductsDescription from "../Components/HomePage/ProductsDescription";
// import Products from "./../Components/HomePage/Products";

export default function HomePage() {
  return (
    <>
      <Hero
        title={`Super Soft, Stylish Bed Linen`}
        slogan={`Made With Love`}
        max={true}
      ></Hero>
      <ProductsDescription />
      {/* <Products /> */}
    </>
  );
}
