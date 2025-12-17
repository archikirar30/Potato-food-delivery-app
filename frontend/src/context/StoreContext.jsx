import { createContext, use, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({})
    const [food_list, setFoodList] = useState([]);
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");


    const fetchFoodItem = async () => {
        const res = await axios.get(url + "/api/food/list");

        if (res.data.success) {
            setFoodList(res.data.data);
        }
    }

    const addToItem = async (itemId) => {

        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }

    }

    const removeFromItem = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }

    }

    const removeAll = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: 0 }))
    }

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                total += itemInfo.price * cartItem[item]
            }
        }

        return total
    }

    //load cart data
    const loadCartData = async (token) => {
        if (token) {
            const res = await axios.post(url + "/api/cart/get",{}, { headers: { token :token,"Content-Type": "application/json", } });
            
            if (res.data.success) {
                setCartItem(res.data.cartData);
            }
        }

    };

    useEffect(() => {

        const loadData = async () => {
            await fetchFoodItem();

            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadCartData(storedToken);
            }
        };

        loadData();
    }, [])
    useEffect(() => {
        console.log("Token updated:", token);
    }, [token]);


    const contextValue = {
        food_list,
        cartItem,
        url,
        setCartItem,
        addToItem,
        removeFromItem,
        removeAll,
        getTotalCartAmount,
        token,
        setToken,
    }

    return <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContextProvider