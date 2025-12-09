import React from 'react'
import './AppDownload.css'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GrAppleAppStore } from "react-icons/gr";
import { assets } from '../../assets/assets';


const AppDownload = () => {
  return (
    <div className="download-app">
      <div className="download-app-content">
        
        <h2>Get the Potato App</h2>
        <p>
          Order your favorite food anytime, anywhere. Fast delivery, live order
          tracking, and exclusive discounts!
        </p>

        {/* BUTTONS */}
        <div className="download-buttons">
          <div className="download-btn">
            <IoLogoGooglePlaystore />
            <span>
              <small>GET IT ON</small>
              <p>Google Play</p>
            </span>
          </div>

          <div className="download-btn">
            <GrAppleAppStore />
            <span>
              <small>Download on the</small>
              <p>App Store</p>
            </span>
          </div>
        </div>
      </div>

      {/* APP IMAGE */}
      <div className="download-app-image">
        <img src={assets.logo} alt="App Mockup" />
      </div>
    </div>
  )
}

export default AppDownload