import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {url,food_list} = useContext(StoreContext)
  return (
    <div className="food-display" id="food-display">
      <h2>Here is Top food near you!</h2>
      <div className="display-food-list">
        {food_list.map((item,index)=>{
          if(category==="All" || category===item.category){
          return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay