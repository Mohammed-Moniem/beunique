import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ProductCard(img, buttonText, path) {
  return (
    <div>
      <ProductCardWrapper>
        <div className="card">
          <div className="img-container">
            <img
              src={img}
              className="card-img-top p-5"
              alt="product"
              style={{ height: "320px" }}
            />
            <div className="main-link">
              <Link to={`/products/${path}`}>{buttonText}</Link>
            </div>
          </div>
        </div>
      </ProductCardWrapper>
    </div>
  );
}

export default ProductCard;

const ProductCardWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
  }

  .card-img-top {
    transition: var(--mainTransition);
  }

  .img-container {
    position: relative;
  }
  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .main-link {
    padding: 0.5rem 1rem;
    background: #ffffff;
    color: var(--mainWhite);
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: #ffffff;
    border: none;
    transition: var(--mainTransition);
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
