import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { cartItem, food_list,getTotalCartAmount, token, url } = useContext(StoreContext);

  const navigate = useNavigate()
  const deliveryFee = getTotalCartAmount() > 0 ? 30 : 0; // default 30
  const grandTotal = getTotalCartAmount() + deliveryFee;

  const [data,setData]= useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler =(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async(event)=>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item,index)=>{
      if(cartItem[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"]= cartItem[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+20
    }

    let res = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(res.data.success){
      const {session_url} = res.data;
      window.location.replace(session_url);
    }else{
      toast.error("Error");
    }
  }

  useEffect(()=>{
    if(!token){
      navigate("/cart")
    }else if(getTotalCartAmount()===0){
      navigate("/cart")
    }
  },[])

  return (
    <div className="place-order">
      <h2>Checkout</h2>

      <form onSubmit={placeOrder} className="order-container">

        {/* LEFT SIDE — DELIVERY INFO */}
        <div className="delivery-info">
          <h3>Delivery Information</h3>

          <div className="delivery-form">
            <input name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name" required />
            <input name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" required />
            <input  name="phone" onChange={onChangeHandler} value={data.phone} type="number" placeholder="Phone Number" required />
            <input name="email" onChange={onChangeHandler} value={data.email} type="text" placeholder="Email" required />
            <input name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" required />
            <input name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" required/>
            <input name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" required/>
            <div className="two-input">
              <input name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" required />
              <input name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="number" placeholder="Postal Code" required />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div className="order-summary">
          <h3>Your Order</h3>

          <div className="summary-list">
            {food_list.map((item) => {
              const qty = cartItem?.[item._id] || 0;

              if (qty > 0) {
                return (
                  <div className="summary-item" key={item._id}>
                    <p>{item.name} × {qty}</p>
                    <p>₹{item.price * qty}</p>
                  </div>
                );
              }
            })}
          </div>

          <div className="summary-divider"></div>

          {/* Subtotal */}
          <div className="summary-row">
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount().toFixed(2)}</p>
          </div>

          {/* Delivery fee */}
          <div className="summary-row">
            <p>Delivery Charges</p>
            <p>₹{deliveryFee.toFixed(2)}</p>
          </div>

          <div className="summary-divider"></div>

          {/* Grand Total */}
          <div className="summary-total">
            <p>Total</p>
            <p>₹{grandTotal.toFixed(2)}</p>
          </div>

          <button type="submit" className="place-order-btn">Confirm Order</button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
