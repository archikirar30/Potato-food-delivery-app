import React, { useContext, useState } from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import { FaShoppingCart ,FaSearch } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

function Navbar({setShowLogin}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
     <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <div className="logo"><img className='logo-img' src={assets.logo} />Potato.</div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/cart#search"><FaSearch/></NavLink></li>
          <li><NavLink to="/cart"><FaShoppingCart/>{getTotalCartAmount()!==0?<GoDotFill className='dot'/>:""}</NavLink></li>
          <li><NavLink to="/profile"><CgProfile/></NavLink></li>
          <li><button className="signup-btn" onClick={()=>setShowLogin(true)}>Sign up</button></li>
        </ul>

        {/* Mobile Menu Button */}
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
  )
}

export default Navbar