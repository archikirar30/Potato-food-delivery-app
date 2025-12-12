import React from "react";
import "./Navbar.css";
import { FiUser, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="nav-brand">Potato. Admin</div>

      <div className="nav-actions">
        <a href="/profile" className="nav-icon">
          <FiUser />
        </a>

        <button className="logout-btn">
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
