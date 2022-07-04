const mongoose =require('mongoose');
// require('dotenv').config();
// // const mongoURI="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"


// const uri=process.env.ATLAS_URI;

// const connectToMongo=()=>{
//     mongoose.connect(uri,()=>{
//         console.log("Connected to Mongo sucessfully");
//         // useNewUrlParser:true;
//         // useUnifiedTopology:true
      
//     })
// }


// // const uri=process.env.ATLAS_URI;


// // mongoose.connect(uri,{
// //     useNewUrlParser:true});

// // const connection=mongoose.connection;

// // connectToMongo.once('open',()=>
// // console.log('MongoDB connection established successfully'));

// module.exports=connectToMongo;

// import mongoose from 'mongoose';

const connectDB =  async ()=>{

    try{
        const conn = await mongoose.connect("mongodb+srv://junkiejam:junkiejam@cluster0.lcozfy5.mongodb.net/?retryWrites=true&w=majority",{
            //must add in order to not get any error masseges:
            useUnifiedTopology:true,
            useNewUrlParser: true
            // useCreateIndex: true
        })
        console.log(`mongo database is connected!!! ${conn.connection.host} `)
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1) //passing 1 - will exit the proccess with error
    }

}

 module.exports=connectDB;