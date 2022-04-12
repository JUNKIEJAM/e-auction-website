const express=require('express');
const mongoose = require('mongoose');
const router=express.Router();
const {Schema}=mongoose;


const ProductSchema = new Schema({

    title:{
        type:String,
        required:true
    },
    
    article:{
        type:String,
        required:true   
    },
    
    authorname:{
        type:String,
        required:true
    },
  
});

module.exports=mongoose.model('product',ProductSchema)