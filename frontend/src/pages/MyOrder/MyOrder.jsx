import React, { useContext, useEffect, useState } from "react";
import "./MyOrder.css";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

const MyOrder = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
            const res = await axios.post(
                `${url}/api/order/userorders`,
                {},
                { headers: { token } }
            );
            setData(res.data.data || []);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className="my-orders">
            <h2>My Orders</h2>

            {data.length === 0 ? (
                <p className="empty">No orders placed yet.</p>
            ) : (
                <div className="order-list">
                    {data.map((order, index) => (
                        <div className="order-card" key={index}>
                            <div className="order-top">
                                <span className="order-id">Order #{order._id.slice(-6)}</span>
                                <span className={`order-status ${order.status}`}>
                                    {order.status}
                                </span>
                            </div>

                            <div className="order-items">
                                {order.items.map((item, idx) => (
                                    <div className="order-item" key={idx}>
                                        <img
                                            src={`${url}/images/${item.image}`}
                                            alt={item.name}
                                            className="order-item-img"
                                        />

                                        <div className="order-item-info">
                                            <p className="order-item-name">{item.name}</p>
                                            <p className="order-item-qty">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="order-bottom">
                                <p className="order-total">₹{order.amount}</p>
                                <p className="order-date">
                                    {new Date(order.date).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrder;
