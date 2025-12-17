import React, { useEffect, useState } from "react";
import "./Orders.css";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const res = await axios.get(`${url}/api/order/list`);
      if (res.data.success) {
        setOrders(res.data.data);
      } else {
        toast.error("Failed to fetch orders");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

  const statusHandler = async(event,orderId)=>{
    const res = await axios.post(url+"/api/order/status",{orderId,status:event.target.value});
    if(res.data.success){
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="admin-orders">
      <h2>Orders</h2>

      <div className="orders-table">
        <div className="orders-header">
          <p>Order ID</p>
          <p>Customer</p>
          <p>Address</p>
          <p>Items</p>
          <p>Total</p>
          <p>Status</p>
          <p>Date</p>
        </div>

        {orders.length === 0 ? (
          <p className="empty">No orders found</p>
        ) : (
          orders.map((order, index) => (
            <div className="orders-row" key={index}>
              <p className="order-id">#{order._id.slice(-6)}</p>

              <p className="customer">
                {order.address?.firstName} {order.address?.lastName}
              </p>

              {/* ADDRESS */}
              <div className="address">
                <p>{order.address?.street}</p>
                <p>
                  {order.address?.city}, {order.address?.state}
                </p>
                <p>
                  {order.address?.country} - {order.address?.zipcode}
                </p>
                <p className="phone">📞 {order.address?.phone}</p>
              </div>

              {/* ITEMS */}
              <div className="items">
                {order.items.map((item, i) => (
                  <span key={i}>
                    {item.name} × {item.quantity}
                  </span>
                ))}
              </div>

              <p className="amount">₹{order.amount}</p>

              {/* STATUS */}
              <select
                className={`status ${order.status}`}
                onChange={(event)=>statusHandler(event,order._id)}
                defaultValue={order.status}
              >
                <option value="preparing">Preparing</option>
                <option value="out-for-delivery">Out for delivery</option>
                <option value="delivered">Delivered</option>
              </select>

              <p className="date">
                {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
