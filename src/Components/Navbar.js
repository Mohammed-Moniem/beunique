import React from "react";
import { FaSearch, FaRegUser, FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import logo from "../images/logo.png";
function Navbar() {
  return (
    <NavWrapper>
      <div className="nav-center">
        <div className="nav-links">
          <a href="/shop" className="nav-link">
            SHOP
          </a>
          <a href="/our-story" className="nav-link">
            OUR STORY
          </a>
          <a href="/expertise" className="nav-link">
            EXPERTISE
          </a>
        </div>
        <div>
          <img className="nav-logo" src={logo} alt="tech store logo" />
        </div>
        <div>
          <div className="nav-icons">
            <a href="/contact" className="nav-link">
              CONTACT
            </a>

            <FaSearch className="nav-icon" />
            <FaRegUser className="nav-icon" />
            <FaShoppingCart className="nav-icon" />
          </div>
        </div>
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 98%;
  padding: 1rem 1.5rem;
  background: #ffffff;
  border-bottom: 3px solid #ffffff;
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }
  .nav-logo {
    padding-right: 70px;
  }
  .nav-links {
    display: flex;
    align-items: left;
    justify-content: space-between;
    padding-left: 20px;
  }
  .nav-link {
    font-size: 1.5rem;
    color: inherit;
    text-decoration: none;
    padding: 40px;
  }
  .nav-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 100px;
  }
  .nav-icon {
    font-size: 2rem;
    cursor: pointer;
    padding-left: 25px;
  }
`;

export default Navbar;
