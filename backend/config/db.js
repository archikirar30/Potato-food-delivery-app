import mongoose from 'mongoose';

export const connectDb = async () =>{
    await mongoose.connect("mongodb+srv://archikirar_db_user:Archikirar_55@cluster0.7dffjd1.mongodb.net/food_del").then(()=>console.log("DB connected"))
}