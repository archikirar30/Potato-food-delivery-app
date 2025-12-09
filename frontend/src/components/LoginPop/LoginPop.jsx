import React, { useState } from "react";
import "./LoginPop.css";
import { IoClose } from "react-icons/io5";

export default function LoginPop({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sign up")
  const [ isAgree, setIsAgree] = useState(false)
  return (
    <div className="login-popup">
      <div className="login-popup-container">

        <IoClose 
          className="login-popup-close" 
          onClick={() => setShowLogin(false)}
        />

        <h2>{currState}</h2>
        <p className="login-popup-subtext">Continue your journey</p>

        <div className="login-popup-inputs">
          {currState==="Sign in" || <input type="text" placeholder="Name" required/>}
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>
        </div>
        {/* Terms & Conditions */}
        <div className="login-terms">
          <input 
            type="checkbox"
            checked={isAgree}
            onChange={() => setIsAgree(!isAgree)}
          />
          <label>
            I agree to the <span>Terms & Conditions</span>
          </label>
        </div>

        <button className="login-popup-btn">{currState==="Sign in"?"Sign up":""}</button>

        {currState==="Sign in"?
         <p className="login-popup-bottom">
          Don't have an account?
          <span onClick={()=>setCurrState("Sign up")}>Create one</span>
        </p>:<p className="login-popup-bottom">
          Already have an account?
          <span onClick={()=>setCurrState("Sign in")}>Login</span>
        </p>
        }

      </div>
    </div>
  );
}
