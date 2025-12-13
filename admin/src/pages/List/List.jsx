import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchFood = async () => {

    try {
      const res = await axios.get(`${url}/api/food/list`);

      if (res.data.success) {
        setList(res.data.data);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch food list");
    }
  }

  const removeItem = async(id) =>{
    try {

      const res = await axios.post(`${url}/api/food/remove`,{id});
      await fetchFood()
      if(res.data.success){
        toast.success(res.data.message);
      }else{
        toast.error(res.data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove food item");
    }
  }

  useEffect(() => {
    fetchFood();
  }, [list])

  return (
    <div className="list">
      <h2>Food Items List 🍱</h2>

      <div className="list-table">
        <div className="list-table-header">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span>Action</span>
        </div>

        {list.length === 0 && (
          <p className="no-data">No food items found</p>
        )}

        {list.map((item,index) => (
          <div className="list-table-row" key={index}>
            <img
              src={`${url}/images/${item.image}`}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <button
              className="delete-btn"
              onClick={() => removeItem(item._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List