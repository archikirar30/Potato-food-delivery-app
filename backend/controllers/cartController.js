import userModel from "../models/userModel.js"

//add item to user cart
const addToCart = async (req, res) => {
  try {

    // ✅ SAFETY CHECK
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const userId = req.user.id
    const {itemId} = req.body;


    if (!itemId) {
      return res.status(400).json({
        success: false,
        message: "Item ID missing",
      });
    }

    let userData = await userModel.findById(userId);
    let cartData = await userData.cartData || {};

    cartData[itemId] = (cartData[itemId] || 0) + 1;

    await userModel.findByIdAndUpdate(userId,{cartData});
    res.json({success:true,message:"Added to cart"});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};


//remove from the cart
const removeFromCart = async (req, res) => {

  try {
    // ✅ SAFETY CHECK
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const userId = req.user.id
    const {itemId} = req.body;


    if (!itemId) {
      return res.status(400).json({
        success: false,
        message: "Item ID missing",
      });
    }

    let userData = await userModel.findById(userId);
    let cartData = await userData.cartData || {};

    if(cartData[req.body.itemId]>0){
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(userId,{cartData});
    return res.json({success:true, message:"Removed from cart"})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error" });
  }
  
};


//fetch user cart data
const getCart = async (req, res) => {
  try {
    // ✅ SAFETY CHECK
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const userId = req.user.id
    
    let userData = await userModel.findById(userId);
    let cartData = await userData.cartData || {};

    res.json({success:true, cartData})
  } catch (error) {
    res.json({success:false,message:"Error"})
  }
};


export {addToCart, removeFromCart, getCart}