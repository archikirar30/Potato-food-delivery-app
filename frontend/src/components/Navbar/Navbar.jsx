import React, { useContext, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

function Navbar({ setShowLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { getTotalCartAmount, token, setToken } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const logoutHandler = () => {
    setToken("");
    localStorage.removeItem("token");
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <div className="logo">
          <img className="logo-img" src={assets.logo} alt="logo" />
          Potato.
        </div>

        {/* Menu */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <li>
            <NavLink to="/menu">
              <FaSearch />
            </NavLink>
          </li>

          <li className="cart-icon">
            <NavLink to="/cart">
              <FaShoppingCart />
              {getTotalCartAmount() !== 0 && (
                <GoDotFill className="dot" />
              )}
            </NavLink>
          </li>

          {/* AUTH SECTION */}
          {!token ? (
            <li>
              <button
                className="signup-btn"
                onClick={() => setShowLogin(true)}
              >
                Sign in
              </button>
            </li>
          ) : (
            <li className="user-section">
              <div
                className="user-info"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <CgProfile/>
                <span className="arrow"><IoIosArrowDown/></span>
              </div>

              {dropdownOpen && (
                <div className="dropdown">
                  <NavLink to="/myorders" onClick={() => setDropdownOpen(false)}>
                    Orders
                  </NavLink>
                  <button onClick={logoutHandler}>Logout</button>
                </div>
              )}
            </li>
          )}
        </ul>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
