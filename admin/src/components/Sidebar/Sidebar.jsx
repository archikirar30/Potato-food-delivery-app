import React from "react";
import "./Sidebar.css";
import {FiBox, FiLogOut } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import {  AiFillProduct } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">Dashboard</h2>

      <ul className="sidebar-menu">
        <li><NavLink  to="/add"><IoMdAdd /> Add Items </NavLink></li>
        <li><NavLink to="/list"><AiFillProduct /> List Items</NavLink></li>
        <li><NavLink to="/orders"><FiBox /> Orders</NavLink></li>
      </ul>

      <div className="sidebar-footer">
        <FiLogOut /> Logout
      </div>
    </div>
  );
};

export default Sidebar;
