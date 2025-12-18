import React, { useState } from "react";
import axios from "axios";
import "./Add.css";
import { toast } from "react-toastify";

const Add = ({url}) => {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0]
    setData({ ...data, image: file });

    if (file) {
      setPreview(URL.createObjectURL(file)); // preview URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.image);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("image", data.image);

    const response = await axios.post(`${url}/api/food/add`,data,{
  headers: { "Content-Type": "multipart/form-data" }
});

    if (response.data.success == true) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "",
        image: null,
      })

      setPreview(null)

      toast.success(response.data.message)
    }else{
      console.log(response.data.message)
      toast.error(response.data.message)
    }
  };

  return (
    <div className="add-food">
      <h2>Add New Food Item 🍔</h2>
      <form className="add-form" onSubmit={handleSubmit}>

        {/* Preview Image */}
        <div className="image-preview-box">
          {preview ? (
            <img src={preview} alt="preview" className="preview-image" />
          ) : (
            <p className="no-preview">No image selected</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="input-group">
          <label>Food Image</label>
          <input type="file" accept="image/*" onChange={handleImage} />
        </div>

        {/* Name */}
        <div className="input-group">
          <label>Food Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter food name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="input-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter food description"
            value={data.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Price */}
        <div className="input-group">
          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={data.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category */}
        <div className="input-group">
          <label>Category</label>
          <select
            name="category"
            value={data.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="noodles">Noodles</option>
            <option value="pasta">Pasta</option>
            <option value="dessert">Dessert</option>
            <option value="rolls">Rolls</option>
            <option value="drinks">Drinks</option>
            <option value="sandwich">Sandwich</option>
          </select>
        </div>

        {/* Submit Button */}
        <button className="submit-btn" type="submit">
          + Add Food
        </button>
      </form>
    </div>
  );
};

export default Add;
