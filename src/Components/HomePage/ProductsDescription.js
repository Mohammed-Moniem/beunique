import React from "react";
import styled from "styled-components";

function ProductsDescription() {
  return (
    <DescriptionWrapper>
      <section className="py-5">
        <div>
          <div>
            <p>
              Our premium products got the finest quality cotton that create an
              exquisite light weight
            </p>
            <p>
              textile that’s both soft and crisp–guaranteed to give you a
              wonderful night’s sleep.
            </p>
          </div>

          <div className="row my-5"></div>
        </div>
      </section>
    </DescriptionWrapper>
  );
}

export default ProductsDescription;
const DescriptionWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 100px;
`;
