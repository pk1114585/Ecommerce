import "./navigation.styles.scss";
import React from "react";

import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
function Navigation() {
  return (
    <>
      <div className="navBar"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/cool-background1.png)`, // Adjust the path based on your project structure
        // Other inline styles
      }}
      >
        <div className="sectionOne">
          <Link className="navLinks" to="allProds">
            <h3>Emart</h3>
          </Link>
          <Link className="navLinks" to="allProds">
           <h3>Products</h3> 
          </Link>
          <Link className="navLinks" to="addProd">
           <h3>Add Products</h3> 
          </Link>
        </div>

        <div className="sectionTwo">
          <Link className="navLinks" to="cart">
            <CartIcon />
          </Link>

          <div className="navItem">
            <img
              className="avatar"
              src="https://cdn-icons-png.flaticon.com/128/236/236832.png"
              alt=""
            />
            <p className="name">Pradeep kumar</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
