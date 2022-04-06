const express=require('express');
const mongoose = require('mongoose');
const router=express.Router();
const {Schema}=mongoose;


const ProductSchema = new Schema({

    user:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'user'
    },

    title :{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
     
    },
   
    tag: {
        type: String,
        default:'General'
         
    },

    date: {
        type: Date,
        default: Date.now
    },

    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model('product',ProductSchema)