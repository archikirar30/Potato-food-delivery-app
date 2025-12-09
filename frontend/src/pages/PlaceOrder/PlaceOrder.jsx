import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { cart_items, food_list } = useContext(StoreContext);

  const { getTotalCartAmount } = useContext(StoreContext);
  const deliveryFee = getTotalCartAmount() > 0 ? 30 : 0; // default 30
  const grandTotal = getTotalCartAmount() + deliveryFee;

  return (
    <div className="place-order">
      <h2>Checkout</h2>

      <div className="order-container">

        {/* LEFT SIDE — DELIVERY INFO */}
        <div className="delivery-info">
          <h3>Delivery Information</h3>

          <form className="delivery-form">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Email" required />
            <input type="text" placeholder="Street" required />
            <input type="text" placeholder="Address Line 2" />
            <div className="two-input">
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="Postal Code" required />
            </div>
          </form>
        </div>

        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div className="order-summary">
          <h3>Your Order</h3>

          <div className="summary-list">
            {food_list.map((item) => {
              const qty = cart_items?.[item._id] || 0;

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

          <button className="place-order-btn">Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
