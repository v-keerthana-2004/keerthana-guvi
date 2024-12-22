 import mongoose from "mongoose";

 const ProductSchema = mongoose.Schema({ 
    productName:{
        type:String,
        required:true,
    },
    productPrice:{
        type:Number,
        required:true,


    },
    productImage:{
        type:String,
        required:true,
    },

})
const products = mongoose.model("products",ProductSchema)

export default products;