import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { strings } from "../constants/fileWithConstants";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage?.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">{strings.SHOP} </Link>
        <Link to="/cart">{strings.CART}</Link>
        <Link to="/wishlist">{strings.WISHLIST}</Link>
        {localStorage?.getItem("user") ? (
          <Link to="/" onClick={handleLogout}>
            {strings.LOGOUT}
          </Link>
        ) : (
          <Link to="/login">{strings.LOGIN}</Link>
        )}
      </div>
    </div>
  );
};
