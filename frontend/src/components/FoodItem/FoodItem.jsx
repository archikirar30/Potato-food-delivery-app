import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { IoIosAddCircleOutline } from "react-icons/io";
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, description, image, price }) => {

    const {cartItem, addToItem, removeFromItem} = useContext(StoreContext)

    return (
        <div className="food-item">
            <div className="food-item-image-container">
                <img src={image} className='food-item-image' alt='image' />
                {!cartItem[id] ? (
                    <IoIosAddCircleOutline
                        className='food-item-counter'
                        onClick={() => addToItem(id)}
                    />
                ) : (
                    <div className='food-item-count'>
                        <button onClick={() => removeFromItem(id)}>-</button>
                        <p>{cartItem[id]}</p>
                        <button onClick={() => addToItem(id)}>+</button>
                    </div>
                )}


            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating} alt='rating' />
                </div>
                <p className="food-item-desc">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default FoodItem