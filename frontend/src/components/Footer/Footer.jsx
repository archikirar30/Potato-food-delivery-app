import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return ( <footer className="footer">
      <div className="footer-content">

        {/* LEFT SECTION */}
        <div className="footer-section footer-about">
          <h2 className="footer-logo">Potato</h2>
          <p>
            Your favourite food delivery app! Fresh, fast, and delicious meals
            delivered right to your doorstep.
          </p>

          <div className="footer-socials">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>

        {/* MIDDLE LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* RIGHT CONTACT */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@potato.com</p>
          <p>Phone: +91 98765 XXXXX</p>
          <p>Address: Bhopal, India</p>
        </div>

      </div>

      <hr />

      <p className="footer-bottom">
        © {new Date().getFullYear()} Potato — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
