import React from "react";
import styled from "styled-components";
import { products } from "../../utils/products";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <productsWrapper>
      <section className="py-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            img={product.img}
            path={product.path}
            buttonText={product.buttonText}
          />
        ))}
      </section>
    </productsWrapper>
  );
}

export default Products;
const productsWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 100px;
`;
