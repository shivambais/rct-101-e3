import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link"></Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button">
        {/* {(isAuth? "Logout" : "Login")} */}
      </button>
    </div>
  );
};

export default Navbar;
