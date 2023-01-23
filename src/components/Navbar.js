import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <p className="d-inline-block align-text-top">Gadgets Bazar</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
