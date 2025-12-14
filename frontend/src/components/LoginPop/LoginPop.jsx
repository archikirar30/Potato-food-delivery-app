import React, { useContext, useState } from "react";
import "./LoginPop.css";
import { IoClose } from "react-icons/io5";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"
import { toast } from "react-toastify";

export default function LoginPop({ setShowLogin }) {

  const {url,setToken} = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign up")
  const [isAgree, setIsAgree] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onLogin = async (event) => {
     event.preventDefault();

     let newUrl = url;
     console.log(url)
     if(currState==="Sign in"){
      newUrl += "/api/user/login"
     }else{
      newUrl += "/api/user/register"
     }

     const res = await axios.post(newUrl,data);
     if(res.data.success){
      setToken(res.data.token)
      localStorage.setItem("token",res.data.token)
      toast.success(res.data.message)
      setShowLogin(false);
     }else{
      toast.error(res.data.message)
     }

  }

  return (
    <div className="login-popup">
        <form onSubmit={onLogin} className="login-popup-container">

          <IoClose
            className="login-popup-close"
            onClick={() => setShowLogin(false)}
          />

          <h2>{currState}</h2>
          <p className="login-popup-subtext">Continue your journey</p>

          <div className="login-popup-inputs">
            {currState === "Sign in" || <input onChange={onChangeHandler} name="name" value={data.name} type="text" placeholder="Name" required />}
            <input value={data.email} onChange={onChangeHandler} name="email" type="email" placeholder="Email" required />
            <input value={data.password} onChange={onChangeHandler} name="password" type="password" placeholder="Password" required />
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

          <button type="submit" className="login-popup-btn">{currState}</button>

          {currState === "Sign in" ?
            <p className="login-popup-bottom">
              Don't have an account?
              <span onClick={() => setCurrState("Sign up")}>Create one</span>
            </p> : <p className="login-popup-bottom">
              Already have an account?
              <span onClick={() => setCurrState("Sign in")}>Login</span>
            </p>
          }

      </form>
    </div>
  );
}
