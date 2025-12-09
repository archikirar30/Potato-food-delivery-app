import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { IoTrashBin } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, food_list, removeFromItem, removeItem, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate()

  return (<>
  {getTotalCartAmount()!==0?<div className="cart">
    <h2>Your Cart</h2>

    <div className="cart-main">

      <div className="cart-items">
        {food_list.map((item, index) => {
          if (cartItem?.[item._id] > 0) {
            return (
              <div className="cart-item" key={item._id}>
                <img src={item.image} alt={item.name} className="cart-item-img" />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p className="cart-price">₹{item.price * cartItem[item._id]}</p>
                  <p className="cart-qty">Qty: {cartItem[item._id]}</p>
                </div>

                <button
                  className="cart-remove"
                  onClick={() => removeFromItem(item._id)}
                >
                  <IoTrashBin />
                </button>
              </div>
            );
          }
        })}
      </div>

      {/* Order Summary */}
      <div className="cart-summary">
        <h3>Order Summary</h3>

        <div className="summary-details">
          <p>Subtotal: </p>
          <p>₹{getTotalCartAmount()}</p>
        </div>

        <div className="summary-details">
          <p>Delivery Fee:</p>
          <p>₹20</p>
        </div>

        <div className="summary-total">
          <p>Total:</p>
          <p>₹{(parseFloat(getTotalCartAmount()) + 20).toFixed(2)}</p>
        </div>

        <button onClick={()=>navigate("/place-order")} className="checkout-btn">Proceed to Checkout</button>
      </div>

    </div>
  </div>:<h2>Your cart is empty!</h2>}
  </>
  );
};

export default Cart;
