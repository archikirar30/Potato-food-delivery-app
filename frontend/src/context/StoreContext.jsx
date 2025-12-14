import { createContext, use, useEffect, useState } from "react";
import {food_list} from '../assets/assets'
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider =(props)=>{

    const [cartItem, setCartItem] = useState({})
    const [list, setList] = useState([]);
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");

    const loadFoodItem = async()=>{
        const res = await axios.get(`${url}/api/food/list`);

        if(res.data.success){
            setList(res.data.data);
        }
    }

    const addToItem =(itemId) =>{

        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }

    const removeFromItem =(itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }

    const removeItem = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:0}))
    }

    const getTotalCartAmount =()=>{
        let total = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = list.find((product)=>product._id === item);
                total += itemInfo.price*cartItem[item]
            }
        }

        return total
    }

    useEffect(()=>{
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
        }
        loadFoodItem();
    },[])

    const contextValue = {
        food_list,
        cartItem,
        url,
        setCartItem,
        addToItem,
        removeFromItem,
        removeItem,
        getTotalCartAmount,
        token,
        setToken,
        list
    }

    return <StoreContext.Provider value={contextValue}>
        {props.children }
    </StoreContext.Provider>
}

export default StoreContextProvider