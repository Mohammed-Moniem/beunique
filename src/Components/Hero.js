import React from "react";
import styled from "styled-components";
import mainBcg from "../images/mainBcg.png";

function Hero({ img, title, slogan, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <div className="title">
          <h1>{title}</h1>
          <h1>{slogan}</h1>
        </div>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.max ? "100vh" : "60vh")};
  color: #ffffff;
  max-width: 100vw;
  background: url(${(props) => props.img}) center/cover no-repeat;
  .title {
    font-size: 1rem;
    padding-bottom: 900px;
  }
`;

Hero.defaultProps = {
  img: mainBcg,
};

export default Hero;
