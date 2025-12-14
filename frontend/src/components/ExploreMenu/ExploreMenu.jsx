import React from 'react'
import './ExploreMenu.css'
import { menuList } from '../../assets/assets'

function ExploreMenu({category, setCategory}) {
  
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore menu </h1>
        <p className="explore-menu-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quasi?</p>
        <div className="explore-menu-list">
            {menuList.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className={category===item.menu_name?`${item.menu_name} active`:`${item.menu_name}`} key={index}>
                        <img src={item.menu_image} />
                        <h2>{item.menu_name}</h2>
                    </div>
                    )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu