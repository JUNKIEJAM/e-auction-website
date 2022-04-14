const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const fileSchema=new Schema({
  
title:{
    type:String,
    required:true
},

article:{
    type:String,
    required:true   
},

price:{
    type:Number,
    required:true   
},

photo:{
type:Buffer,
contentType:String
},

authorname:{
    type:String,
    required:true
},

})


module.exports=mongoose.model('Files',fileSchema)