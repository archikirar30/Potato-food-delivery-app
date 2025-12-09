import { createContext, useState } from "react";
import {food_list} from '../assets/assets'

export const StoreContext = createContext(null)

const StoreContextProvider =(props)=>{

    const [cartItem, setCartItem] = useState({})

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
                let itemInfo = food_list.find((product)=>product._id === item);
                total += itemInfo.price*cartItem[item]
            }
        }

        return total
    }

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToItem,
        removeFromItem,
        removeItem,
        getTotalCartAmount
    }

    return <StoreContext.Provider value={contextValue}>
        {props.children }
    </StoreContext.Provider>
}

export default StoreContextProvider