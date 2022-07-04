const mongoose =require('mongoose');
require('dotenv').config();
// const mongoURI="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"


const uri=process.env.ATLAS_URI;

const connectToMongo=()=>{
    mongoose.connect(uri,()=>{
        console.log("Connected to Mongo sucessfully");
        // useNewUrlParser:true;
        // useUnifiedTopology:true
      
    })
}


// const uri=process.env.ATLAS_URI;


// mongoose.connect(uri,{
//     useNewUrlParser:true});

// const connection=mongoose.connection;

// connectToMongo.once('open',()=>
// console.log('MongoDB connection established successfully'));

module.exports=connectToMongo;
